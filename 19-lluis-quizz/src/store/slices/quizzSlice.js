import { createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { useFirebase } from "../../main";

const quizzSlice = createSlice({
  name: "quizz",
  initialState: {
    questions: [
      {
        question: "Cuantos años tiene Dru",
        options: ["22", "23", "24", "25"],
        correctOptionIndex: 2,
      },
      {
        question: "Que le gusta hacer",
        options: ["Gym", "CrossFit", "Natación", "Padel"],
        correctOptionIndex: 0,
      },
      {
        question: "Color favorito",
        options: ["negro", "Azul", "Rojo", "Verde"],
        correctOptionIndex: 1,
      },
    ],
    currentQuestionIndex: 0,
    teams: [],
    // teams: localStorage.getItem("teams")
    //   ? JSON.parse(localStorage.getItem("teams"))
    //   : []
    yourCurrentTeam: undefined,
    // yourCurrentTeam: localStorage.getItem("yourCurrentTeam")
    //   ? JSON.parse(localStorage.getItem("yourCurrentTeam"))
    //   : undefined
  },
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload);
      // localStorage.setItem("teams", JSON.stringify(state.teams));
    },
    setYourCurrentTeam: (state, action) => {
      state.yourCurrentTeam = action.payload;
      localStorage.setItem(
        "yourCurrentTeam",
        JSON.stringify(state.yourCurrentTeam)
      );
    },
    setCurrentQuestionIndex: state => {
      state.currentQuestionIndex += 1;
    },

    updateTeamPoints: state => {
      const idToUpdate = parseInt(localStorage.getItem("yourCurrentTeam"));
      const objetoRecuperado = JSON.parse(localStorage.getItem("teams"));

      const teamToUpdate = objetoRecuperado.find(
        team => team.id === idToUpdate
      );

      if (teamToUpdate) {
        teamToUpdate.points = teamToUpdate.points + 10;
        localStorage.setItem("teams", JSON.stringify(objetoRecuperado));
      }
      return {
        ...state,
        teams: objetoRecuperado, // Actualizamos el objeto en el estado
      };
    },
    deleteTeam: (state, action) => {
      const teamIndex = action.payload;
      state.teams = state.teams.filter((team, index) => index !== teamIndex);
      const datosAlmacenados = localStorage.getItem("teams");
      const objetoRecuperado = JSON.parse(datosAlmacenados);
      objetoRecuperado.splice(teamIndex, 1);
      const datosActualizados = JSON.stringify(objetoRecuperado);
      localStorage.setItem("teams", datosActualizados);
    },
  },
});

export const {
  addTeam,
  setCurrentQuestionIndex,
  setYourCurrentTeam,
  updateTeamPoints,
  deleteTeam,
  setSelectedTeam,
} = quizzSlice.actions;

export const quizzReducer = quizzSlice.reducer;

// Función para cargar los datos iniciales desde Firestore
export const loadInitialStateFromFirestore = () => {
  return async dispatch => {
    const { db } = useFirebase();

    try {
      const teamsCollection = collection(db, "equipos");
      const querySnapshot = await getDocs(teamsCollection);

      const teamsData = [];
      querySnapshot.forEach(doc => {
        teamsData.push({ ...doc.data(), id: doc.id });
      });

      // Despachar una acción para establecer los datos en el estado inicial
      dispatch(
        quizzSlice.actions.setInitialStateFromFirestore({ teams: teamsData })
      );
    } catch (error) {
      console.error("Error al cargar datos iniciales desde Firestore:", error);
    }
  };
};

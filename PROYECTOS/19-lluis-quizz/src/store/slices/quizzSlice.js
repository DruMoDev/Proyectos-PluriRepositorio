import { createSlice } from "@reduxjs/toolkit";

[
  {
    name: "Tragabolas",
    points: 0,
    id: 0,
  },
  {
    name: "Maricones",
    points: 0,
    id: 1,
  },
  {
    name: "DruTeam",
    points: 0,
    id: 2,
  },
];

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
    teams: localStorage.getItem("teams")
      ? JSON.parse(localStorage.getItem("teams"))
      : [],
    yourCurrentTeam: localStorage.getItem("yourCurrentTeam")
      ? JSON.parse(localStorage.getItem("yourCurrentTeam"))
      : undefined,
  },
  reducers: {
    addTeam: (state, action) => {
      state.teams.push(action.payload);
      localStorage.setItem("teams", JSON.stringify(state.teams));
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

    updateTeamPoints: (state) => {
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


import { configureStore } from "@reduxjs/toolkit";
import { carsReducer, addCar, removeCar, changeSearchTerm } from "./slices/carsSlice";
import { formReducer, changeCost, changeName } from "./slices/fromSlice";

const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
})

export {store, addCar, removeCar, changeCost, changeName, changeSearchTerm}
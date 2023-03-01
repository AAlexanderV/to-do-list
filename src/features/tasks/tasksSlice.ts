import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem("tasks") || "[]");
    // const initialState = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks") || "[]") : [];

// [
//      {title: asd, description: qwerrt, status: false},
//      {title: asd, description: qwerrt, status: false},
//      {title: asd, description: qwerrt, status: false},
// ]

export const tasksSlice = createSlice({
    name: "tasks",
    initialState: JSON.parse(localStorage.getItem("tasks") || "[]"),
    reducers: {
        addTask: (state:any, action) => {
            state.push(action.payload);
            localStorage.setItem(
                "tasks",
                JSON.stringify(state)
            );
        },
        toggleTaskStatus:(state:any, action) => {

            state[action.payload].status = !state[action.payload].status;

            localStorage.setItem(
                "tasks",
                JSON.stringify(state)
            );
        },
        deleteTask:(state:any, action) => {
            state.splice(action.payload, 1);

            localStorage.setItem(
                "tasks",
                JSON.stringify(state)
            );
        },

    },
});


export const { addTask, toggleTaskStatus,deleteTask } = tasksSlice.actions;

export default tasksSlice.reducer;
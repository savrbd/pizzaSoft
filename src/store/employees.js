import { createSlice } from "@reduxjs/toolkit";
import data from '../employees.json';


const employeesSlice = createSlice({
    name: "employees",
    initialState:{
        entities:null,
    },
    reducers: {
        employeesReceved(state, action){
            state.entities=action.payload
        },
        employeesCreate(state, action){
            state.entities.push(action.payload)
        },
        employeesUpdate(state, action){
            
            state.entities[
                state.entities.findIndex((u) => u.id === action.payload.id)
            ] = action.payload;
        },
    }
})
const { reducer: employeesReducer, actions} = employeesSlice;
const { employeesReceved, employeesCreate, employeesUpdate } = actions
export const loadEmployees = () => async (dispatch)=>{
    try{
        let content = data 
        dispatch(employeesReceved(content))
    } catch(error){
        console.log(error.message)
    }
};
export const createEmployee = (payload)=> (dispatch)=>{
    dispatch(employeesCreate(payload))
}
export const updateEmployee = (payload)=> (dispatch)=>{
    dispatch(employeesUpdate(payload))
}
export const getEmployees = () => (state)=>state.employees.entities
export default employeesReducer;
import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: ['pen', 'book', 'laptop'],
        inputValue: ''
},

    reducers: {
        addTodo: (state, action) => {state.todos.push(action.payload)},
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo !== action.payload)
        },

        clearValue: (state) => {state.inputValue = ''}
    }
        
})

export const { addTodo, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
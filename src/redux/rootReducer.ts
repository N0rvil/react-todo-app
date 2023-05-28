import { combineReducers } from '@reduxjs/toolkit'
import { todoReducer } from './reducers/todoReducer'

export const rootReducer = combineReducers({
    todoList: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>

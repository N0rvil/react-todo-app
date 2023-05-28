export const todoReducer = (state = [], action: object) => {
    switch (action.type) {
        case 'ADD_TASK':
            const { id, name, description, date, done } = action.payload
            const newTodo = {
                id,
                name,
                description,
                date,
                done,
            }
            return [...state, newTodo]
        case 'CHANGE_STAGE':
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done }
                }
                return todo
            })
        case 'DELETE_TASK':
            return state.filter((todo) => todo.id !== action.payload)
        case 'INIT_TASKS':
            return (state = action.payload)
        default:
            return state
    }
}

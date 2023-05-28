export const deleteTask = (id: number) => {
    return {
        type: 'DELETE_TASK',
        payload: id,
    }
}

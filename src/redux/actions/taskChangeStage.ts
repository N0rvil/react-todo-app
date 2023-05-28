export const taskChangeStage = (id: number) => {
    return {
        type: 'CHANGE_STAGE',
        payload: id,
    }
}

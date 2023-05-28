import { convertDateToUnixTimestamp } from '@/helpers/helperFunctions'

export const addTask = (id: number, name: string, description: string, planeDate: string, done: boolean) => {
    const date = convertDateToUnixTimestamp(planeDate)

    return {
        type: 'ADD_TASK',
        payload: { id, name, description, date, done },
    }
}

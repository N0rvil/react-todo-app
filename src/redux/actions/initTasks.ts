import { convertDateToUnixTimestamp } from '@/helpers/helperFunctions';

export const initTasks = (tasks: Array<object>) => {
    const taskWithTimestamp: object = [];
    tasks.forEach((item) => {
        item.date = convertDateToUnixTimestamp(item.date)
        taskWithTimestamp.push(item)
    })
    return {
        type: 'INIT_TASKS',
        payload: taskWithTimestamp,
    }
}

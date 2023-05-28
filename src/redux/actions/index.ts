import { addTask } from './addTask'
import { taskChangeStage } from './taskChangeStage'
import { deleteTask } from './deleteTask'
import { initTasks } from './initTasks'

export const actions = {
    addTask,
    taskChangeStage,
    deleteTask,
    initTasks,
}

export type ActionType = ReturnType<typeof addTask> | ReturnType<typeof taskChangeStage> | ReturnType<typeof deleteTask>

// Converting date to unix time stamp
export const convertDateToUnixTimestamp = (date: string) => {
    const currentDate = date ? new Date(date) : new Date()
    !date ? currentDate.setDate(currentDate.getDate() + 1) : null
    return currentDate.getTime()
}

// Converting date from unix time stamp to readable format
export const convertDateFromUnixTimestamp = (timestamp: number) => {
    const date = new Date(timestamp)
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
}

// Check if the date is older than today
export const isDateOld = (primaryDate: number) => {
    const currentDate = new Date()
    return primaryDate > currentDate.getTime() ? false : true
}

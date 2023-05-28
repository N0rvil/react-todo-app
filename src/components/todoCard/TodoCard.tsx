import { FC } from 'react'
import { Button, Typography, CardContent, Card, Checkbox } from '@mui/material'
import { connect } from 'react-redux'
import { RootState } from '@/redux/rootReducer'
import { useAppDispatch } from '@/redux/store'
import { actions } from '@/redux/actions/index'
import { convertDateFromUnixTimestamp, isDateOld } from '@/helpers/helperFunctions'
import { TodoCardInterface } from './interface/TodoCard.interafce' // Import the interface from the separate file
import axios from 'axios'

const TodoCard: FC<TodoCardInterface> = ({ name, description, date, id, done }) => {
    const dispatch = useAppDispatch()
    const cardStyle = {
        marginTop: '10px',
        width: '100%',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: done ? '#66FF99' : isDateOld(date) ? '#f08080' : '',
    }

    const cardContentStyle = {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
    }

    const deleteTask = () => {
        axios
            .post(`${import.meta.env.VITE_BASE_URL}deleteTask`, { id })
            .then((response: object) => {
                if (response.data.status) {
                    dispatch(actions.deleteTask(response.data.data.id))
                }
            })
            .catch((error: Error) => {
                console.error('Error:', error)
            })
    }

    const changeStage = () => {
        axios
            .post(`${import.meta.env.VITE_BASE_URL}changeTaskStage`, { id, done: !done })
            .then((response: object) => {
                if (response.data.status) {
                    dispatch(actions.taskChangeStage(response.data.data))
                }
            })
            .catch((error: Error) => {
                console.error('Error:', error)
            })
    }

    return (
        <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
                <Checkbox
                    checked={done}
                    onChange={() => {
                        changeStage()
                    }}
                />
                <Typography variant="h5" component="h2" style={{ width: '15%' }}>
                    {name}
                </Typography>
                <Typography display="block" variant="body2" color="textSecondary" style={{ width: '60%' }}>
                    {description}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{ width: '20%' }}>
                    Date: {convertDateFromUnixTimestamp(date)}
                </Typography>
                <Button variant="contained" color="error" onClick={() => deleteTask()}>
                    Delete
                </Button>
            </CardContent>
        </Card>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        todoList: state.todoList,
    }
}

const connector = connect(mapStateToProps)

export default connector(TodoCard)

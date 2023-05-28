import { FC, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form } from '@/components/form/Form'
import { RootState } from '@/redux/rootReducer'
import TodoCard from '@/components/todoCard/TodoCard'
import { DashboardInterface } from './interface/Dashboard.interface'
import { useAppDispatch } from '@/redux/store'
import axios from 'axios'
import { actions } from '@/redux/actions/index'

const Dashboard: FC<DashboardInterface> = ({ todoList }) => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        // Get the todo list from DB
        const getData = () => {
            axios
                .get(`${import.meta.env.VITE_BASE_URL}getTasks`)
                .then((response) => {
                    dispatch(actions.initTasks(response.data.data))
                })
                .catch((error) => {
                    console.error('Error:', error)
                })
        }

        getData()
    }, [])

    // Function for rendering the todo list
    const renderList = () => {
        return todoList.map((item: object, index: number) => {
            return (
                <TodoCard
                    name={item.name}
                    description={item.description}
                    date={item.date}
                    id={item.id}
                    done={item.done}
                    key={index}
                />
            )
        })
    }

    return (
        <div>
            <Form />
            <div>{renderList()}</div>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        todoList: state.todoList,
    }
}

export default connect(mapStateToProps)(Dashboard)

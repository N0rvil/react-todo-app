import { useState } from 'react'
import { Input, Button, TextField } from '@mui/material'
import { useAppDispatch } from '@/redux/store'
import { actions } from '@/redux/actions/index'
import axios from 'axios'
import { convertDateToUnixTimestamp } from '@/helpers/helperFunctions'

export const Form = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const dispatch = useAppDispatch()

    const formStyle = {
        width: '20%',
        height: '350px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
    }

    // Send data to BE and reset the states
    const handleSubmit = () => {
        if (!name) {
            return alert('Please fill all required fields')
        }
        const unixDate = convertDateToUnixTimestamp(date)
        const data = {
            name,
            description,
            unixDate,
        }
        axios
            .post(`${import.meta.env.VITE_BASE_URL}createTask`, data)
            .then((response) => {
                if (response.data.status) {
                    dispatch(actions.addTask(response.data.data.id, name, description, date, false))
                    setName('')
                    setDescription('')
                    setDate('')
                }
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }

    return (
        <div style={formStyle}>
            <div style={{ width: '100%' }}>
                <span style={{ color: 'red' }}>*</span>
                <Input
                    style={{ width: 'calc(100% - 20px)', marginLeft: '10px' }}
                    placeholder="Name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
            </div>

            <TextField
                placeholder="Description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                multiline
                rows={4}
                style={{ width: '100%' }}
            />
            <Input
                type="date"
                value={date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(e.target.value)}
                fullWidth
            />
            <Button type="submit" variant="contained" color="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </div>
    )
}

import React, { useState, useContext } from 'react'
import { LoadingContext } from '../../../contexts'
import * as api from '../../../api'
import './style.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

export const User = ({ user }) => {
    const [details, setDetails] = useState({})
    const [isSelected, setSelection] = useState(false)
    const loading = useContext(LoadingContext)

    const handleOpen = async () => {
        if (!Object.keys(details).length) {
            setSelection(true)
            const response = await api.getUser(user.login)
            setDetails(response.data)
        }
        setSelection(true)
    }

    const handleClose = () => setSelection(false)

    return (
        <div className='card'>
            <div className='main-content'>
                <img className='avatar' src={`${user.avatar_url}`} />
                <div className='user-name'>{user.login}</div>
            </div>
            {!isSelected
                ? <div className='expand' onClick={handleOpen}><ExpandMoreIcon /></div>
                : <div>
                    <div className='expand' onClick={handleClose}><ExpandLessIcon /></div>
                    <div>{details.name}</div>
                    <div>{details.email}</div>
                    <div>{details.followers}</div>
                    <div>{details.location}</div>
                </div>
            }
        </div>
    )
}

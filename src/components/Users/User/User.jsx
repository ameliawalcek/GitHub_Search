import React, { useState } from 'react'
import * as api from '../../../api'
import './style.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import PeopleIcon from '@material-ui/icons/People'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import EmailIcon from '@material-ui/icons/Email'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

export const User = ({ user }) => {
    const [details, setDetails] = useState({})
    const [isSelected, setSelection] = useState(false)

    const handleClose = () => setSelection(false)

    const handleOpen = async () => {
        if (!Object.keys(details).length) {
            setSelection(true)
            const response = await api.getUser(user.login)
            setDetails(response.data)
        }
        setSelection(true)
    }

    return (
        <div className='card'>
            <div className='main-content'>
                <img className='avatar' src={`${user.avatar_url}`} alt='profile' />
                <div className='user-name'>{user.login}</div>
            </div>
            {!isSelected
                ? <div className='expand' onClick={handleOpen}><ExpandMoreIcon /></div>
                : <>
                    <div className='expand' onClick={handleClose}><ExpandLessIcon /></div>
                    {(Object.keys(details).length > 0) &&
                        <div className='more-info'>
                            <div className='list'><AccountCircleIcon style={{ fontSize: '14px' }} /> {details.name}</div>
                            <div className='list'><LocationOnIcon style={{ fontSize: '14px' }} />{details.location}</div>
                            <div className='list'><EmailIcon style={{ fontSize: '14px' }} /> {details.email}</div>
                            <div className='list'><PeopleIcon style={{ fontSize: '14px' }} /> {details.followers}</div>
                        </div>
                    }
                </>
            }
        </div>
    )
}

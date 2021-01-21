import React, { useState, useContext, useRef, useEffect } from 'react'
import * as api from '../../api'
import { LoadingContext, SearchContext, ErrorContext, PageContext } from '../../contexts'
import './style.css'

export const Search = () => {
    const { setUsers } = useContext(SearchContext)
    const { setLoading } = useContext(LoadingContext)
    const { setError } = useContext(ErrorContext)
    const { page } = useContext(PageContext)

    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const prevInput = useRef('')

    useEffect(() => inputRef.current.focus())

    const handleChange = ({ target }) => setInput(target.value)

    const searchUsers = async (query) => {
        setLoading(true)
        setError(false)
        setUsers({})

        const response = await api.getUsers(query, page)
        const { users, total } = response.data

        if (!users.length) {
            setError(true)
        } else {
            setUsers({ users, total })
        }
        setLoading(false)
    }

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            prevInput.current = input
            setInput('')
            searchUsers(input.split(' ').join(''))
        }
    }

    useEffect(() => {
        if (page > 1) searchUsers(prevInput.current)
    }, [page])

    return (
        <div>
            <input
                type="text"
                placeholder='Search users...'
                value={input}
                ref={inputRef}
                onChange={handleChange}
                onKeyDown={handleSearch}
            />
        </div>
    )
}

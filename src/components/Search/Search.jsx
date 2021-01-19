import React, { useState, useContext, useRef, useEffect } from 'react'
import * as api from '../../api'
import { LoadingContext, SearchContext, ErrorContext } from '../../contexts'

export const Search = () => {
    const [input, setInput] = useState('')
    const search = useContext(SearchContext)
    const loading = useContext(LoadingContext)
    const errorMessage = useContext(ErrorContext)
    const inputRef = useRef(null)

    const handleChange = ({ target }) => setInput(target.value)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleSearch = async () => {
        loading.setLoading(true)
        const response = await api.getUsers(input)
        setInput('')
        loading.setLoading(false)
        console.log(response.data)

        if (!response.total) {
            errorMessage.setError(true)
        } else {
            const { users, total } = response.data
            search.setUsers({ users, total })
        }
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Search users...'
                value={input}
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    )
}

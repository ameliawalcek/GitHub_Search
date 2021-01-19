import React, { useState, useContext, useRef, useEffect } from 'react'
import * as api from '../../api'
import { LoadingContext, SearchContext, ErrorContext, PageContext } from '../../contexts'
import './style.css'

export const Search = () => {
    const search = useContext(SearchContext)
    const loading = useContext(LoadingContext)
    const errorMessage = useContext(ErrorContext)
    const page = useContext(PageContext)

    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const prevInput = useRef('')

    useEffect(() => inputRef.current.focus())

    const handleChange = ({ target }) => setInput(target.value)

    const searchUsers = async (query) => {
        loading.setLoading(true)
        errorMessage.setError(false)
        search.setUsers({})

        const response = await api.getUsers(query, page.page)
        const { users, total } = response.data

        if (!users.length) {
            errorMessage.setError(true)
        } else {
            search.setUsers({ users, total })
        }
        loading.setLoading(false)
    }

    const handleSearch = async (e) => {
        if (e.keyCode === 13) {
            prevInput.current = input
            setInput('')
            searchUsers(input.split(' ').join(''))
        }
    }

    useEffect(() => {
        if (page.page > 1) {
            console.log(page.page)
            searchUsers(prevInput.current)
            console.log(prevInput.current)
        }
    }, [page.page])

    return (
        <div>
            <input
                type="text"
                placeholder='Search users...'
                value={input}
                onChange={handleChange}
                onKeyDown={handleSearch}
                ref={inputRef}
            />
        </div>
    )
}

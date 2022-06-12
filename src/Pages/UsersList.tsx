import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserList } from "../queryFetcher"
import { setUser } from '../storage/slices/users'
const UsersList = () => {
    const dispatch = useDispatch()
    const usersdata = useSelector((state: any) => state.users.userList)
    const { isError, data, isLoading, error } = useQuery("userList", getUserList, {
        onSuccess(users: any) {
            dispatch(setUser(users?.data))
        }
    })
    if (isLoading) {
        return <h1>Data is Loading ...... </h1>
    }
    if (isError) {
        return <h3>error occured</h3>
    }
    console.log("data ", data)
    return (
        <div>
            {
                usersdata.map((dataSet: any, index: number) => (
                    <Link to={`/users/`}><p>{dataSet.first_name} {'  '} {dataSet.last_name}</p></Link>
                ))
            }
        </div>
    )
}

export default UsersList
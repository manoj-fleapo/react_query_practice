import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { getUserList } from "../queryFetcher"
const UsersList = () => {
    const { isError, data, isLoading, error } = useQuery("userList", () => {
        return axios.get("http://localhost:4500/user-list")
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
                data?.data.map((dataSet: any, index: number) => (
                    <p>{dataSet.first_name} {'  '} {dataSet.last_name}</p>
                ))
            }
        </div>
    )
}

export default UsersList
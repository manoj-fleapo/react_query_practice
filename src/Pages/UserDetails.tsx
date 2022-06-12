import React from 'react'
import { getUser } from '../queryFetcher'
import { useQuery } from "react-query"
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setDetails } from '../storage/slices/userDetails'

const UserDetails = () => {
    const { id } = useParams()
    const userDetails = useSelector((state: any) => state.userDetails.details)
    const dispatch = useDispatch()
    const numberId: number = !!id ? +id : 1
    console.log("numberId", numberId)
    const { data, isError, error, isLoading } = useQuery(["userData", numberId], () => getUser(numberId), {
        onSuccess(user) {
            console.log("data : ", user)
            dispatch(setDetails(user?.data))
        }
    })
    console.log(data)
    return (
        <div>
            <div>

                <h6>first name : {userDetails.first_name}</h6>
                <h6>last name : {userDetails.last_name}</h6>
                <h6>Email : {userDetails.email}</h6>
                <h6>Country : {userDetails.country}</h6>
            </div>
        </div>
    )
}

export default UserDetails
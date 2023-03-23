import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getUserDetails } from '../actions/user';

export default function UserDetails() {

   const dispatch = useDispatch()
   const { user } = useSelector((state) => state.user);

   const params = useParams()

   useEffect(() => {
      dispatch(getUserDetails(params.id))
   }, [dispatch, params.id])


   return (
      <div className='flex items-center justify-center w-[100vw] h-[100vh] leading-loose '>
         {
            user && <div className='w-auto flex flex-col space-y-4 p-3'>
               <div className='font-medium text-xl'>Name : <span className='text-xl font-normal'>{user.name}</span></div>
               <div className='font-medium text-xl'>Age : <span className='text-xl font-normal'>{user.age}</span></div>
               <div className='font-medium text-xl'>Address : <span className='text-xl font-normal'>{user.address}</span></div>
               <div className='font-medium text-xl'>Department : <span className='text-xl font-normal'>{user.department}</span></div>
               <div className='font-medium text-xl'>Employee Status : <span className='text-xl font-normal'>{user.employeeStatus}</span></div>

               <Link to={`/updateuser/${params.id}`}><button className='bg-blue-500 p-3 text-white text-lg font-medium'>Update Profile</button></Link>

            </div>
         }
      </div>
   )
}

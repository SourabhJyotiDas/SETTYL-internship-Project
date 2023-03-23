import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom';
import { getAllUsers } from '../actions/user';


export default function Allrecords() {

  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.user)


  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])

  return (
    <>
        <div className='flex flex-wrap items-center justify-center'>
          {
            users && users.map((element, index) => {
              return <div key={index} className=" flex flex-col items-center justify-center bg-gray-400 w-[80%] md:w-[40%] md:h-[20vh] lg:w-[30vw] lg:h-[30vh] m-3">
                <h2 className=' font-medium text-xl'>{element.name}</h2>
                <p className='text-sm'>Address : {element.address}</p>
                <Link to={`/updateprofile/${element._id}`}>
                  <button className='my-3 p-2 bg-blue-500 text-white'>
                    All details
                  </button>
                </Link>
              </div>
            })
          }
        </div>
    </>
  )
}

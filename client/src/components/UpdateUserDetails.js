import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../actions/user';

export default function UpdateUserDetails() {

   const dispatch = useDispatch()
   const { user} = useSelector((state) => state.user)

   const params = useParams()
   const navigate = useNavigate()

   const [name, setName] = useState(user.name);
   const [age, setAge] = useState(user.age);
   const [address, setAddress] = useState(user.address);
   const [category, setCategory] = useState(user.employeeStatus);
   const [department, setDepartment] = useState(user.department);

   const categories = [
      "Remote location",
      "Contact employee",
      "Full time",
   ];

   const handleupdateUser = () => {
      dispatch(updateUser(name, age, address, category, department, params.id));
      navigate(`/updateprofile/${params.id}`)
   }

   return (
      <div className='h-[100vh] w-[100vw] flex items-center justify-center'>

         {
            user && <div className='w-[90%]  md:w-[50%] lg:w-[40%] flex items-center flex-col bg-gray-400 p-10'>
               <form className="w-[100%] flex flex-col justify-center items-center" encType="multipart/form-data" onSubmit={handleupdateUser}>
                  <h1 className='text-center text-2xl'>Update user</h1>

                  <input className='w-[90%] p-3 m-2 outline-none' type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />


                  <input className='w-[90%] p-3 m-2 outline-none' type="text" placeholder="Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />


                  <input className='w-[90%] p-3 m-2 outline-none' type="number" placeholder="age" required value={age} onChange={(e) => setAge(e.target.value)} />


                  <textarea className='w-[90%] p-3 m-2 outline-none' placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} ></textarea>

                  <select className='w-[90%] p-4' onChange={(e) => setCategory(e.target.value)}>
                     <option value={category}>Choose Category</option>
                     {categories.map((cate) => (
                        <option key={cate} value={cate}>
                           {cate}
                        </option>
                     ))}
                  </select>

                  <button type="submit" className='p-4 px-6 my-5 bg-blue-600 text-white '>
                     Update user
                  </button>
               </form>
            </div>
         }

      </div>
   )
}

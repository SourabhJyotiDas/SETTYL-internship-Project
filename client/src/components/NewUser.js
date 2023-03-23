import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { createUser } from '../actions/user';

export default function NewUser() {

   const dispatch = useDispatch();

   const { error, success } = useSelector((state) => state.user)

   const [name, setName] = useState("");
   const [age, setAge] = useState("");
   const [address, setAddress] = useState("");
   const [category, setCategory] = useState("");
   const [department, setDepartment] = useState("");

   const categories = [
      "Remote location",
      "Contact employee",
      "Full time",
   ];

   const createNewUser = async (e) => {
      e.preventDefault();
      await dispatch(createUser(name, age, address, category, department))
      setName("")
      setAddress("")
      setAge("")
      setDepartment("")
   }

   useEffect(() => {
      if (error) {
         toast.error(error, {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
         });
      }
      if (success) {
         toast.success("User created successfully", {
            position: "top-center",
            autoClose: 2000,
            theme: "light",
         });
      }
   }, [error, success])

   return (
      <div className='h-[100vh] w-[100vw] flex items-center justify-center'>

         <div className='w-[90%] md:w-[50%] lg:w-[40%] flex items-center flex-col bg-gray-400 p-10'>
            <form className="w-[100%] flex flex-col justify-center items-center" encType="multipart/form-data" onSubmit={createNewUser}>
               <h1 className='text-center text-2xl'>Create Users</h1>

               <input className='w-[90%] p-3 m-2 outline-none' type="text" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />


               <input className='w-[90%] p-3 m-2 outline-none' type="text" placeholder="Department" required value={department} onChange={(e) => setDepartment(e.target.value)} />


               <input className='w-[90%] p-3 m-2 outline-none' type="number" placeholder="age" required value={age}  onChange={(e) => setAge(e.target.value)} />


               <textarea className='w-[90%] p-3 m-2 outline-none' placeholder="Address" value={address} required onChange={(e) => setAddress(e.target.value)} ></textarea>

               <select className='w-[90%] p-4' onChange={(e) => setCategory(e.target.value)}>
                  <option value={category}>Choose Category</option>
                  {categories.map((cate) => (
                     <option key={cate} value={cate}>
                        {cate}
                     </option>
                  ))}
               </select>

               <button type="submit" className='p-4 px-6 my-5 bg-blue-600 text-white '>
                  Create
               </button>
            </form>
         </div>

      </div>
   )
}

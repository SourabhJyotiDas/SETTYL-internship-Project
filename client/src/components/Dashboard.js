import React, { useEffect } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from "chart.js"
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../actions/user';


ChartJS.register(
   CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement
)


export default function Dashboard() {

   const dispatch = useDispatch()
   const { users } = useSelector((state) => state.user);

   useEffect(() => {
      dispatch(getAllUsers())
   }, [dispatch])

   console.log(users);

   const lineState = {
      labels: ["Initial users", "Total users"],
      datasets: [
         {
            label: `TOTAL USERS ${users && users.length}`,
            backgroundColor: ["tomato"],
            hoverBackgroundColor: ["rgb(197, 72, 49)"],
            data: [0, users && users.length],
         },
      ],
   }
   const doughnutState = {
      labels: ["Full-Time", "Remote Location", "Contact Employee"],
      datasets: [
         {
            backgroundColor: ["red", "purple", "green"],
            hoverBackgroundColor: ["#4B5000", "#35014F", "green"],
            data: [1, 1, 1],
         },
      ],
   }


   return (
      <div className='h-[auto] w-[100vw] flex flex-col justify-center items-center'>
         <div className='md:w-[50vw] md:h-[auto]'>
            <Line className='w-[100%]' data={lineState} />
         </div>

         <div className="md:w-[50vw] md:h-[auto] lg:w-[30vw] my-10">
            <Doughnut className='w-[100%] ' data={doughnutState} />
         </div>
      </div>
   )
}

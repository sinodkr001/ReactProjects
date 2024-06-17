import React, { useEffect, useState } from 'react'

export function Github(props) {
    const [data,setData]=useState([])
    useEffect(()=>{
         fetch('https://api.github.com/users/hiteshchoudhary').then(Response=>Response.json()).then(data=>{
            setData(data)
         })
    },[])

    return (
        <>
           <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub Followers:{data.followers}
           <img src={data.avatar_url} className='w-300' />
           </div> 
        </>
    )
}

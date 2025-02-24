import React, { useEffect, useState } from 'react'

export default function Github(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Usman9889')
        .then(response => response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    }, [])

    return (
        
            <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xlz'>Github followers: {data.followers}
            <img src={data.avatar_url} alt="Git picture" width={300} />
            </div>
        
    )
}

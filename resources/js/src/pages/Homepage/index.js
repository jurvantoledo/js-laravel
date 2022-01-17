import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function Homepage() {
    const [userData, setUserData] = useState({
        loading: false,
        data: []
    })

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://127.0.0.1:8000/users')

            setUserData({loading: true, data: response.data});
        }

        fetchData();
    }, [])

    return (
        <div className="grid grid-cols-4 gap-4">
            {userData.data.map(user => {
                return(
                    <div key={user.id} className="text-xs border text-center rounded">
                            <p><b>Name:</b> {user.name}</p>
                            <p><b>Email:</b> {user.email}</p>

                    </div>
                )
            })}
        </div>
    )
}
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
        <div>
            {userData.data.map(user => {
                return(
                    <div key={user.id}>
                        <p>{user.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
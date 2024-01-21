import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


function Home() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    console.log(firstName)


    return (
        <div>
            <p>Home Page</p>
            <Link to="/account">Go to Account page</Link>
            <button to="" onClick={() => navigate("/account")}>Se connecter</button>

            <input onChange={(e) => setFirstName(e.target.value)} value={firstName} />

            <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
            
            <button onClick={() => console.log(firstName, lastName)}>ok</button>







        </div>
    )
}

export default Home

import { useEffect, useState } from 'react';

interface User {
    name: String;
    email: String;
    photo: String;
}

const ServerTest: React.FC = () => {
    // const userURL = 'localhost:8000/api/v1/users/5c8a1dfa2f8fb814b56fa181';
    // const [user, setUser] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/api/v1/users/login', {
            headers: { "Content-type": "application/json"  },
            method: "POST",
            body: JSON.stringify({
                email: 'loulou@example.com',
                password: 'test1234',
            }),
        }).then(res => console.log(res.json())).catch(res => console.log(res))
    }, [])


    // const req = fetch('localhost:8000/api/v1/users/5c8a1dfa2f8fb814b56fa181').then(res => res.json())

    return (
        <div>
            <div>yes</div>
            {/* <button onClick={login}>Login</button> */}
            {/* <div>{email}{name}</div>
            <img src={photo} alt="" /> */}
        </div>
    );
};

export default ServerTest;

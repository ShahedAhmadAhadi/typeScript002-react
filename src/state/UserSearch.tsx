import { useState } from 'react'

const UserSearch: React.FC = () => {

    const users = [{name: 'Sarah', age:20}, {name: 'Alex', age:20}, {name: 'Micheal', age:20}]
    const [name, setName] = useState('')
    const [user, setUser] = useState<{name: string, age: number} | undefined>()

    const ClickHandler = () => {
        const foundUser = users.find((user) => {return user.name === name })
        console.log(foundUser)
        setUser(foundUser)
    }

    return <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={ClickHandler}>Search</button>
        {user && user.name}
        {user && user.age}
    </div>
}

export default UserSearch
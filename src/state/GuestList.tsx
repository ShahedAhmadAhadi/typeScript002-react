import { useEffect, useRef, useState } from "react"

const GuestList: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [name, setName] = useState('')
    const [guests, setGuests] = useState<string[]>([])

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    const onClick = () => {
        setName('')
        setGuests([...guests, name])
    }

    return (
        <div>
            <h3>Guest List</h3>
            <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={onClick}>Add Guest</button>
            <ul>
            {guests && guests.map(item => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}

export default GuestList

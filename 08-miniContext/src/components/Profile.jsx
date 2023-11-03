import {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    const {user} = useContext(UserContext);

    if (!user) return <p>Please Login</p>
    return (
        <div>Welcome {user.username} your password is {user.password}</div>
    )
}

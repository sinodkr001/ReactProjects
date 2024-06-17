import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export function Profile(props) {
    
    const {user}=useContext(UserContext)
    if(!user) return <div>please</div>
    return <div>Welcome{user.username}</div>
}

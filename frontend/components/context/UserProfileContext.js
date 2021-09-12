import React from 'react'

const UserProfileContext = React.createContext({
    profilepic: '',
    username: '',
    age: '',
    phone: '',
    gender: ''
})

export default UserProfileContext;
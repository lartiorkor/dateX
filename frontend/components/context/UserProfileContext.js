import React from 'react'

const UserProfileContext = React.createContext({
    username: '',
    age: '',
    gender: '',
    profilepic: ''
})

export default UserProfileContext;
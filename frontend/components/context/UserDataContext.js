import React from 'react'

const UserDataContext = React.createContext({
    name: '',
    email: '',
    password: '',
})

export default UserDataContext;
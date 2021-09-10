import React from 'react'

const UserDataContext = React.createContext({
    name: '',
    email: '',
    password: '',
    accessToken: '',
    refreshToken: '',
    userObject: {}
})

export default UserDataContext;
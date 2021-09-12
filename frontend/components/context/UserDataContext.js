import React from 'react'

const UserDataContext = React.createContext({
    email: '',
    password: '',
    accessToken: '',
    refreshToken: '',
    userObject: {}
})

export default UserDataContext;
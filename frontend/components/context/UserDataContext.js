import React from 'react'

const UserDataContext = React.createContext({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
})

export default UserDataContext;
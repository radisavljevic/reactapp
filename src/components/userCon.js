import React from 'react'

const userCon = React.createContext()

const UserProvider = userCon.Provider
const UserConsumer = userCon.Consumer

export {UserProvider, UserConsumer}
import React, { useState } from 'react'
import { userContext } from './Context'


const Context = ({ children }) => {
    const [user, setUser] = useState("no User")
    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}

export default Context
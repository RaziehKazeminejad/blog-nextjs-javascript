import React from 'react'

export default function AuthProvider({children}) {
    return (
        <div>
            <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
        </div>
    )
}

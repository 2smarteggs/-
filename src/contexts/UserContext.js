import {createContext, useContext, useState} from 'react';

const UserContext = createContext({});

export function UserProvider({ children }) {

    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{user, updateUser: setUser}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const { user, updateUser } = useContext(UserContext)
    return { user, updateUser };
}

import { createContext } from "react";

export interface User {
    phone_id: string;
}

export const UserContext = createContext<User | null>(null);
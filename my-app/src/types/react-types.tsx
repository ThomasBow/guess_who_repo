


import { User } from "./model";

export type GlobalData = {
    user: User | null;
    setUser: (user: User | null) => void;
}
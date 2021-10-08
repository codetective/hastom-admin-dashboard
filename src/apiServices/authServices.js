import { http } from './httpService';

export const login = (data) => {
    return http.post("/signin", data)
}

export const register = (data) => {
    return http.post("/create-account", data)
}

export const logout = () => {
    return http.post("/sign-out")
}
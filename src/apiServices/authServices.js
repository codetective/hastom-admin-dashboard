import { http } from './httpService';

export const login = (data) => {
    return http.post("/super-admin/sign-in", data)
}

export const createAdmin = (data) => {
    return http.post("/super-admin/create-admin", data)
}
export const getAllAdmin = () => {
    return http.get(`/super-admin/get-all-admins`)
}
export const getAllUsersSuperAdmin = () => {
    return http.get("/super-admin/users/list/all?role_is_super_admin=true")
}
export const getAllUsersAdmin = () => {
    return http.get("/super-admin/users/list/all?role_is_admin=true")
}
export const deactivateAdmin = (id) => {
    return http.delete(`/super-admin/deactivate-admin/${id}`)
}

export const reactivateAdmin = (id) => {
    return http.put(`/super-admin/reactivate-admin/${id}`)
}

export const logout = () => {
    return http.post("/sign-out")
}
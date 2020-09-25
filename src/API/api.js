import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "a263b6be-9e63-4dd7-94b8-897ec216b477"
    }
})

export const usersAPI = {
    getUsers(pageSize = 10, currentPage = 1) {
        return instance.get(`users?count=${pageSize}&page=${currentPage}`).then(response => {
            return response.data
        })
    },
    followUser(id)  {
        return instance.post(`follow/${id}`, {}, {}).then(response => {
            return response.data
        })

    },
    unfollowUser(id) {
        return instance.delete(`follow/${id}`, {}, {}).then(response => {
            return response.data
        })
    },

}


export const authAPI = {
    auth() {
        return axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => response.data)
    }
}


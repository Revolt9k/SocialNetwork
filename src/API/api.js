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
    followUser(id) {
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

export const profileAPI = {
    getProfile(userId) {
        if(!userId) {
            userId = 11651
        }
        return instance.get('profile/' + userId, {}).then(response => {
            return response.data
        })
    },
    getStatus(userId) {
        if(!userId) {
            userId = 11651
        }
        return instance.get('profile/status/' + userId)

    },
    updateStatus(status) {
        return instance.put('profile/status/', {status: status})
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    updateProfileInfo() {
        return instance.put('profile', {
            userId: 11651,
            AboutMe: "im good",
            lookingForAJob: true,
            lookingForAJobDescription: 'Focusing on it',
            fullName: 'Konstatntin Alekseev',
            contacts: {
            Github: "https://github.com/Revolt9k",
            Vk: "https://vk.com/id174840893",
            //     // facebook: "test",
            //     // instagram: "test",
            //     // twitter: "test",
            //     // website: "test",
            //     // youtube: "test",
            //     // mainLink: "test",
            }
            }
        )
    }
}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`, {}).then(response => response.data)
    },
    login(email, password, rememberMe = false) {
        return instance.post('auth/login', {email, password, rememberMe}, {})
    },
    logout(email, password, rememberMe = false) {
        return instance.delete('auth/login', {})
    }
}




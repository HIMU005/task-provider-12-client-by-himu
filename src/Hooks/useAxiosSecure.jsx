import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD


export const axiosSecure = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
    // baseURL: "http://localhost:5000",
    baseURL: "https://task-management-himu005.vercel.app",
<<<<<<< HEAD
=======
import { useEffect } from "react";
=======
>>>>>>> f7a9c7b (improve in usesecure)


export const axiosSecure = axios.create({
<<<<<<< HEAD
    baseURL: "http://localhost:5000",
<<<<<<< HEAD
    // withCredentials: true,
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> f7a9c7b (improve in usesecure)
=======
    // baseURL: "http://localhost:5000",
    baseURL: "https://taskmanagement-eg027ticz-himu005s-projects.vercel.app",
>>>>>>> d471ce8 (deploy done)
=======
>>>>>>> 823ddbc (fixed backend domain issue)
=======
    baseURL: "http://localhost:5000",
    // baseURL: "https://task-management-himu005.vercel.app",
>>>>>>> c8b509d (change the logo and title)
=======
    // baseURL: "http://localhost:5000",
    baseURL: "https://task-management-himu005.vercel.app",
>>>>>>> ba21378 (final deploy)
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f7a9c7b (improve in usesecure)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.Authorization = token;
        return config;
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error)
    })

<<<<<<< HEAD
=======
    useEffect(() => {
        axiosSecure.interceptors.response.use(
            res => {
                return res
            },
            async error => {
                console.log('error tracked in the interceptor', error.response)
                if (error.response.status === 401 || error.response.status === 403) {
                    await logOut()
                    navigate('/login')
                }
                return Promise.reject(error)
            }
        )
    }, [logOut, navigate])
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
>>>>>>> f7a9c7b (improve in usesecure)

    return axiosSecure
}

export default useAxiosSecure;
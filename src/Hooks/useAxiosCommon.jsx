import axios from "axios";


const axiosCommon = axios.create({
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://task-management-himu005.vercel.app',
=======
    baseURL: 'http://localhost:5000',
>>>>>>> b2e9578 (registration authprovider)
=======
    // baseURL: 'http://localhost:5000',
<<<<<<< HEAD
    baseURL: 'https://taskmanagement-eg027ticz-himu005s-projects.vercel.app',
>>>>>>> d471ce8 (deploy done)
=======
    baseURL: 'https://task-management-himu005.vercel.app',
>>>>>>> 823ddbc (fixed backend domain issue)
=======
    baseURL: 'http://localhost:5000',
    // baseURL: 'https://task-management-himu005.vercel.app',
>>>>>>> 6e21f58 (main home page finished)
=======
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://task-management-himu005.vercel.app',
>>>>>>> ba21378 (final deploy)
})

const useAxiosCommon = () => {
    return axiosCommon;
}
export default useAxiosCommon;
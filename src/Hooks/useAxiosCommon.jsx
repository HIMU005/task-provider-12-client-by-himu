import axios from "axios";


const axiosCommon = axios.create({
    // baseURL: 'http://localhost:5000',
    baseURL: 'https://taskmanagement-eg027ticz-himu005s-projects.vercel.app',
})

const useAxiosCommon = () => {
    return axiosCommon;
}
export default useAxiosCommon;
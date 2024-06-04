import useAuth from "./useAuth";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useInfo = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: role = "", isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.email}`)
            return data;
        }
    })

    return [role, isLoading]
};

export default useInfo;
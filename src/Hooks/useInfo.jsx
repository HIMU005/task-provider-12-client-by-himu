import useAuth from "./useAuth";
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from "./useAxiosSecure";

const useInfo = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();
<<<<<<< HEAD
<<<<<<< HEAD
    const { data: role = "", isLoading, refetch } = useQuery({
=======
    const { data: role = "", isLoading } = useQuery({
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
    const { data: role = "", isLoading, refetch } = useQuery({
>>>>>>> 415e466 (update the user coin after he add any task)
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.email}`)
            return data;
        }
    })

<<<<<<< HEAD
<<<<<<< HEAD
    return [role, isLoading, refetch]
=======
    return [role, isLoading]
>>>>>>> 2af016a (dashboard layout footer and navbar done)
=======
    return [role, isLoading, refetch]
>>>>>>> 415e466 (update the user coin after he add any task)
};

export default useInfo;
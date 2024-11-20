import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwipeIt from './SwipeIt';
<<<<<<< HEAD
<<<<<<< HEAD
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../Hooks/useAxiosCommon';

const Hero = () => {
    const axiosCommon = useAxiosCommon();
    const { data: heros = [] } = useQuery({
        queryKey: ['heros'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/hero');
            return data;
        }
    })
=======
import useAxiosSecure from '../../Hooks/useAxiosSecure';
=======
>>>>>>> a700365 (update hero section,)
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../Hooks/useAxiosCommon';

const Hero = () => {
    const axiosCommon = useAxiosCommon();
    const { data: heros = [] } = useQuery({
        queryKey: ['heros'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/hero');
            return data;
        }
    })
<<<<<<< HEAD
    console.log(heros);
>>>>>>> 02aa898 (hero section done)
=======
>>>>>>> a700365 (update hero section,)
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >


                {
                    heros.map(hero => <SwiperSlide key={hero._id} > <SwipeIt hero={hero} /> </SwiperSlide>)
                }




            </Swiper>
        </>
    );
};

export default Hero;
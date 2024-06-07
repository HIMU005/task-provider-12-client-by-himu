import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwipeIt from './SwipeIt';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Hero = () => {
    const axiosSecure = useAxiosSecure();
    const { data: heros = [] } = useQuery({
        queryKey: ['heros'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/hero');
            return data;
        }
    })
    console.log(heros);
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
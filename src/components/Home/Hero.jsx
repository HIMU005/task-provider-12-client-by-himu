import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SwipeIt from './SwipeIt';
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
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-creative';

export const Swipe = ({ children }) => {
	return (
		<Swiper
			modules={[Navigation, Pagination, Autoplay]}
			loop={true}
			slidesPerView={1}
			navigation={true}
			pagination={{ clickable: true }}
			className="w-[100%] md:w-[80%] h-[95vh] sm:h-full flex items-center justify-center sm:shadow-xl"
		>
			{children}
		</Swiper>
	);
};

import SwiperCore, { Pagination, Mousewheel } from "swiper";
SwiperCore.use([Pagination, Mousewheel]);

import { Swiper, SwiperSlide } from "swiper/react";
import Shell from "../Shell";

const SwiperSlider = (props) => {
    return (
        <Shell>
            <Swiper
                spaceBetween={24}
                slidesPerView={3.2}
                onSlideChange={(slide) => console.log('slide changed', slide)}
                pagination={{
                    type: "progressbar",
                }}
                mousewheel
            >
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        1
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        2
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        3
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        4
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        5
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="text-center" style={{ padding: 40 }}>
                        6
                    </div>
                </SwiperSlide>
            </Swiper>
        </Shell>
    );
};
export default SwiperSlider;

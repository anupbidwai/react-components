import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const fakeImages = [
    "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/haf/h83/9433409683486/P2236N215MET-970-1/P2236N215MET-970-1.jpg",
    "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/hab/h06/9483540594718/F2211N580SFA-660-1/F2211N580SFA-660-1.jpg",
    "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/hec/hd5/9491044401182/F2211N414DWT-001-1/F2211N414DWT-001-1.jpg",
    "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h73/ha7/9475974529054/F2211N728MRT-660-1/F2211N728MRT-660-1.jpg",
    "https://www.carolinaherrera.com/cdn-cgi/image/q=80,format=auto,fit=contain,width=600/medias/sys_master/images/h3e/hd5/9491044466718/F2212N214KWV-001-1/F2212N214KWV-001-1.jpg",
];

const CenteredSlide = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    let slider = null,
        navPrev = null,
        navNext = null,
        activeSlide = null,
        adjustement = 40; // adjustement because of scale and translate3d(-20px) in css

    // set navigation position
    const setPosition = (e) => {
        let rectActiveSlide = activeSlide.getBoundingClientRect();
        let rectSwiper = slider.getBoundingClientRect();

        let activeSlidePosition = rectActiveSlide.left + rectActiveSlide.width;

        let navPosition = {
            left: e.clientX - rectSwiper.left,
            top: e.clientY - rectSwiper.top,
        };

        // set navigation postion
        const setNavigationPosition = (navigation) => {
            // show navigation when it reaces the specified boundry
            let y1 = rectSwiper.y + 20;
            if (e.clientY > y1) {
                navigation.style.left = (navPosition.left - 13) + 'px';
                navigation.style.top = navPosition.top + 'px';
                navigation.style.zIndex = 1;
                navigation.style.opacity = 1;
            }

            // hide navigation when it corssed the specified boundry
            let y2 = e.clientY - rectSwiper.top;
            if (y2 > (rectSwiper.height - 20)) {
                reSetPosition();
            }
        };

        // prev btn
        if (e.clientX < activeSlidePosition + adjustement) {
            setNavigationPosition(navPrev);
            // hide next btn
            navNext.style.zIndex = -1;
            navNext.style.opacity = 0;
        }

        // next btn
        if (e.clientX > activeSlidePosition + adjustement) {
            setNavigationPosition(navNext);
            // hide prev btn
            navPrev.style.zIndex = -1;
            navPrev.style.opacity = 0;
        }

        // hide prev btn when pointer move on active slide
        if (e.clientX > rectActiveSlide.left - adjustement) {
            navPrev.style.zIndex = -1;
            navPrev.style.opacity = 0;
        }
    };

    const reSetPosition = () => {
        navPrev.style.opacity = 0;
        navNext.style.opacity = 0;
    };


    // mounting and update phase
    useEffect(() => {
        slider = document.querySelector(".mySwiper");
        navPrev = document.querySelector(".swiper-button-prev");
        navNext = document.querySelector(".swiper-button-next");

        if (slider) {
            slider.addEventListener("pointermove", setPosition);
            slider.addEventListener("pointerout", reSetPosition);
        }
        return () => {
            slider.removeEventListener("pointermove", setPosition);
            slider.removeEventListener("pointerout", reSetPosition);
        }
    });

    // re-assing activeSlide, to get correct one
    useEffect(() => {
        activeSlide = document.querySelector(".swiper-slide-active");
    }, [activeIndex])

    return (
        <>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <h1>1</h1>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                slidesPerView={5}
                spaceBetween={24}
                loop={true}
                centeredSlides={true}
                speed={1000}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {
                    fakeImages.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="slide">
                                <img src={slide} />
                            </div>
                            {/* <div className='details'>
                            <h1>title</h1>
                        </div> */}
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    )
};
export default CenteredSlide;
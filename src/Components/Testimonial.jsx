import React from 'react';
import { Container } from 'react-bootstrap';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

const userfoto1 = 'images/testimoni_foto1.png';
const userfoto2 = 'images/testimoni_foto2.png';
const star = 'images/Star.png';

const Testimonial = () => {
    return (
        <div id="testimonial">
            <Container className="text-center">
                {/* for header */}
                <h2>Testimonial</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
            </Container>
            <div>
                {/* for Carousel */}
                {/* dibawah ini swiper container */}
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper" centeredSlides={true} loop={true} slidesPerView="auto">
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto1} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Trisna Wahyudi 20, Bali</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto2} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Yulia Dewi 20, Bali</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto1} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Trisna Wahyudi 20, Bali</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="carousel-image">
                            <img src={userfoto2} alt="testimonial user avatar" />
                        </div>
                        <div className="carousel-text ms-5">
                            <div className="rating-stars">
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                                <img src={star} alt="Rating stars" />
                            </div>
                            <div className="carousel-desc">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsam obcaecati optio minima facilis quaerat, quis, culpa harum deleniti ea quisquam alias reprehenderit cum non nam fugiat corrupti
                                    veritatis ut!
                                </p>
                                <h3 className="username">Yulia Dewi 20, Bali</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;

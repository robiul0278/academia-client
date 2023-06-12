import img2 from "../../../assets/banner/banner1.jpg";
import img1 from "../../../assets/banner/banner2.jpg";
import img3 from "../../../assets/banner/banner3.jpg";
import img4 from "../../../assets/banner/banner4.jpg";

const Banner = () => {
    return (
        <>
            <div className="carousel w-full md:-mt-16">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex  justify-center items-center h-full bg-gradient-to-r from-gray-500">
                        <div className="text-white text-start mt-10 md:space-y-7 md:pl-12 w-2/3">
                            <h1 className="md:text-md text-sm text-green-500 font-bold">
                                WELCOME TO ACADEMIA
                            </h1>
                            <h1 className="md:text-5xl text-2xl font-bold">
                                Best Online Education Expertise
                            </h1>
                            <p className="hidden lg:flex">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <button className="btn hidden md:flex btn-success mr-2">GET STARTED NOW!</button>
                            <button className="btn btn-sm text-green-500 bg-white">VIEW COURSE </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img1} className="w-full" />
                    <div className="absolute flex  justify-center items-center h-full bg-gradient-to-r from-gray-500">
                        <div className="text-white text-start space-y-7 md:pl-12 w-2/3">
                            <h1 className="md:text-md font-bold">
                                WELCOME TO ACADEMIA
                            </h1>
                            <h1 className="md:text-5xl text-2xl font-bold">
                                Best Online Education Expertise
                            </h1>
                            <p className="hidden lg:flex">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <button className="btn btn-success mr-2">GET STARTED NOW!</button>
                            <button className="btn bg-white">VIEW COURSE </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex  justify-center items-center h-full bg-gradient-to-r from-gray-500">
                        <div className="text-white text-start space-y-7 md:pl-12 w-2/3">
                            <h1 className="md:text-md font-bold">
                                WELCOME TO ACADEMIA
                            </h1>
                            <h1 className="md:text-5xl text-2xl font-bold">
                                Best Online Education Expertise
                            </h1>
                            <p className="hidden lg:flex">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <button className="btn btn-success mr-2">GET STARTED NOW!</button>
                            <button className="btn bg-white">VIEW COURSE </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex  justify-center items-center h-full bg-gradient-to-r from-gray-500">
                        <div className="text-white text-start space-y-7 md:pl-12 w-2/3">
                            <h1 className="md:text-md font-bold">
                                WELCOME TO ACADEMIA
                            </h1>
                            <h1 className="md:text-5xl text-2xl font-bold">
                                Best Online Education Expertise
                            </h1>
                            <p className="hidden lg:flex">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                            </p>
                            <button className="btn btn-success mr-2">GET STARTED NOW!</button>
                            <button className="btn bg-white">VIEW COURSE </button>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;
import "./Banner.css"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return (
  <section className="">
          <div className="hero bg-gradient-to-r to-[#1C7455] from-[#0B2A20]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img data-aos="zoom-in" className="lg:w-4/12 hidden lg:flex" src="https://i.ibb.co/fvQtNxX/Untitled-design-2.png" />
                <div className="text-white md:w-6/12 font my-5">
                    <h4 className="text-[19px]">#1 Platform for Online Learning</h4>
                    <h1 className="md:text-[45px] text-[28px] font-bold">Enroll & <span className="text-error">grow up</span> your <br /> skills today!
                    </h1>
                    <p className="text-[12px] md:text-sm">Explore new skills beyond the world of knowledge and get lost in freedom of creativity.</p>
                    <div className="flex flex-row mt-4">
                        <span className="start cursor-pointer mr-3">Start Learning</span>
                        <span className="get border-2 cursor-pointer border-[#25ab7c]">Get Started</span>
                    </div>
                </div>
            </div>
        </div>
  </section>
    );
};

export default Banner;
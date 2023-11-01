import "./ImageGallery.css";
import 'aos/dist/aos.css';
import AOS from 'aos';

import { useEffect } from "react";

const ImageGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="gallery bg-white p-5 my-5">
        <div
        data-aos="fade-left"
        className="text-center">
        <h1 className="md:text-3xl text-2xl font-semibold mb-1">Discover Our College Gallery</h1>
        <p className="md:px-48 text-xs md:text-sm font-semibold">Discover Our Exciting Collection and Ignite Your Imagination</p>
        </div>
      <div  className="grid-container columns-3 md:columns-5 container mx-auto px-4 py-8 bg-white">
        <div data-aos="fade-right">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/947295034/photo/a-group-of-graduates-throwing-graduation-caps-in-the-air.jpg?s=612x612&w=0&k=20&c=oKxq1Cm32iip83LZzx6l0z_WkqSja1mvSZ5BUkhA6I8=" />
        </div>
        <div data-aos="fade-right">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1066324992/photo/graduation-day.jpg?s=612x612&w=0&k=20&c=cleRpjTZbo430AbH-luZFYMMNqPwhwyTnFgWMbi_AiI=" alt="" />
        </div>
        <div data-aos="fade-right">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1151567114/photo/a-young-female-graduate-against-the-background-of-university-graduates.jpg?s=612x612&w=0&k=20&c=zAFyR9UEbOWLOXqdNQSItVxVxOrjhOvwkfms-TyigA4=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1366623793/photo/diverse-friends-group-takes-joyful-photo-after-graduation.jpg?s=612x612&w=0&k=20&c=HM9tFxrmaMPgaYBpqs6_V6S3mGYBSuMxKvo8s5MMsJk=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=CrKZsKaSiyvn96yrlJ2QurlC9ZQ_1b5Y-hIfuOP7kdY=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/143071319/photo/graduates-tossing-caps-into-the-air.jpg?s=612x612&w=0&k=20&c=jmUBhPSSjcYwDayR3c5ooOqF4ckZSgJPlYJte9MA-bo=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1127339203/photo/backside-graduation-hats-during-commencement-success-graduates-of-the-university-concept.jpg?s=612x612&w=0&k=20&c=axFWbDLdYEwxVIybzuF-CYa-87pfFm9KyP7rgM8aZHQ=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1349302576/photo/happy-graduate-student-holding-his-diploma-on-graduation-day.jpg?s=612x612&w=0&k=20&c=5tC0cWX5hv77DixVGIZkyf-1sh5GU7fDphhcXcRUD8g=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1324892460/photo/a-group-of-asian-graduates.jpg?s=612x612&w=0&k=20&c=YVZlulxcHZwL-qr3NATEG2LQXZYd-tJiAWx5kZVMMWY=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1318652471/photo/man-graduate-is-smiling-against-the-background-of-university-graduates.jpg?s=612x612&w=0&k=20&c=i2mBe9-P3ZrlM2mPmiu2aS4wvTi3GsgaDhlxGoXvd4M=" alt="" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/480952865/photo/graduating-class.jpg?s=612x612&w=0&k=20&c=CrKZsKaSiyvn96yrlJ2QurlC9ZQ_1b5Y-hIfuOP7kdY=" />
        </div>
        <div data-aos="fade-up">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/183817792/photo/portrait-of-happy-graduates.jpg?s=612x612&w=0&k=20&c=gqN89Njd-4jIanD-H_K-ZOVRQRW-Mj04bO8ZxrCq4rw=" alt="" />
        </div>
        <div data-aos="fade-left">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1220732022/photo/the-students-holding-a-shot-of-graduation-cap-by-their-hand-in-a-bright-sky-during-ceremony.jpg?s=612x612&w=0&k=20&c=-3MgRKJLthf-bBdp6zYVIJFwFRHKm_kzzsxOruTGiUY=" alt="" />
        </div>
        <div data-aos="fade-left">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/1041149130/photo/cheerful-college-grads.jpg?s=612x612&w=0&k=20&c=iLJNi99tDXAU2bk0CJw_NJkYYdy8P1Cu2JK58Q21wbY=" alt="" />
        </div>
        <div data-aos="fade-left">
          <img className="grid-item lazy" src="https://media.istockphoto.com/id/844820790/photo/multi-ethnic-teenage-graduates-in-cap-and-gown-hugging.jpg?s=612x612&w=0&k=20&c=uxWSFU5XuwIsTfm_1Sr6mR23U7HnBKSqcumU2YBDG_I=" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
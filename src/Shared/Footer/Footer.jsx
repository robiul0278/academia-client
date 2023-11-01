import logo from "../../assets/logo/book.png";

const Footer = () => {
  return (
    <section className="bg-[#1a1c2d] text-white p-5">
      <div className="hidden md:flex">
        <footer className="footer py-5 max-w-7xl mx-auto flex flex-col lg:flex-row md:flex-row">
          <aside className="basis-2/5">
            <div className="flex items-center">
              <img className="w-10 mr-3" src={logo} alt="" />
              <h1 className="font-bold text-xl md:text-2xl">ACADEMIA</h1>
            </div>
            <p>ProWriter is a article writing platform. <br /> Its aim is to spread the light of the knowledge among all.</p>
          </aside>
          {/* <nav className="hidden lg:flex"></nav> */}
          <nav className="basis-1/5">
            <header className="footer-title">Popular</header>
            <a className="link link-hover">Technology</a>
            <a className="link link-hover">Social Media</a>
            <a className="link link-hover">Travel</a>
            <a className="link link-hover">Writing</a>
          </nav>
          <nav className="basis-1/5">
            <header className="footer-title">Other</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Write</a>
            <a className="link link-hover">Membership</a>
          </nav>
          <nav className="basis-1/5">
          <header className="footer-title">Other Roles</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
      <hr />
      <section className="footer pt-3 max-w-7xl mx-auto flex flex-col md:flex-row lg:flex-row md:justify-between lg:justify-between justify-center items-center">
        <div className="flex space-x-1">
          <img className="w-4" src="https://i.ibb.co/4gz4FK0/facebook-733547.png" alt="facebook" />
          <img className="w-4" src="https://i.ibb.co/PFXXH0W/twitter-3256013.png" alt="twitter" />
          <img className="w-4" src="https://i.ibb.co/gDbPffB/pinterest-3536558.png" alt="" />
          <img className="w-4" src="https://i.ibb.co/mvY6sRb/youtube-3838026.png" alt="youtube" />
          <img className="w-4" src="https://i.ibb.co/17BrLWg/link.png" alt="link" />
        </div>
        <div>
          <h1 className="text-center">Copyright © 2023 - All right reserved by ACADEMIA</h1>
        </div>
      </section>
    </section>
  );
};

export default Footer;
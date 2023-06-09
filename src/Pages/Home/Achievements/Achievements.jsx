import CountUp from 'react-countup';
import icon1 from "../../../assets/Achievements/award.png"
import icon2 from "../../../assets/Achievements/stars.png"
import icon3 from "../../../assets/Achievements/winner.png"

const Achievements = () => {
    return (
        <div className='py-16 px-16'>
            <div className="text-center">
                <h1 className="text-5xl font-semibold mb-3">Our Achievements</h1>
                <h4 className="md:px-48 font-semibold">A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which enjoy with my whole heart. I am alone, and feel the charm of existence in this spot,which wascreated for the bliss of souls like mine.</h4>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-10 mt-10'>
                <div className='flex items-center shadow-sm bg-white p-5'>
                    <img className='w-28 p-5' src={icon1} alt="" />
                    <div className=" leading-loose">
                        <CountUp
                            start={0}
                            end={1605}
                            duration={2.75}
                            delay={2}>
                            {({ countUpRef }) => (
                                <div className='text-4xl font-serif font-bold'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p className="text-md font-bold text-stone-400">CERTIFICATIONS</p>
                    </div>
                </div>
                <div className='flex items-center shadow-sm  bg-white p-5'>
                    <img className='w-28 p-5' src={icon3} alt="" />
                    <div className="leading-loose">
                        <CountUp
                            start={0}
                            end={6052}
                            duration={2.75}
                            delay={2}>
                            {({ countUpRef }) => (
                                <div className='text-4xl font-serif font-bold'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p className="text-md font-bold text-stone-400">AWARDS</p>
                    </div>
                </div>
                <div className='flex items-center shadow-sm  bg-white p-5'>
                    <img className='w-28 p-5' src={icon2} alt="" />
                    <div className=" leading-loose">
                        <CountUp
                            start={0}
                            end={5678}
                            duration={2.75}
                            delay={2}>
                            {({ countUpRef }) => (
                                <div className='text-4xl font-serif font-bold'>
                                    <span ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>
                        <p className="text-md font-bold text-stone-400">5 STARS RATING
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;
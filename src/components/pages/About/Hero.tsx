import { Fade } from "react-awesome-reveal";
import GradientBtn from "../../buttons/GradientBtn";
import './style.css';

const Hero = () => {
  return (
    <section >
      <div className="flex  justify-between items-center ">
        <div className="flex justify-start sm:text-left text-center w-full  items-start flex-col gap-3 sm:gap-5 drop-shadow-xl">
          <Fade triggerOnce cascade direction="left" className="w-full">
            <h4 className="font-bold text-[26px] sm:leading-[1.4] sm:text-[30px] xl:text-[35px] 2xl:text-[45px] drop-shadow-xl">
              The Only Platform for Musical Minds
            </h4>
            <p className="text-slate-700 font-small text-base ">
              Together building authenic musicial communities.
            </p>
            <div className="flex justify-start w-full items-center gap-4 sm:flex-row flex-col">
              <GradientBtn label="SIGNUP"/>
            </div>
          </Fade>
        </div>
        <Fade
          triggerOnce
          cascade
          direction="right"
          className="max-w-[600px] lg:max-w-[450px] xl:max-w-[550px] w-full"
        >
          <div className="w-full grid place-items-center relative mt-5">
            <video
              src="/assets/imgs/home/hero-vid.mp4"
              className="w-full lg:w-[100%] rounded-lg object-contain"
              playsInline
              loop
              controls
            ></video>
            <img
              src="/assets/imgs/about/hero-vid-bg.png"
              className="lg:block hidden w-full object-cover absolute left-[51%] top-1/2 -translate-x-1/2 -translate-y-1/2 -z-10  "
              alt=""
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
import StrokeSvg from "@/components/util/strokeSvg";
import { TRENDING_TECH } from "@/Constants/HeroConstants";
import "./Hero.css";
type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen">
      <div className="text-white p-5 h-fit w-full bg-[#072F53]">
        <img src="./images/heroImage.svg" alt="hero-image" />
        <span className="flex flex-col gap-3 mt-8">
          <h3 className="text-xs py-1 px-2 bg-[#FBC108] rounded-md w-fit text-black font-bold">
            EXPERT INSTRUCTION
          </h3>
          <h1 className="relative text-2xl font-bold">
            Build Skills With Experts Any Time, Anywhere
            <StrokeSvg className="absolute right-12 bottom-0" />
          </h1>
          <p className="text-xs">
            We invest in personnel, technological innovations and infrastructure
            and have established regional and international offices.
          </p>
        </span>
      </div>
      <div className="p-5 bg-[#F1F1F1]">
        <h1 className="text-center text-2xl font-bold relative">
          Popular Olympiad <br /> Programming
          <StrokeSvg className="absolute right-20" />
        </h1>
        <div className="wrapper mt-4 flex whitespace-nowrap overflow-x-scroll scrollbar-hidden gap-4 w-full p-2">
          {TRENDING_TECH.map((tech) => {
            return (
              <div
                className={`bg-white item item${tech.id} flex justify-center items-center gap-4 drop-shadow-lg py-2 px-4 rounded-md`}
                key={tech.id}
              >
                <p className="h-fit w-12">
                  <img src={tech.image} alt="random" />
                </p>
                <h1 className="text-xl">{tech.name}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;

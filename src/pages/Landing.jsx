import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navigation2Icon } from "lucide-react";
import { CardData, CardData1, carouselItems } from "@/data/constant";
import { useState } from "react";
import Marquee from "react-fast-marquee";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(true);
  return (
    <div className="relative container  mx-auto px-4 pt-16 pb-16">
      <div className="max-w-6xl mx-auto mt-10 text-center ">
        <h1 className="text-4xl  md:text-7xl mb-2 sm:mb-6 gradient-title">
          Explore the World
          <br />
          with Destina: Smart AI
        </h1>
        <p className="text-md sm:text-xl text-orange-800 font-semibold mb-8">
          Destina AI: Your intelligent trip planner, crafting unforgettable
          journeys tailored just for you.
        </p>

        <Button variant="trip2" className="sm:mt-2" size="xl">
          <Navigation2Icon />
          Create a new Trip
        </Button>
      </div>
      <div className="mt-10 overflow-hidden relative">
        {/* Marquee component */}
        <Marquee
          direction="left"
          speed={50} // Adjust speed for smooth scrolling
          delay={0} // Adjust delay between loops
          minWidth="100%" // Ensure full-width container for wrapping images
          pauseOnHover={true} // Optional: stop marquee when hovering
          resetAfterTries={false} // Optional: makes it restart smoothly if it breaks
        >
          {/* Looping through images */}
          {carouselItems.map((item) => (
            <img
              key={item.id}
              src={item.img}
              alt={`image-${item.id}`}
              className="w-[150px] h-[100px] sm:w-[260px]  cursor-pointer sm:h-[160px] rounded-xl mx-2" // Adjust image size for responsiveness
            />
          ))}
        </Marquee>
      </div>

      <div className="mx-auto mt-20 max-w-6xl text-center">
        <h2 className="text-4xl  font-bold sm:text-5xl tracking-tighter  text-black">
          Your <span className="text-orange-300">AI-Powered</span> Trip
        </h2>
        <div className="flex flex-col  gap-24 mt-24 mb-36 max-w-4xl mx-auto max-sm:px-4">
          {CardData1.map((data, index) => {
            return (
              <div
                key={data.id}
                className={`bg-transparent ${
                  index === 1
                    ? "flex-col-reverse lg:flex-row "
                    : "flex-col-reverse lg:flex-row-reverse"
                } shadow-none border-none flex justify-between items-center  `}
              >
                <div className=" flex    justify-between">
                  <div className="flex flex-row  text-3xl lg:text-2xl font-bold lg:font-semibold">
                    <img
                      src={data.img}
                      alt={data.title}
                      className="w-[250px]"
                    />
                  </div>
                </div>
                <div className="max-md:text-xl lg:w-[60%]  items-start flex justify-center  flex-col">
                  <h2 className="text-3xl font-bold  gradient-title">
                    {data.title}
                  </h2>
                  <p className="w-full font-semibold  text-[1rem] text-orange-700 text-start">
                    {data.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="max-w-7xl mt-14 mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-orange-300 font-semibold uppercase">
              Destina : AI planner
            </span>
            <h1 className="text-5xl gradient-title">
              The only tool youll ever need!
            </h1>
            <p className="sm:w-1/2  text-center font-semibold text-orange-800">
              Say goodbye to the stress of planning and hello to personalized
              recommendations, efficient itineraries, and seamless dining
              experiences.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-sm:px-4 mt-12">
            {CardData.map((data) => {
              return (
                <Card
                  key={data.id}
                  className="bg-transparent  border-[#ffe5c7]  bg-opacity-15"
                >
                  <CardHeader className=" flex flex-row justify-between">
                    <CardTitle className="flex flex-row text-orange-400  text-3xl lg:text-2xl font-bold lg:font-semibold">
                      <img src={data.img} alt="" className="size-24" />
                      <span className="font-bold">{data.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="max-md:text-md text-orange-900  font-semibold">
                    <p>{data.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

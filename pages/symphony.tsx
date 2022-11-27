import Image from "next/image";
import pic from "../public/assets/projects/symphonyBannerImg.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { TechnologiesProps } from "./shoppingCart";

const symphony: React.FC = () => {
  const technologies: TechnologiesProps[] = [
    { id: 1, name: "React" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 5, name: "Netlify" },
  ];

  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image className="absolute object-cover z-1" fill src={pic} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 p-2">
          <h2 className="py-2">Spotify Tracker App</h2>
          <h3>React JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-10">Overview</h2>
          <p>
            This app allows users to log in to their Spotify account, search for
            a song/album/artist, add songs, remove songs, create custom
            playlists, and save them to their account via a .
          </p>
          <div className="mt-8">
            <a
              href="https://symphony-spotify-clone.netlify.app/"
              className="px-8 py-2 mr-8 text-white uppercase shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-gradient-before to-gradient-after"
            >
              Demo
            </a>
            <a
              href="https://github.com/lazybump/spotify-clone"
              className="px-8 py-2 mr-8 text-white uppercase shadow-xl shadow-gray-400 rounded-xl bg-gradient-to-r from-gradient-before to-gradient-after"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-span-4 p-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
          <div className="p-2">
            <p className="pb-2 font-bold text-center">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              {technologies.map((tech) => (
                <p
                  className="flex items-center py-2 text-gray-600"
                  key={tech.id}
                >
                  <RiRadioButtonFill className="pr-1" /> {tech.name}
                </p>
              ))}
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default symphony;

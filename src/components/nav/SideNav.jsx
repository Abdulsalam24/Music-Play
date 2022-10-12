import { HiHome } from "react-icons/hi";
import { ReactComponent as Logout } from "../../assets/img/logout.svg";
import { ReactComponent as Playlist } from "../../assets/img/playlist.svg";
import { ReactComponent as Radio } from "../../assets/img/radio.svg";
import { ReactComponent as Profile } from "../../assets/img/profile.svg";
import { ReactComponent as Video } from "../../assets/img/videos.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

function SideNav() {
  const location = useLocation();

  const [active, setActive] = useState(location.pathname);

  return (
    <div className="hidden lg:block absolute top-24 left-2 z-40">
      <ul className="flex flex-col gap-8 py-6 px-4 bg-black rounded-full">
        <li>
          <HiHome
            className="w-[30px] h-[30px]"
            fill={active === "/" ? "#FACD66" : "#525552"}
          />
        </li>
        <li>
          <Playlist />
        </li>
        <li>
          <Radio />
        </li>
        <li>
          <Video />
        </li>
        <li>
          <Profile />
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
}

export default SideNav;

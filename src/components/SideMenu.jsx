import React from "react";

import { ReactComponent as Menu } from "../assets/img/menu.svg";
import { ReactComponent as Home } from "../assets/img/home.svg";
import { ReactComponent as Logout } from "../assets/img/logout.svg";
import { ReactComponent as Playlist } from "../assets/img/playlist.svg";
import { ReactComponent as Radio } from "../assets/img/radio.svg";
import { ReactComponent as Profile } from "../assets/img/profile.svg";
import { ReactComponent as Video } from "../assets/img/videos.svg";

function SideMenu({ handleNav }) {
  return (
    <div className="absolute p-3 py-4 top-0 left-0 side_menu h-full z-10 w-full">
      <ul className="flex flex-col gap-8">
        <li onClick={handleNav}>
          <Menu />
        </li>
        <li>
          <Home /> Home
        </li>
        <li>
          <Playlist />
          My collections
        </li>
        <li>
          <Radio />
          Radio
        </li>
        <li>
          <Video />
          Music videos
        </li>
        <li>
          <Profile />
          Profile
        </li>
        <li>
          <Logout />
          Log out
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;

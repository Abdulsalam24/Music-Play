import React from "react";

import { ReactComponent as Menu } from "../../assets/img/menu.svg";
import { ReactComponent as Home } from "../../assets/img/home.svg";
import { ReactComponent as Logout } from "../../assets/img/logout.svg";
import { ReactComponent as Playlist } from "../../assets/img/playlist.svg";
import { ReactComponent as Radio } from "../../assets/img/radio.svg";
import { ReactComponent as Profile } from "../../assets/img/profile.svg";
import { ReactComponent as Video } from "../../assets/img/videos.svg";

function SideMenu({ handleNav }) {
  return (
    <div className="side_menu absolute z-20 top--3 w-full h-screen">
      <ul className="flex flex-col gap-8 py-6 px-4">
        <li onClick={handleNav}>
          <Menu />
        </li>
        <li>
          <Home /> <i>Home</i>
        </li>
        <li>
          <Playlist />
          <i>My collections</i>
        </li>
        <li>
          <Radio />
          <i>Radio</i>
        </li>
        <li>
          <Video />
          <i>Music videos</i>
        </li>
        <li>
          <Profile />
          <i>Profile</i>
        </li>
        <li>
          <Logout />
          <i>Log out</i>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;

import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import Folder from "../components/folder/Folder";

const Home = () => {
  return (
    <div className="h-screen w-screen p-1">
      <Folder name="Home" path="/"/>
      <Folder name="Editor" path="/editor"/>
      <Folder name="Test" path="/test"/>
    </div>
  );
};

export default Home;

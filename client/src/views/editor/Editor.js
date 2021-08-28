import React from "react";
import SYSEditor from "./SYSEditor";

const Editor = () => {
  const configEditor = {
    toolbar: {
      visible: true,
    }
  };
  return (
    <div className="p-6">
      <div id="editor" className="w-full">
        <SYSEditor config={configEditor} />
      </div>

    </div>
  );
};

export default Editor;

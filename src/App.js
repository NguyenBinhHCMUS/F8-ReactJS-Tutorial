import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [avatar, setAvatar] = useState();
  const handlePreviewAvatar = (e) => {
    const files = e.target.files[0];
    setAvatar(URL.createObjectURL(files));
  };

  // Xoa anh cu khoi memory khi thay doi anh moi
  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar);
    };
  }, [avatar]);
  return (
    <div className="App">
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img width={200} height={200} src={avatar} alt="" />}
    </div>
  );
}

export default App;

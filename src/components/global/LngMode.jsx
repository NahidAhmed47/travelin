import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLngMode } from "../../redux/features/lngMode/lngModeSlice";

const LngMode = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { lngMode } = useSelector((state) => state.lngMode);
  const dispatch = useDispatch();
  return (
    <div className="lng-mode" onClick={() => setOpenDropdown(!openDropdown)}>
      <p style={{ color: "white" }}>
        {lngMode === "en" ? "English" : "Arabic"}
      </p>
      {openDropdown && (
        <div className="lng-mode-modal">
          <p onClick={() => dispatch(setLngMode("en"))}>English</p>
          <p onClick={() => dispatch(setLngMode("ar"))}>Arabic</p>
        </div>
      )}
      <img src="/translate.png" style={{ width: "20px", height: "auto" }}></img>
    </div>
  );
};

export default LngMode;

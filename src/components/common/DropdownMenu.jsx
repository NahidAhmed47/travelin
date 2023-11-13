import React, { useState } from "react";

const DropdownMenu = ({ selectedTxt, data, handleSelect }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [title, setTitle] = useState(selectedTxt);
  return (
    <div className="select-box " onClick={() => setOpenDropdown(!openDropdown)}>
      <div className="dropdown-heading">
        <p>{title}</p>
        <img
          src="/images/clicons.png"
          className={openDropdown && "open-icon"}
        ></img>
      </div>
      {openDropdown && (
        <div className="dropdown-option-box">
          {data?.map((d) => (
            <p
              key={d?.id}
              value={d?.id}
              onClick={() => (handleSelect(d?.id), setTitle(d?.name))}
            >
              {d?.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

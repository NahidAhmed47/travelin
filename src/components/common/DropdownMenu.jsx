import React, { useEffect, useRef, useState } from "react";

const DropdownMenu = ({ selectedTxt, data, handleSelect }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [title, setTitle] = useState(selectedTxt);
  const dropdownRef = useRef(null);

  // Add a click event listener to the document to close the dropdown
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     console.log(event.target.className, dropdownRef?.current)
  //     if(event.target.className !== "select-box" && openDropdown) {
  //       setOpenDropdown(false);
  //     }
  //     else{
  //       setOpenDropdown(true);
  //     }
  //     // if (dropdownRef?.current !== dropdownRef?.current?.contains(event.target)) {
  //     //   // setOpenDropdown(false);
  //     // }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   // Cleanup the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [openDropdown]);
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
        <div className="dropdown-option-box" ref={dropdownRef}>
          {data?.map((d) => (
            <p
              key={d?.id}
              value={d?.id}
              onClick={() => (handleSelect(d?.id), setTitle(d?.name))}
            >
              {d?.name}
            </p>
          ))}
          {data?.length === 0 && (
            <p style={{ textAlign: "center", fontSize: "12px" }}>
              <i>No data found!</i>
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

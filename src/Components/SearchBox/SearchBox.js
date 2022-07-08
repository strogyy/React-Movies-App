import React from "react";
import "./SearchBox.css";

const SearchBox = (props) => {
  const { searchValue, settingSearchValue, placeholder } = props;

  return (
    <div className="input-container">
      <input
        type="search"
        className="searchInp"
        placeholder={placeholder}
        value={searchValue}
        onChange={settingSearchValue}
      />
      {
        searchValue !== "" ? <></> :  <i className="fa-solid fa-magnifying-glass searchIcon"></i>
      }
    </div>
  );
};

export default SearchBox;

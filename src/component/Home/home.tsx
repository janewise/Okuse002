import React,{useState} from "react";
import "./Home.css"
import banner from "./home_img/loginbg.png"

export function Home(){

  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

    return(
      <div className="container">
        <div className="home_searchbar_box">
        <i className="bi bi-search"></i>
        <input
        className="home_searchbar"
        placeholder="Search character name or key words"
        value={searchValue}
        onChange={handleInputChange} // Update value on typing
      />
        </div>
        <div className="home_banner">
        <img src={banner} alt="" />
        </div>
      </div>
    );
}
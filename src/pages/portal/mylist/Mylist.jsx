import React, { useEffect, useState } from "react";
import { getWishlist } from "../../../api/movie "; // Assuming getWishlist is implemented in the correct file
import Card from "../../../components/card/Card";
import Navbar from "../../../components/navbar/Navbar";
import "./mylist.css";

const WishList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch wishlist data when the component mounts
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    try {
      // Assuming getWishlist returns an array of movie objects
      const wishlistData = await getWishlist();
      setMovies(wishlistData);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  };

  return (
    <div className="wishlist-page">
      <Navbar isUser one={"none"}position1={"absolute"} display={"none"} height={"60px"} padding={"10px"} left={"40px"} top={"10px"} position={"relative"}/>
      <div className="wishlist-items">
        <h2 className="result-heading">My List</h2>
        <div className="wish-list-items">
          {movies.map((item) => (
            <Card key={item.id} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;

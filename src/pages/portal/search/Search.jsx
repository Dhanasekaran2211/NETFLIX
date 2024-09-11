import React from "react";
import "./search.css";
import { useState, useEffect } from "react";
import axios from "../../../libs/axios";
import Navbar from "../../../components/navbar/Navbar";
import Input from "../../../components/input/Input";
import Button from "../../../components/button/Button";
import Card from "../../../components/card/Card";
import { getPageData } from "../../../api/movie ";
import List from "../../../components/row/List";

const Page = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getPageData().then((res) => setData(res));
  }, []);

  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const getMovies = async (query) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${query}`
      );
      const results = response.data.results;

      return results;
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  useEffect(() => {
    if (search) {
      getMovies(search).then((results) => {
        setMovies(results);
      });
    }
  }, [search]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <>
      <div className="">
        <Navbar isUser  one={"none"} position1={"absolute"} display={"none"} height={"60px"} padding={"10px"} left={"40px"} top={"10px"} position={"relative"}/>
        <div className="search-input">
          <div className="input">
            <Input
              type="search"
              bg="search"
              placeholder="Search Movies"
              value={search}
              onChange={handleChange}
            />
          </div>
          <Button
          content={"Search"} bg={"red"} height={"40px"} width={"100px"} br={"5px"} border={"none"}
          />
        </div>

        <div className="wish-list">
          {search ? (
            <div className="result-padding">
              <h1 className="result-heading">Results for {search}</h1>
              <div className="wish-list-items">
                {movies?.map((item) => (
                  <Card movie={item} />
                ))}
              </div>
            </div>
          ) : (
            <>
              <List title="Trending Now" data={data?.trendingNow.results} />
              <List title="Netflix Originals" data={data?.netflixOriginals.results} />
              <List title="Horror Movies" data={data?.horrorMovies.results} />
              <List title="Documentries" data={data?.documentaries.results} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;

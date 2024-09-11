import { useEffect, useState } from "react";
import Row from "../../../components/row/Row";

import { getPageData } from "../../../api/movie ";
import Herobanner from "../../../components/herobanner/Herobanner";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPageData().then((request) => setData(request));
  }, []);

  return (
    <main>
      <Herobanner />
      {data && (
        <>
          <Row
            title="NETFLIX ORIGINALS"
            data={data.netflixOriginals?.results}
          />
          <Row title="TRENDING NOW" data={data.trendingNow?.results} />
          <Row title="TOP RATED" data={data.topRated?.results} />
          <Row title="ACTION MOVIES" data={data.actionMovies?.results} />
          <Row title="COMEDY MOVIES" data={data.comedyMovies?.results} />
          <Row title="HORROR MOVIES" data={data.horrorMovies?.results} />
          <Row title="ROMANCE MOVIES" data={data.romanceMovies?.results} />
          <Row title="WAR MOVIES" data={data.warMovies?.results} />
          <Row
            title="SCIENCE FICTION MOVIE"
            data={data.scienceFictionMovies?.results}
          />
          <Row title="DOCUMENTARIES" data={data.documentaries?.results} />
        </>
      )}
    </main>
  );
};

export default Home;

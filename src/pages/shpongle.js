import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/shpongle-popular.json";
import albums from "../data/shpongle-albums.json";
import Helmet from "react-helmet";
import shpongle from "../data/shpongle.json";

const Shpongle = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{shpongle.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={shpongle.name}
        cover={shpongle.images[0].url}
        playUrl={shpongle.external_urls.spotify}
        instagramUrl="https://www.instagram.com/shponglemusic/"
      />
    </React.Fragment>
  );
};

export default Shpongle;

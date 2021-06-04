import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/led-zeppelin-popular.json";
import albums from "../data/led-zeppelin-albums.json";
import Helmet from "react-helmet";
import ledzeppelin from "../data/led-zeppelin.json";

const LedZeppelin = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{ledzeppelin.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={ledzeppelin.name}
        cover={ledzeppelin.images[0].url}
        playUrl={ledzeppelin.external_urls.spotify}
        instagramUrl="https://www.instagram.com/ledzeppelin/"
      />
    </React.Fragment>
  );
};

export default LedZeppelin;

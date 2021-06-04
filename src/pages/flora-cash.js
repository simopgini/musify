import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/flora-cash-popular.json";
import albums from "../data/flora-cash-albums.json";
import Helmet from "react-helmet";
import floracash from "../data/flora-cash.json";

const FloraCash = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{floracash.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={floracash.name}
        cover={floracash.images[0].url}
        playUrl={floracash.external_urls.spotify}
        instagramUrl="https://www.instagram.com/floracash/"
      />
    </React.Fragment>
  );
};

export default FloraCash;

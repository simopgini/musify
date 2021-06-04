import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/moderat-popular.json";
import albums from "../data/moderat-albums.json";
import Helmet from "react-helmet";
import moderat from "../data/moderat.json";

const Moderat = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{moderat.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={moderat.name}
        cover={moderat.images[0].url}
        playUrl={moderat.external_urls.spotify}
        instagramUrl="https://www.instagram.com/moderat_band/"
      />
    </React.Fragment>
  );
};

export default Moderat;

import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/evanescence-popular.json";
import albums from "../data/evanescence-albums.json";
import Helmet from "react-helmet";
import evanescence from "../data/evanescence.json";

const Evanescence = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{evanescence.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={evanescence.name}
        cover={evanescence.images[0].url}
        playUrl={evanescence.external_urls.spotify}
        instagramUrl="https://www.instagram.com/evanescenceofficial/"
      />
    </React.Fragment>
  );
};

export default Evanescence;

import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/kaleo-popular.json";
import albums from "../data/kaleo-albums.json";
import Helmet from "react-helmet";
import kaleo from "../data/kaleo.json";

const Kaleo = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{kaleo.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={kaleo.name}
        cover={kaleo.images[0].url}
        playUrl={kaleo.external_urls.spotify}
        instagramUrl="https://www.instagram.com/officialkaleo/"
      />
    </React.Fragment>
  );
};

export default Kaleo;

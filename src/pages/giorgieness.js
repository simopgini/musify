import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/giorgieness-popular.json";
import albums from "../data/giorgieness-albums.json";
import Helmet from "react-helmet";
import giorgieness from "../data/giorgieness.json";

const Giorgieness = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{giorgieness.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={giorgieness.name}
        cover={giorgieness.images[0].url}
        playUrl={giorgieness.external_urls.spotify}
        instagramUrl="https://www.instagram.com/giorgieness/"
      />
    </React.Fragment>
  );
};

export default Giorgieness;

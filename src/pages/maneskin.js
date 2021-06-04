import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/maneskin-popular.json";
import albums from "../data/maneskin-albums.json";
import Helmet from "react-helmet";
import maneskin from "../data/maneskin.json";

const Maneskin = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{maneskin.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={maneskin.name}
        cover={maneskin.images[0].url}
        playUrl={maneskin.external_urls.spotify}
        instagramUrl="https://www.instagram.com/maneskinofficial/"
      />
    </React.Fragment>
  );
};

export default Maneskin;

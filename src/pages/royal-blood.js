import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/royal-blood-popular.json";
import albums from "../data/royal-blood-albums.json";
import Helmet from "react-helmet";
import royalblood from "../data/royal-blood.json";

const RoyalBlood = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{royalblood.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={royalblood.name}
        cover={royalblood.images[0].url}
        playUrl={royalblood.external_urls.spotify}
        instagramUrl="https://www.instagram.com/royalblooduk/"
      />
    </React.Fragment>
  );
};

export default RoyalBlood;

import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/the-cure-popular.json";
import albums from "../data/the-cure-albums.json";
import Helmet from "react-helmet";
import thecure from "../data/the-cure.json";

const TheCure = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{thecure.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={thecure.name}
        cover={thecure.images[0].url}
        playUrl={thecure.external_urls.spotify}
        instagramUrl="https://www.instagram.com/thecure/"
      />
    </React.Fragment>
  );
};

export default TheCure;

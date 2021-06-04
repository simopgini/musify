import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/banks-popular.json";
import albums from "../data/banks-albums.json";
import Helmet from "react-helmet";
import banks from "../data/banks.json";

const BANKS = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{banks.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={banks.name}
        cover={banks.images[0].url}
        playUrl={banks.external_urls.spotify}
        instagramUrl="https://www.instagram.com/hernameisbanks/"
      />
    </React.Fragment>
  );
};

export default BANKS;

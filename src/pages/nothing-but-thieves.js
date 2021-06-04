import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/nothing-but-thieves-popular.json";
import albums from "../data/nothing-but-thieves-albums.json";
import Helmet from "react-helmet";
import nothingbutthieves from "../data/nothing-but-thieves.json";

const NothingButThieves = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{nothingbutthieves.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={nothingbutthieves.name}
        cover={nothingbutthieves.images[0].url}
        playUrl={nothingbutthieves.external_urls.spotify}
        instagramUrl="https://www.instagram.com/nothingbutthieves/"
      />
    </React.Fragment>
  );
};

export default NothingButThieves;

import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/anathema-popular.json";
import albums from "../data/anathema-albums.json";
import Helmet from "react-helmet";
import anathema from "../data/anathema.json";

const Anathema = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{anathema.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={anathema.name}
        cover={anathema.images[0].url}
        playUrl={anathema.external_urls.spotify}
        instagramUrl="https://www.instagram.com/anathemamusic/"
      />
    </React.Fragment>
  );
};

export default Anathema;

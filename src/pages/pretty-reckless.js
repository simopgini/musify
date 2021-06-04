import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/pretty-reckless-popular.json";
import albums from "../data/pretty-reckless-albums.json";
import Helmet from "react-helmet";
import prettyreckless from "../data/pretty-reckless.json";

const PrettyReckless = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{prettyreckless.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={prettyreckless.name}
        cover={prettyreckless.images[0].url}
        playUrl={prettyreckless.external_urls.spotify}
        instagramUrl="https://www.instagram.com/theprettyreckless/"
      />
    </React.Fragment>
  );
};

export default PrettyReckless;

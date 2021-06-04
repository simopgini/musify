import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/tool-popular.json";
import albums from "../data/tool-albums.json";
import Helmet from "react-helmet";
import tool from "../data/tool.json";

const TOOL = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{tool.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={tool.name}
        cover={tool.images[0].url}
        playUrl={tool.external_urls.spotify}
        instagramUrl="https://www.instagram.com/toolmusic/"
      />
    </React.Fragment>
  );
};

export default TOOL;

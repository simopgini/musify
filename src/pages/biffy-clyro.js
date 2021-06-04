import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/biffy-clyro-popular.json";
import albums from "../data/biffy-clyro-albums.json";
import Helmet from "react-helmet";
import biffyclyro from "../data/biffy-clyro.json";

const BiffyClyro = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{biffyclyro.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={biffyclyro.name}
        cover={biffyclyro.images[0].url}
        playUrl={biffyclyro.external_urls.spotify}
        instagramUrl="https://www.instagram.com/biffy_clyro/"
      />
    </React.Fragment>
  );
};

export default BiffyClyro;

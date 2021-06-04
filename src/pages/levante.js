import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/levante-popular.json";
import albums from "../data/levante-albums.json";
import Helmet from "react-helmet";
import levante from "../data/levante.json";

const Levante = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{levante.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={levante.name}
        cover={levante.images[0].url}
        playUrl={levante.external_urls.spotify}
        instagramUrl="https://www.instagram.com/levanteofficial/"
      />
    </React.Fragment>
  );
};

export default Levante;

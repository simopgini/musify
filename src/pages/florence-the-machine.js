import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/florence-the-machine-popular.json";
import albums from "../data/florence-the-machine-albums.json";
import Helmet from "react-helmet";
import florencethemachine from "../data/florence-the-machine.json";

const FlorenceTheMachine = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{florencethemachine.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={florencethemachine.name}
        cover={florencethemachine.images[0].url}
        playUrl={florencethemachine.external_urls.spotify}
        instagramUrl="https://www.instagram.com/florenceandthemachine/"
      />
    </React.Fragment>
  );
};

export default FlorenceTheMachine;

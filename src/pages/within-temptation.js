import React from "react";
import ArtistPage from "../components/ArtistPage";
import popular from "../data/within-temptation-popular.json";
import albums from "../data/within-temptation-albums.json";
import Helmet from "react-helmet";
import withintemptation from "../data/within-temptation.json";

const WithinTemptation = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>{withintemptation.name}</title>
      </Helmet>

      <ArtistPage
        popular={popular}
        albums={albums}
        artist={withintemptation.name}
        cover={withintemptation.images[0].url}
        playUrl={withintemptation.external_urls.spotify}
        instagramUrl="https://www.instagram.com/wtofficial/"
      />
    </React.Fragment>
  );
};

export default WithinTemptation;

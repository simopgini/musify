import React from "react";
import anathema from "../data/anathema.json";
import banks from "../data/banks.json";
import biffyclyro from "../data/biffy-clyro.json";
import evanescence from "../data/evanescence.json";
import floracash from "../data/flora-cash.json";
import florencethemachine from "../data/florence-the-machine.json";
import giorgieness from "../data/giorgieness.json";
import kaleo from "../data/kaleo.json";
import ledzeppelin from "../data/led-zeppelin.json";
import levante from "../data/levante.json";
import maneskin from "../data/maneskin.json";
import moderat from "../data/moderat.json";
import nothingbutthieves from "../data/nothing-but-thieves.json";
import prettyreckless from "../data/pretty-reckless.json";
import royalblood from "../data/royal-blood.json";
import shpongle from "../data/shpongle.json";
import thecure from "../data/the-cure.json";
import tool from "../data/tool.json";
import withintemptation from "../data/within-temptation.json";
import ArtistBox from "../components/ArtistBox";

const IndexPage = () => {
  return (
    <div className="mx-8 my-8">
      <div className="text-white font-semibold text-5xl mb-6">Musify</div>
      <div className="text-white font-semibold text-2xl mb-4">Discography</div>

      <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
        <ArtistBox
          artist={anathema.name}
          image={anathema.images[0].url}
          link="anathema"
        />

        <ArtistBox
          artist={banks.name}
          image={banks.images[0].url}
          link="banks"
        />

        <ArtistBox
          artist={biffyclyro.name}
          image={biffyclyro.images[0].url}
          link="biffy-clyro"
        />

        <ArtistBox
          artist={evanescence.name}
          image={evanescence.images[0].url}
          link="evanescence"
        />

        <ArtistBox
          artist={floracash.name}
          image={floracash.images[0].url}
          link="flora-cash"
        />

        <ArtistBox
          artist={florencethemachine.name}
          image={florencethemachine.images[0].url}
          link="florence-the-machine"
        />

        <ArtistBox
          artist={giorgieness.name}
          image={giorgieness.images[0].url}
          link="giorgieness"
        />

        <ArtistBox
          artist={kaleo.name}
          image={kaleo.images[0].url}
          link="kaleo"
        />

        <ArtistBox
          artist={ledzeppelin.name}
          image={ledzeppelin.images[0].url}
          link="led-zeppelin"
        />

        <ArtistBox
          artist={levante.name}
          image={levante.images[0].url}
          link="levante"
        />

        <ArtistBox
          artist={maneskin.name}
          image={maneskin.images[0].url}
          link="maneskin"
        />

        <ArtistBox
          artist={moderat.name}
          image={moderat.images[0].url}
          link="moderat"
        />

        <ArtistBox
          artist={nothingbutthieves.name}
          image={nothingbutthieves.images[0].url}
          link="nothing-but-thieves"
        />

        <ArtistBox
          artist={royalblood.name}
          image={royalblood.images[0].url}
          link="royal-blood"
        />

        <ArtistBox
          artist={shpongle.name}
          image={shpongle.images[0].url}
          link="shpongle"
        />

        <ArtistBox
          artist={thecure.name}
          image={thecure.images[0].url}
          link="the-cure"
        />

        <ArtistBox
          artist={prettyreckless.name}
          image={prettyreckless.images[0].url}
          link="pretty-reckless"
        />

        <ArtistBox artist={tool.name} image={tool.images[0].url} link="tool" />

        <ArtistBox
          artist={withintemptation.name}
          image={withintemptation.images[0].url}
          link="within-temptation"
        />
      </div>
    </div>
  );
};

export default IndexPage;

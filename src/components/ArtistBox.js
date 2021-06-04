import { Link } from "gatsby";
import React from "react";

const ArtistBox = (props) => {
  return (
    <Link
      to={props.link}
      className="text-white rounded-md bg-white bg-opacity-5 px-5 pt-5 pb-8 hover:bg-opacity-10 transition-colors"
    >
      <img
        className="rounded-full w-full mb-6"
        src={props.image}
        alt={props.artist}
      />
      <div className="font-semibold">{props.artist}</div>
    </Link>
  );
};

export default ArtistBox;

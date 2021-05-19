import * as React from "react";
import popular from "../data/pretty-reckless-popular.json";
import {
  SearchIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { StaticImage } from "gatsby-plugin-image";
import albums from "../data/pretty-reckless-albums.json";
import { DateTime, Duration } from "luxon";

const IndexPage = () => {
  function renderTracks() {
    return popular.tracks.map((track, index) => {
      return (
        <div
          key={track.id}
          className="text-white py-2 pr-4 space-x-4 flex items-center hover:bg-white hover:bg-opacity-20"
        >
          <div className="text-right w-5 mr-1 text-white text-opacity-50">
            {index + 1}
          </div>
          <img
            className="h-10 rounded"
            src={track.album.images[0].url.toString()}
            alt={track.name}
          />
          <div>{track.name}</div>
          <div className="flex-grow text-right">
            {Duration.fromMillis(track.duration_ms).toFormat("m:s")}
          </div>
        </div>
      );
    });
  }

  function renderAlbums() {
    return albums.items.map((album, index) => {
      return (
        <div className="text-white w-56 rounded-md bg-white bg-opacity-5 p-5 hover:bg-opacity-10 transition-colors">
          <div>
            <img
              className="rounded pb-4"
              src={album.images[0].url.toString()}
              alt="The Pretty Reckless Album"
            />
          </div>
          <div className="font-semibold">{album.name}</div>
          <div className="text-sm text-white text-opacity-50">
            {DateTime.fromISO(album.release_date).year}
          </div>
        </div>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="relative bg-gray-600">
        <StaticImage
          className="absolute left-0 top-0 h-full"
          src="../images/the-pretty-reckless-cover.jpeg"
          alt="The Pretty Reckless Cover"
        />

        <div className="relative flex flex-col py-8 px-8 text-white z-10 bg-black bg-opacity-40">
          <div className="flex mb-28">
            <SearchIcon className="w-6 h-6 mr-2" />
            <ChevronLeftIcon className="w-6 h-6" />
            <ChevronRightIcon className="w-6 h-6" />
          </div>

          <div className="text-gray-100">ARTIST</div>
          <div className="text-5xl font-semibold text-white mb-10">
            The Pretty Reckless
          </div>

          <div className="flex space-x-3">
            <button className="bg-musify-primary rounded-3xl font-semibold text-xs text-white uppercase py-2 px-6 hover:bg-musify-primary-10 transition-colors">
              <FontAwesomeIcon className="mr-1" icon={faPlay} />
              Play
            </button>

            <button className="border-white border rounded-3xl font-semibold text-xs text-white uppercase py-2 px-6 hover:bg-white hover:text-musify-bg transition-colors">
              <FontAwesomeIcon className="mr-1" icon={faPlus} />
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="text-white font-semibold text-2xl mb-4">Popolari</div>
        {renderTracks()}
      </div>

      <div className="px-8 py-8">
        <div className="text-white font-semibold text-2xl mb-4">
          Discography
        </div>

        <div className="flex space-x-8">{renderAlbums()}</div>
      </div>
    </React.Fragment>
  );
};

export default IndexPage;

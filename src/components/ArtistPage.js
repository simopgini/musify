import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { DateTime, Duration } from "luxon";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const ArtistPage = (props) => {
  function renderTracks() {
    return props.popular.tracks.map((track, index) => {
      return (
        <a
          href={track.external_urls.spotify}
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
            {Duration.fromMillis(track.duration_ms).toFormat("mm:ss")}
          </div>
        </a>
      );
    });
  }

  function renderAlbums() {
    return props.albums.items.map((album, index) => {
      return (
        <a
          href={album.external_urls.spotify}
          className="text-white rounded-md bg-white bg-opacity-5 px-5 pt-5 pb-8 hover:bg-opacity-10 transition-colors transform motion-safe:hover:scale-110"
        >
          <img
            className="rounded w-full mb-6"
            src={album.images[0].url.toString()}
            alt={props.artist}
          />
          <div className="font-semibold">{album.name}</div>
          <div className="text-sm text-white text-opacity-50">
            {DateTime.fromISO(album.release_date).year}
          </div>
        </a>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="relative bg-gray-600">
        <div
          className="absolute bg-cover bg-center left-0 top-0 h-full w-full"
          style={{
            backgroundImage: `url(${props.cover})`,
          }}
        />

        <div className="relative flex flex-col py-8 px-8 text-white z-10 bg-black bg-opacity-40">
          <div className="text-gray-100 mt-40">ARTIST</div>
          <div className="text-5xl font-semibold text-white mb-10">
            {props.artist}
          </div>

          <div className="flex space-x-3">
            <a
              href={props.playUrl}
              className="bg-musify-primary rounded-3xl font-semibold text-xs text-white uppercase py-2 px-6 hover:bg-musify-primary-10 transition-colors"
            >
              <FontAwesomeIcon className="mr-1" icon={faPlay} />
              Play
            </a>

            <a
              href={props.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="border-white border rounded-3xl font-semibold text-xs text-white uppercase py-2 px-6 hover:bg-white hover:text-musify-bg transition-colors"
            >
              <FontAwesomeIcon className="mr-1" icon={faInstagram} />
              Follow
            </a>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="text-white font-semibold text-2xl mb-4">Popolari</div>
        {renderTracks()}
      </div>

      <div className="mx-8 my-8">
        <div className="text-white font-semibold text-2xl mb-4">
          Discography
        </div>

        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-8">
          {renderAlbums()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ArtistPage;

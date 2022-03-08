import React from "react";

import { Artist } from "./Artist";
import { Icons } from "./Icons";

export const Album = (props) => {
  return (
    <div className="album">
      <div className="image">
        {props.album.images
          .filter((data) => {
            if (data.width === 300) {
              //if filter is true then it keeps the image and goes to the .map
              return true;
            }
            // all false filters are removed and are not passed to the .map
            return false;
          })
          .map((data) => {
            console.log(data);
            return (
              <a
                className="album-link"
                href={props.album.external_urls.spotify}
                target="_blank"
              >
                <div className="Icons">
                  <Icons />
                </div>
                <img
                  ClassName="image-container"
                  src={data.url}
                  alt="album image"
                />
              </a>
            );
          })}
      </div>

      <div className="album-name">
        <a
          className="album-link"
          href={props.album.external_urls.spotify}
          target="_blank"
        >
          <p className="album">{props.album.name}</p>
        </a>
      </div>

      <div className="artists">
        {props.album.artists.map((data) => {
          return (
            <Artist
              key={data.name}
              artistName={data.name}
              artistLink={data.external_urls.spotify}
            />
          );
        })}
      </div>
    </div>
  );
};

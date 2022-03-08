import React from "react";

import { Artist } from "./Artist";

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
                <img src={data.url} />{" "}
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
        {props.album.artists.map((data, index) => {
          return (
            <span><Artist
              artistName={data.name}
              artistLink={data.external_urls.spotify}
            />

            {
                //ternary operator. the first part is the condition, the second is what happens if the condition is true and the third one if the condition is false
                index!=props.album.artists.length-1 ? ', ':''
            }

            </span>
          );
        })}
      </div>
    </div>
  );
};

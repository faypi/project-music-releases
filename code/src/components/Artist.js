import React from "react";

export const Artist = (props) => {
  return (
    <a href={props.artistLink} target="_blank">
      {props.artistName}
    </a>
  );
};

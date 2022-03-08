import React from "react";

export const Artist = (props) => {
  return (
    <div className="artists">
      <a href={props.artistLink} target="_blank">
        {props.artistName}
      </a>
    </div>
  );
};

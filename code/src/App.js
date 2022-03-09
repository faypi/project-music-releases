import React from "react";
//leave 1 line between our components and default components
import data from "./data.json";
import { Album } from "components/Album";
// import { Artist } from 'components/Artist';
// console.log('my data')
// console.log(data);
export const App = () => {
  return (
    <div>
      <div className="albumSection">
        {data.albums.items.map((data) => {
          return <Album album={data} />;
        })}
      </div>
    </div>
  );
};

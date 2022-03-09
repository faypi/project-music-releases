import React from "react";
//leave 1 line between our components and default components
import data from "./data.json";
import { Album } from "components/Album";
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <div class="outer-container">
      <div class="title-container">New Albums & singles</div>
      <div className="album-section">
        {data.albums.items.map((data) => {
          return <Album album={data} />;
        })}
      </div>
      <Footer />;
    </div>
  );
};

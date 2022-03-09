import React from "react";
//leave 1 line between our components and default components
import data from "./data.json";
import { Album } from "components/Album";
// import { Artist } from 'components/Artist';
// console.log('my data')
// console.log(data);
export const App = () => {
  return (
    <div class="outer-container">   
    <div class="title-container">New Albums & singles</div>
      <div className="album-section">
        {data.albums.items.map((data) => {
          return <Album album={data} />;
        })}
      </div>
      <div class="footer">
    <div class="footer-left">
      <p>
        Made in SE and GR
      </p>
    </div>
    <div class="footer-center">
      <p>
        Week 9 Project for <a href="https://www.technigo.io/program">Technigo</a> Spring '22 
      </p>
    </div>
    <div class="footer-right">
      <p>
        © Proudly created by Sherin Susan Thomas and Fay Pistikozoglou
      </p>
    </div>
    </div>
    </div>
  );
};

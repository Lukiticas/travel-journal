import React from "react";
import PathImage from "../images/Path.png";

export default function cards(props) {
  return (
    <div className="card-body">
      <img src={props.items.imageUrl} className="card-img" />
      <div className="card-info">
        <div className="card-location">
          <span className="loc-name">
            <span className="location">
              <img src={PathImage} className="path-img" />
              {props.items.location.toUpperCase()}
            </span>
            <a
              className="card-link"
              href={props.items.googleMapsUrl}
              target="_blank"
            >
              View on Google Maps
            </a>
          </span>
        </div>
        <h1>{props.items.title}</h1>
        <div className="date">
          <span>
            {props.items.startDate} - {props.items.endDate}
          </span>
        </div>
        <p className="description">{props.items.description}</p>
      </div>
    </div>
  );
}

/*   {
    title: "Geirangerfjord",
    location: "Norway",
    googleMapsUrl: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    startDate: "01 Oct, 2021",
    endDate: "18 Nov, 2021",
    description:
      "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
    imageUrl: "https://source.unsplash.com/3PeSjpLVtLg",
  }, */

import React from "react";

export default function cards(items) {
  return (
    <div>
      <img src={items.imageUrl} />
      <div className="location">
        <span className="loc-name">{items.Location}</span>
        <span className="gMap-link">
          <a href={items.googleMapsUrl} target="_blank">
            View on Google Maps
          </a>
        </span>
      </div>
      <div className="date">
        <span className="first-date">{items.startDate}</span>
        <span className="last-date">{items.endDate}</span>
      </div>
      <p className="description">{items.description}</p>
    </div>
  );
}

{
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
}

import React, { Component } from "react";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import MeasureControl from "react-leaflet-measure";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.measureStart = this.measureStart.bind(this);
    this.measureFinish = this.measureFinish.bind(this);
  }

  measureStart(e) {
    console.log(e);
  }

  measureFinish(e) {
    console.log(e);
  }

  render() {
    const measureOptions = {
      position: "topright",
      primaryLengthUnit: "meters",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqmeters",
      secondaryAreaUnit: "acres",
      activeColor: "#db4a29",
      completedColor: "#9b2d14"
    };
    return (
      <Map
        center={[2.935403, 101.448205]}
        zoom={10}
        onMeasurestart={this.measureStart}
        onMeasurefinish={this.measureFinish}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MeasureControl {...measureOptions} />
      </Map>
    );
  }
}

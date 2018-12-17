import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import MeasureControl from "react-leaflet-measure";
// const geoJSONData = require("../Boston_parcels.geojson");

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default class DrawMap extends Component {
  constructor() {
    super();

    this.state = {
      lat: 42.332316800717756,
      lng: -71.03887484694026,
      zoom: 13,
      open: false
    };
  }
  getStyle(feature, layer) {
    return {
      color: "#800080",
      weight: 8,
      opacity: 0.65
    };
  }
  getMeasureOptions() {
    return {
      position: "topright",
      primaryLengthUnit: "sqfeet",
      secondaryLengthUnit: "kilometers",
      primaryAreaUnit: "sqfeet",
      secondaryAreaUnit: "acres",
      activeColor: "#db4a29",
      completedColor: "#9b2d14"
    };
  }
  onEachFeature(feature, layer) {
    if (
      feature.properties &&
      feature.properties.PARCEL &&
      feature.properties.PID_LONG &&
      feature.properties.WPD
    ) {
      layer.bindPopup(
        "Parcel: " +
          feature.properties.PARCEL +
          " PID: " +
          feature.properties.PID_LONG +
          " WPD: " +
          feature.properties.WPD +
          " Area: " +
          feature.properties.AREA
      );
    }
  }
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        <MeasureControl measureOptions={this.getMeasureOptions} />
        <GeoJSON
          data={getGeoJson()}
          onEachFeature={this.onEachFeature}
          style={this.getStyle}
        />
      </Map>
    );
  }
}

function getGeoJson() {
  return {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          OBJECTID: 1,
          WARD: 7,
          PARCEL: "2186",
          PID_LONG: "0702186000",
          WPD: "07-02-035",
          BATCH: null,
          AREA: 3641.454345703125,
          LEN: 302.20449123638411
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.03887484694026, 42.332316800717756],
                [-71.038987568357115, 42.33231470496461],
                [-71.03899848068356, 42.332646260137281],
                [-71.038897191592241, 42.332648773816871],
                [-71.038888677716699, 42.332649076336558],
                [-71.03887484694026, 42.332316800717756]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 2,
          WARD: 7,
          PARCEL: "1965",
          PID_LONG: "0701965000",
          WPD: "07-02-050",
          BATCH: null,
          AREA: 825.06298828125,
          LEN: 127.47723527171451
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.04064930124288, 42.331896589431707],
                [-71.040817743880126, 42.331895909642057],
                [-71.040820107654071, 42.331944222546348],
                [-71.040650804618821, 42.33194739696485],
                [-71.04064930124288, 42.331896589431707]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 3,
          WARD: 15,
          PARCEL: "2843",
          PID_LONG: "1502843000",
          WPD: "15-04-005",
          BATCH: null,
          AREA: 2402.0,
          LEN: 219.19142242694383
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.063566674158466, 42.309981777747872],
                [-71.063602667146654, 42.309960618575481],
                [-71.06368804261443, 42.310010795113399],
                [-71.063451403599984, 42.310149893050564],
                [-71.063376866546136, 42.310073165638485],
                [-71.063566674158466, 42.309981777747872]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 4,
          WARD: 15,
          PARCEL: "1853",
          PID_LONG: "1501853000",
          WPD: "15-03-010",
          BATCH: null,
          AREA: 3700.181640625,
          LEN: 308.15908355756198
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.067491520795656, 42.308852780949593],
                [-71.067520181534434, 42.308831019544485],
                [-71.067528101772993, 42.308836718395838],
                [-71.06783723946252, 42.309059594574641],
                [-71.067849772733084, 42.309068633814356],
                [-71.06777019310411, 42.309127390693405],
                [-71.067758583477598, 42.309118865808543],
                [-71.067452802493818, 42.308894335123846],
                [-71.067443528638393, 42.308887541866461],
                [-71.067491520795656, 42.308852780949593]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 5,
          WARD: 19,
          PARCEL: "3652",
          PID_LONG: "1903652000",
          WPD: "19-13-025",
          BATCH: null,
          AREA: 4367.35107421875,
          LEN: 278.51852196736991
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.121965296489066, 42.286707815121353],
                [-71.122085664678139, 42.286607803814036],
                [-71.122331140670525, 42.28677971834346],
                [-71.122217784268528, 42.2868758988092],
                [-71.121965296489066, 42.286707815121353]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 6,
          WARD: 20,
          PARCEL: "12241",
          PID_LONG: "2012241000",
          WPD: "20-03-070",
          BATCH: null,
          AREA: 6467.2117919921875,
          LEN: 353.26292702175454
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.15281060728627, 42.264497533822201],
                [-71.152954569084031, 42.264408236233884],
                [-71.153291979630509, 42.264619890503901],
                [-71.153164926590478, 42.264734106769922],
                [-71.15281060728627, 42.264497533822201]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 7,
          WARD: 17,
          PARCEL: "3474",
          PID_LONG: "1703474000",
          WPD: "17-12-045",
          BATCH: null,
          AREA: 6420.8984375,
          LEN: 369.87385183422452
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.075039469046146, 42.27763664687096],
                [-71.075171897491998, 42.277608523639124],
                [-71.075216677693021, 42.277733299985009],
                [-71.07506431936612, 42.277764373793644],
                [-71.074892538581139, 42.277799408913147],
                [-71.074722836870407, 42.277834018383786],
                [-71.074679402196068, 42.277713126727825],
                [-71.075039469046146, 42.27763664687096]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 8,
          WARD: 14,
          PARCEL: "4833",
          PID_LONG: "1404833000",
          WPD: "14-08-060",
          BATCH: null,
          AREA: 4496.980712890625,
          LEN: 290.67141543377994
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.096638208178973, 42.28279545078032],
                [-71.096646371719245, 42.282761115742581],
                [-71.097010810044935, 42.282890518073735],
                [-71.096931023462048, 42.282979194468403],
                [-71.096620358006817, 42.28290995493871],
                [-71.096627670450118, 42.282851783380032],
                [-71.096632745154295, 42.282824654865031],
                [-71.096638208178973, 42.28279545078032]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 9,
          WARD: 10,
          PARCEL: "1606",
          PID_LONG: "1001606000",
          WPD: "10-08-020",
          BATCH: null,
          AREA: 1778.42431640625,
          LEN: 200.39751890922645
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.111446903805032, 42.330084824379298],
                [-71.111720383525423, 42.330025359430422],
                [-71.111745693257689, 42.330084154881447],
                [-71.111472828364754, 42.330146719684869],
                [-71.111446903805032, 42.330084824379298]
              ]
            ]
          ]
        }
      },
      {
        type: "Feature",
        properties: {
          OBJECTID: 10,
          WARD: 10,
          PARCEL: "1737",
          PID_LONG: "1001737000",
          WPD: "10-08-035",
          BATCH: null,
          AREA: 1682.880859375,
          LEN: 169.46281766609872
        },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            [
              [
                [-71.108691767050459, 42.32444362411546],
                [-71.108791241037849, 42.324322981962737],
                [-71.108893069275155, 42.324370054657628],
                [-71.10879322407591, 42.324482311319315],
                [-71.108778345623776, 42.324495699941657],
                [-71.108691767050459, 42.32444362411546]
              ]
            ]
          ]
        }
      }
    ]
  };
}

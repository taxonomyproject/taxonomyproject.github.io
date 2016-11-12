  function initialize() {
      var map = new L.Map('map');
      var mapLink =
                  '<a href="http://openstreetmap.org">OpenStreetMap</a>';
      var wholink =
          '<a href="http://stamen.com">Stamen Design</a>';
      L.tileLayer(
          'https://stamen-tiles.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.png', {
          attribution: '&copy; '+mapLink+' Contributors & '+wholink,
          }).addTo(map);
      map.scrollWheelZoom.disable();
      var color1 = "#9600bb",
          color2 = "#f46200",
          color3 = "#efbf00",
          mp = "MultiPolygon",
          feature = "Feature";
      map.setView([37.7512,-122.4398], 14);
      var geojsonFeature = {
                "type": "FeatureCollection",
                "features": [
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.459734,
                              37.743372
                            ],
                            [
                              -122.459734,
                              37.741650
                            ],
                            [
                              -122.457489,
                              37.741650
                            ],
                            [
                              -122.457489,
                              37.743372
                            ],
                            [
                              -122.459734,
                              37.743372
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 1,
                      "ems": [
                        {
                          "color": color1,
                        },
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.448506,
                              37.755423
                            ],
                            [
                              -122.448506,
                              37.753701
                            ],
                            [
                              -122.446260,
                              37.753701
                            ],
                            [
                              -122.446260,
                              37.755423
                            ],
                            [
                              -122.448506,
                              37.755423
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 2,
                      "ems": [
                        {
                          "color": color1,
                        },
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.448506,
                              37.753701
                            ],
                            [
                              -122.448506,
                              37.751980
                            ],
                            [
                              -122.446260,
                              37.751980
                            ],
                            [
                              -122.446260,
                              37.753701
                            ],
                            [
                              -122.448506,
                              37.753701
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 3,
                      "ems": [
                        {
                          "color": color1,
                        },
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.448506,
                              37.751980
                            ],
                            [
                              -122.448506,
                              37.750258
                            ],
                            [
                              -122.446260,
                              37.750258
                            ],
                            [
                              -122.446260,
                              37.751980
                            ],
                            [
                              -122.448506,
                              37.751980
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 4,
                      "ems": [
                        {
                          "color": color1,
                        },
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.444014,
                              37.751980
                            ],
                            [
                              -122.444014,
                              37.750258
                            ],
                            [
                              -122.441760,
                              37.750258
                            ],
                            [
                              -122.441760,
                              37.751980
                            ],
                            [
                              -122.444014,
                              37.751980
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 5,
                      "ems": [
                        {
                          "color": color1,
                        },
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.464226,
                              37.758865
                            ],
                            [
                              -122.464226,
                              37.757144
                            ],
                            [
                              -122.461980,
                              37.757144
                            ],
                            [
                              -122.461980,
                              37.758865
                            ],
                            [
                              -122.464226,
                              37.758865
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 6,
                      "ems": [
                        {
                          "color": color1,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.464226,
                              37.762300
                            ],
                            [
                              -122.464226,
                              37.758865
                            ],
                            [
                              -122.461980,
                              37.758865
                            ],
                            [
                              -122.461980,
                              37.762300
                            ],
                            [
                              -122.464226,
                              37.762300
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 7,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.448506,
                              37.757144
                            ],
                            [
                              -122.448506,
                              37.755423
                            ],
                            [
                              -122.446260,
                              37.755423
                            ],
                            [
                              -122.446260,
                              37.757144
                            ],
                            [
                              -122.448506,
                              37.757144
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 8,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.396850,
                              37.724431
                            ],
                            [
                              -122.396850,
                              37.722709
                            ],
                            [
                              -122.394607,
                              37.722709
                            ],
                            [
                              -122.394607,
                              37.724431
                            ],
                            [
                              -122.396850,
                              37.724431
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 9,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.408081,
                              37.720986
                            ],
                            [
                              -122.408081,
                              37.719264
                            ],
                            [
                              -122.403500,
                              37.719264
                            ],
                            [
                              -122.403500,
                              37.722709
                            ],
                            [
                              -122.405830,
                              37.722709
                            ],
                            [
                              -122.405830,
                              37.720986
                            ],
                            [
                              -122.408081,
                              37.720986
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 10,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.401340,
                              37.722709
                            ],
                            [
                              -122.401340,
                              37.720986
                            ],
                            [
                              -122.399090,
                              37.720986
                            ],
                            [
                              -122.399090,
                              37.722709
                            ],
                            [
                              -122.401340,
                              37.722709
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 11,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.446260,
                              37.758865
                            ],
                            [
                              -122.446260,
                              37.755423
                            ],
                            [
                              -122.444014,
                              37.755423
                            ],
                            [
                              -122.444014,
                              37.758865
                            ],
                            [
                              -122.446260,
                              37.758865
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 24,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.444014,
                              37.764029
                            ],
                            [
                              -122.444014,
                              37.762300
                            ],
                            [
                              -122.441760,
                              37.762300
                            ],
                            [
                              -122.441760,
                              37.764029
                            ],
                            [
                              -122.444014,
                              37.764029
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 25,
                      "ems": [
                        {
                          "color": color3,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.428290,
                              37.760587
                            ],
                            [
                              -122.428290,
                              37.758865
                            ],
                            [
                              -122.426048,
                              37.758865
                            ],
                            [
                              -122.426048,
                              37.760587
                            ],
                            [
                              -122.428290,
                              37.760587
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 26,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.419310,
                              37.758865
                            ],
                            [
                              -122.419310,
                              37.757144
                            ],
                            [
                              -122.417060,
                              37.757144
                            ],
                            [
                              -122.417060,
                              37.758865
                            ],
                            [
                              -122.419310,
                              37.758865
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 27,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.443770,
                              37.738897
                            ],
                            [
                              -122.443770,
                              37.737175
                            ],
                            [
                              -122.441527,
                              37.737175
                            ],
                            [
                              -122.441527,
                              37.738897
                            ],
                            [
                              -122.443770,
                              37.738897
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 28,
                      "ems": [
                        {
                          "color": color3,
                        }
                      ]
                    }
                  },
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -122.392361,
                              37.729353
                            ],
                            [
                              -122.392361,
                              37.727631
                            ],
                            [
                              -122.390115,
                              37.727631
                            ],
                            [
                              -122.390115,
                              37.729353
                            ],
                            [
                              -122.392361,
                              37.729353
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 29,
                      "ems": [
                        {
                          "color": color1,
                        }
                      ]
                    }
                  },
                ]
              };
      L.geoJson(geojsonFeature, {
        style: function(feature) {
            var highest = [0, 0];
            return {
              "color": feature.properties.ems[0].color,
              "fillOpacity": ".4",
              "weight": 2,
              "opacity": 1,
              "clickable": false
            };
        }
      }).addTo(map);
  }
  initialize();

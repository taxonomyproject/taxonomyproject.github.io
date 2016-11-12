$(function() {

  // Check for browser tab switch
  // http://greensock.com/forums/topic/9059-cross-browser-to-detect-tab-or-window-is-active-so-animations-stay-in-sync-using-html5-visibility-api/

  var screenVisible = (function(){
    var stateKey,
      eventKey,
      keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
      };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
  })();

  screenVisible(function(){
    if(screenVisible()){
      setTimeout(function(){
        $.each(markers, function(i, marker) {
          marker.start();
        });
      }, 1000);
      } else {
        $.each(markers, function(i, marker) {
          marker.stop();
        });
      }
  });

  $('.features-container').find('.feature').click(function(e){e.preventDefault();}).click(function (e) {
    var feature = $(e.target).closest('.feature');
    $('#features .active').removeClass('active');
    $('#'+feature.data('image')).addClass('active');
    $(feature).addClass('active');
    e.preventDefault();
  });

  $('#hero-video-close, #hero-video').on('click', function (e) {
    $('#hero-video').fadeOut(200);
    $('#video-container').empty();
    e.preventDefault();
  });

  $('.open-video').on('click', function (e) {
    $('#hero-video').fadeIn(200, function () {
      $('#video-container').load('/video.html', function () {
      });
    });
    e.preventDefault();
  });

  var markers = [];
  var transition = L.DomUtil.TRANSITION;

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
      map.on('load', function(e) {
        var animationSpeed = 1000;
        if(typeof(Storage) !== "undefined") {
          if (sessionStorage.animationFinish == 1) {
            animationSpeed = 0;
          }
        }
        $('#map').animate({opacity: 1}, animationSpeed, function() {
          $('.leaflet-overlay-pane').animate({opacity: 1}, animationSpeed, function() {
            $('.leaflet-marker-pane').animate({opacity: 1}, animationSpeed, function() {
              if(typeof(Storage) !== "undefined") {
                sessionStorage.animationFinish = 1;
              }
            });
          });
        });
      });
      map.on('zoomstart', function (e) {
        $.each(markers, function(i, marker) {
          $('.leaflet-marker-icon').hide(400);
          marker._icon.style[transition] = ('-moz-transform ' + 10000 + 's linear');
          marker._icon.style[transition] = ('-ms-transform ' + 10000 + 's linear');
          marker._icon.style[transition] = ('-webkit-transform ' + 10000 + 's linear');
          marker._icon.style[transition] = ('transform ' + 10000 + 's linear');
        });
      });
      map.on('zoomend', function (e) {
        $.each(markers, function(i, marker) {
          $('.leaflet-marker-icon').show(400);
          marker._icon.style[transition] = ('initial');
          marker._icon.style[transition] = ('initial');
          marker._icon.style[transition] = ('initial');
          marker._icon.style[transition] = ('initial');
          marker._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + marker.options.angle + 'deg)';
        });
      });
      var color1 = "#f46200",
          color2 = "#efbf00",
          color3 = "#9600bb",
          mp = "MultiPolygon",
          feature = "Feature";

      if ($(window).width() < 768)
        map.setView([39.94,-75.17], 13);
      else
        map.setView([39.95,-75.1947], 14);
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
                              -75.242234,
                              39.943372
                            ],
                            [
                              -75.242234,
                              39.941650
                            ],
                            [
                              -75.239989,
                              39.941650
                            ],
                            [
                              -75.239989,
                              39.943372
                            ],
                            [
                              -75.242234,
                              39.943372
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
                              -75.231006,
                              39.955423
                            ],
                            [
                              -75.231006,
                              39.953701
                            ],
                            [
                              -75.228760,
                              39.953701
                            ],
                            [
                              -75.228760,
                              39.955423
                            ],
                            [
                              -75.231006,
                              39.955423
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
                              -75.231006,
                              39.953701
                            ],
                            [
                              -75.231006,
                              39.951980
                            ],
                            [
                              -75.228760,
                              39.951980
                            ],
                            [
                              -75.228760,
                              39.953701
                            ],
                            [
                              -75.231006,
                              39.953701
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
                              -75.231006,
                              39.951980
                            ],
                            [
                              -75.231006,
                              39.950258
                            ],
                            [
                              -75.228760,
                              39.950258
                            ],
                            [
                              -75.228760,
                              39.951980
                            ],
                            [
                              -75.231006,
                              39.951980
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
                              -75.226514,
                              39.951980
                            ],
                            [
                              -75.226514,
                              39.950258
                            ],
                            [
                              -75.224260,
                              39.950258
                            ],
                            [
                              -75.224260,
                              39.951980
                            ],
                            [
                              -75.226514,
                              39.951980
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
                              -75.246726,
                              39.958865
                            ],
                            [
                              -75.246726,
                              39.957144
                            ],
                            [
                              -75.244480,
                              39.957144
                            ],
                            [
                              -75.244480,
                              39.958865
                            ],
                            [
                              -75.246726,
                              39.958865
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
                              -75.246726,
                              39.962300
                            ],
                            [
                              -75.246726,
                              39.958865
                            ],
                            [
                              -75.244480,
                              39.958865
                            ],
                            [
                              -75.244480,
                              39.962300
                            ],
                            [
                              -75.246726,
                              39.962300
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
                              -75.231006,
                              39.957144
                            ],
                            [
                              -75.231006,
                              39.955423
                            ],
                            [
                              -75.228760,
                              39.955423
                            ],
                            [
                              -75.228760,
                              39.957144
                            ],
                            [
                              -75.231006,
                              39.957144
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
                              -75.179350,
                              39.924431
                            ],
                            [
                              -75.179350,
                              39.922709
                            ],
                            [
                              -75.177107,
                              39.922709
                            ],
                            [
                              -75.177107,
                              39.924431
                            ],
                            [
                              -75.179350,
                              39.924431
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
                              -75.190581,
                              39.920986
                            ],
                            [
                              -75.190581,
                              39.919264
                            ],
                            [
                              -75.186000,
                              39.919264
                            ],
                            [
                              -75.186000,
                              39.922709
                            ],
                            [
                              -75.188330,
                              39.922709
                            ],
                            [
                              -75.188330,
                              39.920986
                            ],
                            [
                              -75.190581,
                              39.920986
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
                              -75.183840,
                              39.922709
                            ],
                            [
                              -75.183840,
                              39.920986
                            ],
                            [
                              -75.181590,
                              39.920986
                            ],
                            [
                              -75.181590,
                              39.922709
                            ],
                            [
                              -75.183840,
                              39.922709
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
                              -75.170369,
                              39.939928
                            ],
                            [
                              -75.170369,
                              39.938207
                            ],
                            [
                              -75.165878,
                              39.938207
                            ],
                            [
                              -75.165878,
                              39.939928
                            ],
                            [
                              -75.170369,
                              39.939928
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 12,
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
                              -75.165878,
                              39.917542
                            ],
                            [
                              -75.165878,
                              39.914097
                            ],
                            [
                              -75.163632,
                              39.914097
                            ],
                            [
                              -75.163632,
                              39.917542
                            ],
                            [
                              -75.165878,
                              39.917542
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 13,
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
                              -75.168123,
                              39.919264
                            ],
                            [
                              -75.168123,
                              39.917542
                            ],
                            [
                              -75.165878,
                              39.917542
                            ],
                            [
                              -75.165878,
                              39.919264
                            ],
                            [
                              -75.168123,
                              39.919264
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 14,
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
                              -75.168123,
                              39.943372
                            ],
                            [
                              -75.168123,
                              39.941650
                            ],
                            [
                              -75.163632,
                              39.941650
                            ],
                            [
                              -75.163632,
                              39.943372
                            ],
                            [
                              -75.168123,
                              39.943372
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 15,
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
                            -75.160623,
                            39.952594
                          ],
                          [
                            -75.160623,
                            39.950872
                          ],
                          [
                            -75.158378,
                            39.950872
                          ],
                          [
                            -75.158378,
                            39.952594
                          ],
                          [
                            -75.160623,
                            39.952594
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 16,
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
                            -75.162869,
                            39.949150
                          ],
                          [
                            -75.162869,
                            39.947428
                          ],
                          [
                            -75.160623,
                            39.947428
                          ],
                          [
                            -75.160623,
                            39.949150
                          ],
                          [
                            -75.162869,
                            39.949150
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 17,
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
                            -75.153886,
                            39.956030
                          ],
                          [
                            -75.153886,
                            39.954315
                          ],
                          [
                            -75.151640,
                            39.954315
                          ],
                          [
                            -75.151640,
                            39.956030
                          ],
                          [
                            -75.153886,
                            39.956030
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 18,
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
                            -74.97712,
                            40.09759
                          ],
                          [
                            -74.97712,
                            40.09587
                          ],
                          [
                            -74.97487,
                            40.09587
                          ],
                          [
                            -74.97487,
                            40.09759
                          ],
                          [
                            -74.97712,
                            40.09759
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 19,
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
                            -75.162869,
                            39.952594
                          ],
                          [
                            -75.162869,
                            39.950872
                          ],
                          [
                            -75.160623,
                            39.950872
                          ],
                          [
                            -75.160623,
                            39.952594
                          ],
                          [
                            -75.162869,
                            39.952594
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 20,
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
                            -75.165115,
                            39.954315
                          ],
                          [
                            -75.165115,
                            39.952594
                          ],
                          [
                            -75.162869,
                            39.952594
                          ],
                          [
                            -75.162869,
                            39.954315
                          ],
                          [
                            -75.165115,
                            39.954315
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 21,
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
                            -75.167361,
                            39.954315
                          ],
                          [
                            -75.167361,
                            39.952594
                          ],
                          [
                            -75.165115,
                            39.952594
                          ],
                          [
                            -75.165115,
                            39.954315
                          ],
                          [
                            -75.167361,
                            39.954315
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 22,
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
                            -75.162869,
                            39.957758
                          ],
                          [
                            -75.162869,
                            39.954315
                          ],
                          [
                            -75.160623,
                            39.954315
                          ],
                          [
                            -75.160623,
                            39.957758
                          ],
                          [
                            -75.162869,
                            39.957758
                          ]
                        ]
                      ]
                    ]
                  },
                  "type": feature,
                  "properties": {
                    "id": 23,
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
                              -75.228760,
                              39.958865
                            ],
                            [
                              -75.228760,
                              39.955423
                            ],
                            [
                              -75.226514,
                              39.955423
                            ],
                            [
                              -75.226514,
                              39.958865
                            ],
                            [
                              -75.228760,
                              39.958865
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
                              -75.226514,
                              39.964029
                            ],
                            [
                              -75.226514,
                              39.962300
                            ],
                            [
                              -75.224260,
                              39.962300
                            ],
                            [
                              -75.224260,
                              39.964029
                            ],
                            [
                              -75.226514,
                              39.964029
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
                              -75.210790,
                              39.960587
                            ],
                            [
                              -75.210790,
                              39.958865
                            ],
                            [
                              -75.208548,
                              39.958865
                            ],
                            [
                              -75.208548,
                              39.960587
                            ],
                            [
                              -75.210790,
                              39.960587
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
                              -75.201810,
                              39.958865
                            ],
                            [
                              -75.201810,
                              39.957144
                            ],
                            [
                              -75.199560,
                              39.957144
                            ],
                            [
                              -75.199560,
                              39.958865
                            ],
                            [
                              -75.201810,
                              39.958865
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
                              -75.226270,
                              39.938897
                            ],
                            [
                              -75.226270,
                              39.937175
                            ],
                            [
                              -75.224027,
                              39.937175
                            ],
                            [
                              -75.224027,
                              39.938897
                            ],
                            [
                              -75.226270,
                              39.938897
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
                              -75.174861,
                              39.929353
                            ],
                            [
                              -75.174861,
                              39.927631
                            ],
                            [
                              -75.172615,
                              39.927631
                            ],
                            [
                              -75.172615,
                              39.929353
                            ],
                            [
                              -75.174861,
                              39.929353
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
                  {
                    "geometry": {
                      "type": mp,
                      "coordinates": [
                        [
                          [
                            [
                              -75.186000,
                              39.931319
                            ],
                            [
                              -75.186000,
                              39.926153
                            ],
                            [
                              -75.183840,
                              39.926153
                            ],
                            [
                              -75.183840,
                              39.931319
                            ],
                            [
                              -75.186000,
                              39.931319
                            ]
                          ]
                        ]
                      ]
                    },
                    "type": feature,
                    "properties": {
                      "id": 30,
                      "ems": [
                        {
                          "color": color2,
                        }
                      ]
                    }
                  }
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

      L.AnimatedMarker = L.Marker.extend({
        options: {
          // meters
          distance: 5000,
          // ms
          interval: 30000,
          // animate on add?
          autoStart: true,
          // callback onend
          onEnd: function(){},
          clickable: false,
          angle: 0,
          direction: 0,
          run: 0
        },

        initialize: function (latlngs, options) {
          this.setLine(latlngs);
          L.Marker.prototype.initialize.call(this, latlngs[0], options);
        },

        // Breaks the line up into tiny chunks (see options) ONLY if CSS3 animations
        // are not supported.
        _chunk: function(latlngs) {
          var i,
              len = latlngs.length,
              chunkedLatLngs = [];

          for (i=1;i<len;i++) {
            var cur = latlngs[i-1],
                next = latlngs[i],
                dist = cur.distanceTo(next),
                factor = this.options.distance / dist,
                dLat = factor * (next.lat - cur.lat),
                dLng = factor * (next.lng - cur.lng);

            if (dist > this.options.distance) {
              while (dist > this.options.distance) {
                cur = new L.LatLng(cur.lat + dLat, cur.lng + dLng);
                dist = cur.distanceTo(next);
                chunkedLatLngs.push(cur);
              }
            } else {
              chunkedLatLngs.push(cur);
            }
          }
          chunkedLatLngs.push(latlngs[len-1]);

          return chunkedLatLngs;
        },

        onAdd: function (map) {
          L.Marker.prototype.onAdd.call(this, map);

          // Start animating when added to the map
          if (this.options.autoStart) {
            this.start();
          }
        },

        animate: function() {
          console.log(this);
          var self = this,
              len = this._latlngs.length,
              speed = this.options.interval,
              oldAngle = this.options.angle;

          if (this.options.run === 0) {
            speed = 0;
            this.options.run = 1;
          }

          // Only if CSS3 transitions are supported
          if (L.DomUtil.TRANSITION) {
            if (this._icon) {
                this._icon.style[L.DomUtil.TRANSITION] = ('-moz-transform ' + speed + 'ms linear');
                this._icon.style[L.DomUtil.TRANSITION] = ('-ms-transform ' + speed + 'ms linear');
                this._icon.style[L.DomUtil.TRANSITION] = ('-webkit-transform ' + speed + 'ms linear');
                this._icon.style[L.DomUtil.TRANSITION] = ('transform ' + speed + 'ms linear');
            }
          }
          else {
            $('.leaflet-marker-pane').hide();
          }

          // Move to the next vertex
          this.setLatLng(this._latlngs[this._i]);
          L.DomUtil.setPosition(self._icon, this._latlngs[this._i], true);
          var first = this._latlngs[this._i];
          this._i++;
          var second = this._latlngs[this._i];
          var direction = Math.atan2((second.lng - first.lng), (second.lat - first.lat));

          this.options.angle = direction * (180 / Math.PI);

          // Rotate at the shortest angle
          if (Math.abs(direction * (180 / Math.PI) - oldAngle) > 180) {
            this.options.angle = direction * (180 / Math.PI) - 360;
          }
          else {
            this.options.angle = direction * (180 / Math.PI);
          }

          if (Math.abs(this.options.angle - oldAngle) > 140 && Math.abs(this.options.angle - oldAngle) > 0) {
            this.options.angle = oldAngle - 60;
          }
          else if (Math.abs(this.options.angle - oldAngle) > 140 && Math.abs(this.options.angle - oldAngle) <= 0) {
            this.options.angle = oldAngle + 60;
          }

          if (this.options.angle > 720 || this.options.angle < -720) {
            // var num = Math.floor(this.options.angle / 360);
            // this.options.angle = this.options.angle - (num * 360);
            $('.leaflet-marker-pane').hide();
          }

          this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';

          // Queue up the animation to the next next vertex
          this._tid = setTimeout(function(){
            if (self._i === (len - 1)) {
              self._latlngs = self._latlngs.reverse();
              self._i = 1;
              self.animate();
              // self.options.onEnd.apply(self, Array.prototype.slice.call(arguments));
            } else {
              self.animate();
            }
          }, speed);
        },

        // Start the animation
        start: function() {
          this.animate();
        },

        // Stop the animation in place
        stop: function() {
          if (this._tid) {
            clearTimeout(this._tid);
          }
        },

        setLine: function(latlngs){
          if (!L.DomUtil.TRANSITION) {
            // No need to to check up the line if we can animate using CSS3
            this._latlngs = latlngs;
          } else {
            // Chunk up the lines into options.distance bits
            this._latlngs = this._chunk(latlngs);
            this.options.distance = 50;
            this.options.interval = 4000;
          }
          this._i = 1;
        }

      });

      L.animatedMarker = function (latlngs, options) {
        return new L.AnimatedMarker(latlngs, options);
      };

      // This demo is based off of cibi.me by OpenPlans and my earlier visualization
      // at http://github.com/openplans/cibi_animation

      (function(){
        var carIcon = L.icon({
            iconUrl: '/img/marker-car.png',
            iconSize: [18, 39],
            iconAnchor: [9, 19],
            shadowUrl: null
        });

        var routeLines = [
          L.polyline([
            [
              139.9536271,
              -75.198637
            ],
            [
              139.9493503,
              -75.164337
            ],
            [
              139.949311,
              -75.164347
            ],
            [
              139.929266,
              -75.168703
            ]
          ]),
          L.polyline([
            [
              39.9536271,
              -75.198637
            ],
            [
              39.9493503,
              -75.164337
            ],
            [
              39.949311,
              -75.164347
            ],
            [
              39.929266,
              -75.168703
            ]
          ]),
          L.polyline([
            [
              39.9424000,
              -75.155539
            ],
            [
              39.942599,
              -75.157054
            ],
            [
              39.942720,
              -75.15804
            ],
            [
              39.942792,
              -75.158637
            ],
            [
              39.94298,
              -75.160211
            ],
            [
              39.943185,
              -75.161797
            ],
            [
              39.9433788,
              -75.163358
            ],
            [
              39.9434097,
              -75.163352
            ],
            [
              39.943814,
              -75.163261
            ],
            [
              39.943825,
              -75.163334
            ],
            [
              39.9439,
              -75.16427
            ],
            [
              39.943969,
              -75.164275
            ],
            [
              39.9445160,
              -75.164162
            ],
            [
              39.944524,
              -75.164203
            ],
            [
              39.944649,
              -75.165195
            ],
            [
              39.944688,
              -75.165187
            ],
            [
              39.945538,
              -75.16499
            ],
            [
              39.945531,
              -75.164954
            ],
            [
              39.9454167,
              -75.163950
            ],
            [
              39.945441,
              -75.163948
            ],
            [
              39.946426,
              -75.16373
            ],
            [
              39.94642,
              -75.163709
            ],
            [
              39.9463030,
              -75.162717
            ],
            [
              39.946372,
              -75.162701
            ],
            [
              39.9479480,
              -75.16236
            ],
            [
              39.9479562,
              -75.162432
            ],
            [
              39.948067,
              -75.16337
            ],
            [
              39.948124,
              -75.163843
            ],
            [
              39.948203,
              -75.164433
            ],
            [
              39.94825,
              -75.164428
            ],
            [
              39.949325,
              -75.164197
            ],
            [
              39.949342,
              -75.1643
            ],
            [
              39.949547,
              -75.165957
            ],
            [
              39.949761,
              -75.167512
            ],
            [
              39.9498767,
              -75.167480
            ],
            [
              39.9505100,
              -75.167319
            ],
            [
              39.951266,
              -75.167148
            ],
            [
              39.951233,
              -75.16699
            ],
            [
              39.9510529,
              -75.165613
            ],
            [
              39.95120,
              -75.165581
            ],
            [
              39.9525991,
              -75.165238
            ],
            [
              39.953586,
              -75.165055
            ],
            [
              39.954614,
              -75.164862
            ]
          ]),
          L.polyline([
            [
              39.962751,
              -75.24674
            ],
            [
              39.962101,
              -75.241391
            ],
            [
              39.9650786,
              -75.24076
            ],
            [
              39.965140,
              -75.240753
            ],
            [
              39.962967,
              -75.22326
            ],
            [
              39.962963,
              -75.223238
            ],
            [
              39.961483,
              -75.223546
            ],
            [
              39.961450,
              -75.22354
            ],
            [
              39.96156,
              -75.224491
            ],
            [
              39.9615714,
              -75.224544
            ],
            [
              39.955860,
              -75.225732
            ],
            [
              39.955814,
              -75.225746
            ],
            [
              39.9551980,
              -75.220824
            ]
          ])
        ];

        $.each(routeLines, function(i, routeLine) {
          var marker = L.animatedMarker(routeLine.getLatLngs(), {
            icon: carIcon,
            autoStart: true,
            onEnd: function() {
              $(this._shadow).fadeOut();
              $(this._icon).fadeOut(3000, function(){
                map.removeLayer(this);
              });
            }
          });
          map.addLayer(marker);
          markers.push(marker);
        });

      }());

  }
  initialize();
});

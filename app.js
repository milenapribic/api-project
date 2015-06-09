
//Global variables

var app = {};
var map;
var houston = new google.maps.LatLng(29.747437, -95.367989);
var center = houston;

var MY_MAPTYPE_ID = 'custom_style';

// Init function begins
function initialize() {

  function coffee() {

    // Nook Cafe 

    var nookCafe = new google.maps.LatLng(29.730504, -95.338581);
    var markerNook = new google.maps.Marker({
      position: nookCafe,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerNook, 'click', function() {
        console.log('nook');
        map.whichShop = nookCafe;
        map.whichCoords = coordsNook;
        var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: 'ChIJazxLWlm-QIYRZxRiyev7tMQ'}, 
              function(place, status) {
              app.popUp(place);
            });
    });

    // Minuti

    var minutiCoffee = new google.maps.LatLng(29.761559, -95.362712);
    var markerMinuti = new google.maps.Marker({
      position: minutiCoffee,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerMinuti, 'click', function() {
        console.log('minuti');
        map.whichShop = minutiCoffee;
        map.whichCoords = coordsMinuti;
        var service = new google.maps.places.PlacesService(map);
          service.getDetails({
            placeId: 'ChIJI9bOtTq_QIYRF4jra58HLhs'},
            function(place, status) {
            app.popUp(place);
          });
    });

    // Boomtown

    var boomtownCoffee = new google.maps.LatLng(29.803699, -95.400913);
    var markerBoomtown = new google.maps.Marker({
      position: boomtownCoffee,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerBoomtown, 'click', function() {
        console.log('boomtown');
        map.whichShop = boomtownCoffee;
        map.whichCoords = coordsBoomtown;
          var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: 'ChIJl0ISXGTHQIYRynp2KkWwEzs'},
              function(place, status) {
              app.popUp(place);
            });
    });

    //Catalina 

    var catalinaCoffee = new google.maps.LatLng(29.767992, -95.380645);
    var markerCatalina = new google.maps.Marker({
      position: catalinaCoffee,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerCatalina, 'click', function() {
        console.log('catalina');
        map.whichShop = catalinaCoffee;
        map.whichCoords = coordsCatalina;
        var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: 'ChIJy8oQNUy_QIYRxmu55wH4Y6Q'},
              function(place, status) {
              app.popUp(place);
            });
    });

    //Bohemeos

    var bohemeos = new google.maps.LatLng(29.734797, -95.331508);
    var markerBohemeos = new google.maps.Marker({
      position: bohemeos,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerBohemeos, 'click', function() {
        console.log('bohemeos');
        map.whichShop = bohemeos;
        map.whichCoords = coordsBohemeos;
          var service = new google.maps.places.PlacesService(map);
              service.getDetails({
                placeId: 'ChIJ_U_gUfO-QIYRFbbdzadp8Bk'}, 
                function(place, status) {
                app.popUp(place);
              });
    });

    // Conscious Cafe

    var consciousCafe = new google.maps.LatLng(29.732195, -95.348924);
    var markerConscious = new google.maps.Marker({
        position: consciousCafe,
        map: map,
        icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerConscious, 'click', function() {
        console.log('conscious');
        map.whichShop = consciousCafe;
        map.whichCoords = coordsConscious;
        var service = new google.maps.places.PlacesService(map);
              service.getDetails({
                placeId: 'ChIJuwZgjv6-QIYRxeiJ3n178Ds'}, 
                function(place, status) {
                app.popUp(place);
              });
    });

    // Black Hole 

    var blackHole = new google.maps.LatLng(29.732419, -95.394995);
    var markerBlackHole = new google.maps.Marker({
      position: blackHole,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerBlackHole, 'click', function() {
        console.log('black hole');
        map.whichShop = blackHole;
        map.whichCoords = coordsblackHole;
        var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: 'ChIJn-TbE4LAQIYRbtHO7yCa6xQ'}, 
              function(place, status) {
              console.log(place)
              app.popUp(place);
            });
    });

    //Siphon

    var siphonCoffee = new google.maps.LatLng(29.738406, -95.388224);
    var markerSiphon = new google.maps.Marker({
      position: siphonCoffee,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerSiphon, 'click', function() {
      console.log('siphon');
      map.whichShop = siphonCoffee;
      map.whichCoords = coordsSiphon;
      var service = new google.maps.places.PlacesService(map);
          service.getDetails({
            placeId: 'ChIJ27_1pGS_QIYRJB3FWgFpN70'},
            function(place, status) {
            app.popUp(place);
          });
    });

    // Salento

    var salentoWineCafe = new google.maps.LatLng(29.717235, -95.415365);
    var markerSalento = new google.maps.Marker({
      position: salentoWineCafe,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerSalento, 'click', function() {
      console.log('salento');
      map.whichShop = salentoWineCafe;
      map.whichCoords = coordsSalento;
      var service = new google.maps.places.PlacesService(map);
          service.getDetails({
            placeId: 'ChIJOWbfjF3AQIYRo0le7T5x4XA'},
            function(place, status) {
            app.popUp(place);
          });
    });

    // Ancira

    var anciraGoodEats = new google.maps.LatLng(29.734417, -95.288314);
    var markerAncira = new google.maps.Marker({
      position: anciraGoodEats,
      map: map,
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
    });

    google.maps.event.addListener(markerAncira, 'click', function() {
      console.log('ancira');
      map.whichShop = anciraGoodEats;
      map.whichCoords = coordsAncira;
        var service = new google.maps.places.PlacesService(map);
            service.getDetails({
              placeId: 'ChIJP2ZxFEq8QIYRWstU5I2fIe0'}, 
              function(place, status) {
              console.log(place)
              app.popUp(place);
            });
      });

  }//End of coffee function

  //Calling coffee function
  $('.coffeeButton').on('click', function() {
    coffee();
  });

  //Map styling
  var featureOpts = [
    {
      stylers: [
        { hue: '#fff' },
        { visibility: 'none' },
        { gamma: .5 }
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'none' }
      ]
    },
    {
      featureType: 'water',
      stylers: [
        { color: '#333' }
      ]
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: "off" }]
    }
  ];

  var mapOptions = {
    zoom: 12,
    center: houston,
    styles: featureOpts,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };
  
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var styledMapOptions = {
    name: 'Custom Style', 
    styles: [{ featureType: "poi", 
    elementType: "labels", 
    stylers: [{ 
      visibility: "off" }]
    }]
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);



  //Bounds 

  var coordsNook = 
    [
      new google.maps.LatLng(29.730504, -95.338581), 
      new google.maps.LatLng(29.718410, -95.370231), 
      new google.maps.LatLng(29.721429, -95.375553), 
      new google.maps.LatLng(29.734323, -95.365167)
    ]

  var coordsMinuti = 
    [
      new google.maps.LatLng(29.758967, -95.357026), 
      new google.maps.LatLng(29.752876, -95.361875), 
      new google.maps.LatLng(29.757514, -95.369664), 
      new google.maps.LatLng(29.762712, -95.365544),
      new google.maps.LatLng(29.763606, -95.364879)
    ]

  var coordsBoomtown = 
    [
      new google.maps.LatLng(29.803885, -95.418229), 
      new google.maps.LatLng(29.790180, -95.416427), 
      new google.maps.LatLng(29.790795, -95.387759), 
      new google.maps.LatLng(29.803939, -95.388089)
    ]

  var coordsCatalina = 
    [
      new google.maps.LatLng(29.768513, -95.382683), 
      new google.maps.LatLng(29.773766, -95.382683), 
      new google.maps.LatLng(29.773766, -95.369981), 
      new google.maps.LatLng(29.767433, -95.371998)
    ]

  var coordsBohemeos = 
    [
      new google.maps.LatLng(29.739135, -95.345742), 
      new google.maps.LatLng(29.745246, -95.356257), 
      new google.maps.LatLng(29.752735, -95.350506), 
      new google.maps.LatLng(29.752512, -95.337889),
      new google.maps.LatLng(29.747966, -95.326903)
    ]

  var coordsConscious = 
    [
      new google.maps.LatLng(29.732541, -95.348857), 
      new google.maps.LatLng(29.716954, -95.353695), 
      new google.maps.LatLng(29.725097, -95.372514), 
      new google.maps.LatLng(29.738178, -95.362042)
    ]

var coordsblackHole = 
  [
    new google.maps.LatLng(29.734555, -95.394609), 
    new google.maps.LatLng(29.734517, -95.391154), 
    new google.maps.LatLng(29.744690, -95.391262), 
    new google.maps.LatLng(29.742660, -95.410745),
    new google.maps.LatLng(29.731834, -95.410638)
  ]

var coordsSiphon = 
  [
    new google.maps.LatLng(29.739226, -95.388314), 
    new google.maps.LatLng(29.738667, -95.418698), 
    new google.maps.LatLng(29.748430, -95.418783), 
    new google.maps.LatLng(29.748952, -95.410630),
    new google.maps.LatLng(29.759458, -95.408312),
    new google.maps.LatLng(29.761619, -95.392476)
  ]

var coordsSalento = 
  [
    new google.maps.LatLng(29.717311, -95.415282), 
    new google.maps.LatLng(29.727299, -95.447211), 
    new google.maps.LatLng(29.690770, -95.447555), 
    new google.maps.LatLng(29.697629, -95.418887)
  ]

var coordsAncira = 
  [
    new google.maps.LatLng(29.734449, -95.288333), 
    new google.maps.LatLng(29.758967, -95.345496), 
    new google.maps.LatLng(29.745181, -95.356483), 
    new google.maps.LatLng(29.717455, -95.298461)
  ]

  // $('.walkRoute').on('hover', function(){
  //   $(this).html('<button class="walkRoute"> walk </button>');
  // })

  // $('.walkBtn').on('click', 'button.walkRoute', function() {
  //   polygonCreate(map.whichCoords, map.whichShop);
  //   $('.modal').removeClass('show');
  //   $('.walkBtn').html('<button class="walkRoute"> walk </button>');
  // });


  //Route is created and modal disappears
  $('.walkRoute').on('click', function() {
    center = map.whichShop;
    console.log('center on calc', center);
    polygonCreate(map.whichCoords, map.whichShop);
    $('.modal').removeClass('show');
  });

  // $('.walkRoute').hover(function(){
  //   $(this).css('background-color', '#6991FD');
  // });

  var polygonCreate = function(coordsPath, shop) {
    polygon = new google.maps.Polygon({
            paths: coordsPath,
            strokeColor: "#0000FF",
            strokeOpacity: 0,
            strokeWeight: 2,
            fillColor: "#0000FF",
            fillOpacity: 0
  });

    // polygon.setMap(map);

    var bounds = new google.maps.LatLngBounds();

    var points =[]; //my waypoints


    // Same for each coffeeshop below? 

    for (var i=0; i < polygon.getPath().getLength(); i++) {
        bounds.extend(polygon.getPath().getAt(i));
    }

    var sw = bounds.getSouthWest();
    var ne = bounds.getNorthEast();
    for (var i = 0; i < 1; i++) {
       var ptLat = Math.random() * (ne.lat() - sw.lat()) + sw.lat();
       var ptLng = Math.random() * (ne.lng() - sw.lng()) + sw.lng();
       var point = new google.maps.LatLng(ptLat,ptLng);
       console.log(point);
       points.push({
          location: point,
          stopover: false
        });
       // console.log(points);
       // if (google.maps.geometry.poly.containsLocation(point,polygon)) {
       //   createMarker(map, point,"marker "+i);
       // }

    };

    function createMarker(map, point, content) {
      var marker = new google.maps.Marker({position:point, map:map});
      //    google.maps.event.addListener(marker, "click", function(evt) {
      //        infowindow.setContent(content+"<br>"+marker.getPosition().toUrlValue(6));
      //        infowindow.open(map, marker);
      // });
      return marker;
    } // Finish randomizing points

    app.directionsDisplay;
    app.directionsService = new google.maps.DirectionsService();

    function initializeRoute() {
      app.directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: false,
      suppressInfoWindows: true});
      app.directionsDisplay.setMap(map);
    }

    initializeRoute();

    function calcRoute(specificOne) {
      // var start = document.getElementById("start").value;
      // var end = document.getElementById("end").value;
      var request = {
        origin: specificOne,
        waypoints: points,
        destination: specificOne,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };
      //same for each shop? 
      app.directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
          app.directionsDisplay.setDirections(result);
          app.directionsDisplay.setOptions( { suppressMarkers: true, suppressInfoWindows: true} );
        }
      });

    }
    calcRoute(shop);
  }

} //End of init

google.maps.event.addDomListener(window, 'load', initialize); //initialize map on load

app.popUpEvents = function() {
  //set up close button
};

app.popUp = function(place) {
  var image;

  if (!place.hasOwnProperty('photos')) {
    image = "images/swirl_pattern.png";
  } else {
    image = place.photos[0].getUrl({maxWidth: 400, maxHeight: 300});
  }
  console.log(place);
  var name = place.name;
  $('h3#shop').text(name);
  $('h5.website').text('Website: ' + place.website);
    if (place.website == undefined){
      $('h5.website').text('Website: Unavailable');
    }
  $('h5.rating').text('User Rating: ' + place.rating);
    $('.modal img').attr('src', image);

  $('.modal').addClass('show'); 
  };

  $('.close').on('click', function(e){
    e.preventDefault();
    $('.modal').removeClass('show');
  })

  app.clearButton = function(){
    $('.clearButton').on('click', function(){ //if statement to fix?
      if(app.directionsDisplay != null){
        app.directionsDisplay.setMap(null);
        app.directionsDisplay = null;
      }
      map.setCenter(houston);
      map.setZoom(12);
      $('#shop').text('Choose another stop & another walk.');
    });
    // app.popUp.empty(); not earlier so it can still show the h3 in the header?
  };


app.init = function() {
  app.popUpEvents(); //called immediately 
  app.clearButton();
  $(window).on('resize', function() {
      console.log('center',center);
      map.setCenter(center);
  });
}

$(function() {
  app.init();
});

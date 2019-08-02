// var markers = [];

// function initialize() {
// 	var mapOptions = {
// 		zoom: 12,
// 		center: new google.maps.LatLng(10.763806, 106.691302),
// 		mapTypeId: google.maps.MapTypeId.ROADMAP,
// 		 styles: [ { "featureType": "all", "elementType": "labels.text.fill", "stylers": [ { "saturation": 36 }, { "color": "#000000" }, { "lightness": 40 } ] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [ { "visibility": "on" }, { "color": "#000000" }, { "lightness": 16 } ] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [ { "visibility": "off" } ] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [ { "color": "#000000" }, { "lightness": 20 } ] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 17 }, { "weight": 1.2 } ] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 20 } ] }, { "featureType": "landscape", "elementType": "labels.text", "stylers": [ { "saturation": "-6" }, { "lightness": "12" } ] }, { "featureType": "poi", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 21 } ] }, { "featureType": "road", "elementType": "labels.text.fill", "stylers": [ { "saturation": "1" }, { "lightness": "-1" }, { "visibility": "on" }, { "color": "#a2a2a2" } ] }, { "featureType": "road.highway", "elementType": "geometry", "stylers": [ { "saturation": "9" }, { "gamma": "0.93" }, { "visibility": "simplified" } ] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [ { "lightness": 17 }, { "visibility": "simplified" }, { "color": "#4f4f4f" } ] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [ { "color": "#000000" }, { "lightness": 29 }, { "weight": 0.2 } ] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 18 } ] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 16 } ] }, { "featureType": "transit", "elementType": "geometry", "stylers": [ { "color": "#000000" }, { "lightness": 19 } ] }, { "featureType": "water", "elementType": "geometry", "stylers": [ { "color": "#ed1d24" }, { "lightness": 17 } ] }, { "featureType": "water", "elementType": "labels.text", "stylers": [ { "color": "#ffffff" } ] } ],
// 	}
// 	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
// 	var locations = inputLocations;
// 	var bounds = new google.maps.LatLngBounds();

// 	Array.prototype.forEach.call(inputLocations, function(element){
// 		let map = new google.maps.LatLng(element.lat ,element.lng);
// 		bounds.extend(map)
// 	})


// 	map.fitBounds(bounds);

// 	var marker, i;
// 	var infowindow = new google.maps.InfoWindow();


// 	google.maps.event.addListener(map, 'click', function () {
// 		infowindow.close();
// 	});


// 	for (i = 0; i < locations.length; i++) {
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
// 			map: map,
// 			icon: locations[i].icon
// 		});

// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				map.setCenter(marker.getPosition());
// 				infowindow.setContent(
// 					'<div class="maker-info row"><div class="img-maker">'
// 					+ '<img src="' + locations[i].image
// 					+ '"></div><div class="detail-maker"><h6>' + locations[i].name
// 					+ '</h6><p><strong>Địa chỉ:</strong>' + locations[i].address
// 					+ '</p><p><strong>Điện thoại:</strong> ' + locations[i].phone
// 					+ '</p></div><div class="clearfix"></div></div>'
// 				);
// 				infowindow.open(map, marker);
// 			}
// 		})(marker, i));

// 		markers.push(marker);
// 	}

// }

// google.maps.event.addDomListener(window, 'load', initialize);

// function myClick(id) {
// 	google.maps.event.trigger(markers[id], 'click');
// 	$("html,body").animate({
// 		scrollTop: $("#map").offset().top - 70
// 	}, 1200)
// }
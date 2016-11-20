var zip = "";


function zipCode () {//rep and sen lookup by zip
  zip = document.getElementById("zip").value;
  console.log(zip);
  if (zip.length == 5){
    $.ajax({
      url: "https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + zip + "&apikey=dc06e77466b24aad948f211c8cdc4a29",
    })
    .done(function ( data ){
      for (var i = 0; i < data.results.length; i++){
        if(data.results[i].chamber == "house"){
          $(".repList").append("<div class='rep'>" + data.results[i].first_name + " " + data.results[i].last_name + "</div>");
        } else if (data.results[i].chamber == "senate"){
          $(".senatorList").append("<div class='senator'>" + data.results[i].first_name + " " + data.results[i].last_name + "</div>");
        }
      }
    });
  }else{
    alert("Invalid Zip Code");
  }
}

function initMap(position) {
  var maplongitude = position.coords.longitude;
  var maplatitude = position.coords.latitude;
    var uluru = {lat: maplatitude, lng: maplongitude};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
    $.ajax({
      url: "https://congress.api.sunlightfoundation.com/legislators/locate?latitude=" + maplatitude + "&longitude=" + maplongitude + "&apikey=dc06e77466b24aad948f211c8cdc4a29",
    })
    .done(function ( data ){
      for (var i = 0; i < data.results.length; i++){
        if(data.results[i].chamber == "house"){
          $(".repList").append("<div class='rep'>" + data.results[i].first_name + " " + data.results[i].last_name + "</div>");
        } else if (data.results[i].chamber == "senate"){
          $(".senatorList").append("<div class='senator'>" + data.results[i].first_name + " " + data.results[i].last_name + "</div>");
        }
      }
    });
}


$(document).ready(function(){
  $("#zip").keyup(function(e){
    if (e.keyCode == 13){
      zipCode();
    }
  });
  $("#geo").click(function () {//gets geoLocation for map
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(initMap);
    } else {
      alert("Geo Location not supported by your browser! =( ");
    }
  });
});

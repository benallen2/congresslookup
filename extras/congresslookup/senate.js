

function getSenate(){
  $.ajax({
    url: "https://congress.api.sunlightfoundation.com/legislators?chamber=house&state=CA&per_page=50&page=1&apikey=dc06e77466b24aad948f211c8cdc4a29",
  })
  .done( ( data ) => {
    console.log(data);
  });
  $.ajax({
    url: "https://congress.api.sunlightfoundation.com/legislators?chamber=house&state=CA&per_page=50&page=2&apikey=dc06e77466b24aad948f211c8cdc4a29",
  })
  .done( ( data2 ) => {
    console.log(data2);
  });
}




$(document).ready(function(){
  getSenate();
})

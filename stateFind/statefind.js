  //
  //   var bioId = $(this).attr("id")
  //   console.log(bioId);
  // $.ajax({
  //   url: "https://congress.api.sunlightfoundation.com/legislators?bioguide_id=" + bioId + "&per_page=all&apikey=dc06e77466b24aad948f211c8cdc4a29",
  // })
  // .done( ( data ) => {
  //   $(".modal-title").text(data.results[0].first_name + " " + data.results[0].last_name);
  //   var photoSrc = "https://theunitedstates.io/images/congress/225x275/" + bioId +".jpg";
  //   if (data.results[0].party == "D"){
  //     $(".modal-header").css("background-color", "#90A0FC");
  //     $("#party").text("Party: Democrat")
  //   }
  //   else if (data.results[0].party == "R"){
  //     $(".modal-header").css("background-color", "#CC727B");
  //     $("#party").text("Party: Republican");
  //   }
  //   else if (data.results[0].party == "I"){
  //     $(".modal-header").css("background-color", "#D6D589");
  //     $("#party").text("Party: Independent");
  //   }
  //   $("#repPhoto").attr("src", photoSrc);
  //   $("#state").text(data.results[0].state_name);
  //   //changes for Senate vs House
  //   if(data.results[0].chamber == "senate" && data.results[0].state_rank == "junior"){
  //     $("#district").text("Junior Senator");
  //   }
  //   else if(data.results[0].chamber == "senate" && data.results[0].state_rank == "senior"){
  //     $("#district").text("Senior Senator");
  //   }
  //   else if(data.results[0].chamber == "house"){
  //     $("#district").text("District " + data.results[0].district);
  //   }
  //
  //   $("#state").text(data.results[0].state_name);
  //   $("#birthday").text("Birthday: " + data.results[0].birthday)
  //   $("#term").text("Serving from: " + data.results[0].term_start + " until: " + data.results[0].term_end);
  //   $("#repfacebook").attr("href", "https://www.facebook.com/" + data.results[0].facebook_id);
  //   $("#reptwitter").attr("href", "https://www.twitter.com/" + data.results[0].twitter_id);
  //   $("#repyoutube").attr("href", "https://www.youtube.com/" + data.results[0].youtube_id);
  //   $("#office").text(data.results[0].office);
  //   $("#phone").text("Phone: " + data.results[0].phone);
  //   $("#fax").text("Fax: " + data.results[0].fax);
  //   $("#website").text(data.results[0].website);
  //   $("#website").attr("href", data.results[0].website);
  //   })

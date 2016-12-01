function getZip(){
  $("#zipInput").keydown(function(event){
    if(event.keyCode === 13){
      $(".submitbtn").trigger("click");
    }
  });

  $(".submitbtn").click(function(){
    var input = document.getElementById("zipInput").value;
    if(input.length < 5 ){
      alert("Please Enter a Valid 5 Digit Zip Code");
      location.reload();
    }else{
      $(".zipDiv").fadeOut(400);
      $.ajax({
        url: "https://congress.api.sunlightfoundation.com/legislators/locate?zip=" + input + "&apikey=dc06e77466b24aad948f211c8cdc4a29"
      })
      .done( ( data ) => {
        console.log(data);
        if (data.results.length == 0){
          alert("Please Enter a Valid 5 Digit Zip Code");
          location.reload();
        }else{
          $(".repsDiv").fadeIn(500);
          for (var i = 0; i < data.results.length; i++){
            if (data.results[i].chamber == "senate" && data.results[i].state_rank == "senior"){
              if(data.results[i].party == "D"){
                $(".seniorSenate").css("background-color", "#90A0FC")
                $("#SSparty").text("Party: Democrat")
              }else if (data.results[i].party == "R"){
                $(".seniorSenate").css("background-color", "#CC727B");
                $("#SSparty").text("Party: Republican");
              }
              else if (data.results[i].party == "I"){
                $(".seniorSenate").css("background-color", "#D6D589");
                $("SS#party").text("Party: Independent");
              }
              $("#SSname").text(data.results[i].first_name + " " + data.results[i].last_name);
              $("#SSrepPhoto").attr("src", "https://theunitedstates.io/images/congress/225x275/" + data.results[i].bioguide_id + ".jpg");
              $("#SSstate").text(data.results[i].state_name);
              $("#SSbirthday").text("Birthday: " + data.results[i].birthday)
              $("#SSterm").text("Serving from: " + data.results[i].term_start + " until: " + data.results[i].term_end);
              $("#SSrepfacebook").attr("href", "https://www.facebook.com/" + data.results[i].facebook_id);
              $("#SSreptwitter").attr("href", "https://www.twitter.com/" + data.results[i].twitter_id);
              $("#SSrepyoutube").attr("href", "https://www.youtube.com/" + data.results[i].youtube_id);
              $("#SSoffice").text(data.results[i].office);
              $("#SSphone").text("Phone: " + data.results[i].phone);
              $("#SSfax").text("Fax: " + data.results[i].fax);
              $("#SSwebsite").text(data.results[i].website);
              $("#SSwebsite").attr("href", data.results[i].website);
              $("#SSdistrict").text("Senior Senator");
            }
            else if (data.results[i].chamber == "senate" && data.results[i].state_rank == "junior"){
              if(data.results[i].party == "D"){
                $(".juniorSenate").css("background-color", "#90A0FC")
                $("#JSparty").text("Party: Democrat")
              }else if (data.results[i].party == "R"){
                $(".juniorSenate").css("background-color", "#CC727B");
                $("#JSparty").text("Party: Republican");
              }
              else if (data.results[i].party == "I"){
                $(".juniorSenate").css("background-color", "#D6D589");
                $("#JSparty").text("Party: Independent");
              }
              $("#JSname").text(data.results[i].first_name + " " + data.results[i].last_name);
              $("#JSrepPhoto").attr("src", "https://theunitedstates.io/images/congress/225x275/" + data.results[i].bioguide_id + ".jpg");
              $("#JSstate").text(data.results[i].state_name);
              $("#JSbirthday").text("Birthday: " + data.results[i].birthday)
              $("#JSterm").text("Serving from: " + data.results[i].term_start + " until: " + data.results[i].term_end);
              $("#JSrepfacebook").attr("href", "https://www.facebook.com/" + data.results[i].facebook_id);
              $("#JSreptwitter").attr("href", "https://www.twitter.com/" + data.results[i].twitter_id);
              $("#JSrepyoutube").attr("href", "https://www.youtube.com/" + data.results[i].youtube_id);
              $("#JSoffice").text(data.results[i].office);
              $("#JSphone").text("Phone: " + data.results[i].phone);
              $("#JSfax").text("Fax: " + data.results[i].fax);
              $("#JSwebsite").text(data.results[i].website);
              $("#JSwebsite").attr("href", data.results[i].website);
              $("#JSdistrict").text("Junior Senator");
            }
            else if (data.results[i].chamber == "house"){
              if(data.results[i].party == "D"){
                $(".representative").css("background-color", "#90A0FC")
                $("#Repparty").text("Party: Democrat")
              }else if (data.results[i].party == "R"){
                $(".representative").css("background-color", "#CC727B");
                $("#JSparty").text("Party: Republican");
              }
              else if (data.results[i].party == "I"){
                $(".representative").css("background-color", "#D6D589");
                $("#Repparty").text("Party: Independent");
              }
              $("#Repname").text(data.results[i].first_name + " " + data.results[i].last_name);
              $("#repPhoto").attr("src", "https://theunitedstates.io/images/congress/225x275/" + data.results[i].bioguide_id + ".jpg");
              $("#Repstate").text(data.results[i].state_name);
              $("#Repbirthday").text("Birthday: " + data.results[i].birthday)
              $("#Repterm").text("Serving from: " + data.results[i].term_start + " until: " + data.results[i].term_end);
              $("#repfacebook").attr("href", "https://www.facebook.com/" + data.results[i].facebook_id);
              $("#reptwitter").attr("href", "https://www.twitter.com/" + data.results[i].twitter_id);
              $("#repyoutube").attr("href", "https://www.youtube.com/" + data.results[i].youtube_id);
              $("#Repoffice").text(data.results[i].office);
              $("#Repphone").text("Phone: " + data.results[i].phone);
              $("#Repfax").text("Fax: " + data.results[i].fax);
              $("#Repwebsite").text(data.results[i].website);
              $("#Repwebsite").attr("href", data.results[i].website);
              $("#Repdistrict").text("District: " + data.results[i].district);
            }

          }
        }

      })
    }

  })
}


$(document).ready(function(){
  getZip();
   $(".repsDiv").hide();
})

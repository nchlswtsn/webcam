'use strict';

$(document).ready(init);

function init() {
  $('#go').click(goClicked);
  $('body').on("keypress", inputEnter);
}

function inputEnter(e) {
  if(e.which === 13) {
    goClicked(e);
  }
}

function goClicked(e) {
  var $inputCS = $('#inputCS').val().split(", ");
  $.get("http://api.wunderground.com/api/daf9b48cc5c4fd1b/webcams/q/" + $inputCS[1] + "/" + $inputCS[0] + ".json", {
    dataType: 'jsonp',
    method: 'GET'
  })

    .success(function(data){
    console.log(data);
    var cam1 = data.webcams[0].CURRENTIMAGEURL;
    var cam2 = data.webcams[1].CURRENTIMAGEURL;
    var cam3 = data.webcams[2].CURRENTIMAGEURL;
    var cam4 = data.webcams[3].CURRENTIMAGEURL;
    var cam5 = data.webcams[4].CURRENTIMAGEURL;
    var cam6 = data.webcams[5].CURRENTIMAGEURL;
    $('#webcam1').attr('src', cam1)
    $('#webcam2').attr('src', cam2)
    $('#webcam3').attr('src', cam3)
    $('#webcam4').attr('src', cam4)
    $('#webcam5').attr('src', cam5)
    $('#webcam6').attr('src', cam6)
    $('table').attr('class', "show");

  })
  .fail(function(error) {
    console.log('error:', error);
  });
}

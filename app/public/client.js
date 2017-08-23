$("#testButton").click( function() {
  event.preventDefault();
  var obj = new DataObj();
  //var postUrl = path.join(__/)
  $.post('api/friends', obj, function(response) {
     console.log(response);
  } )
});

let DataObj = function() {
  this.name = $('#name-input').val().trim();
  this.photo = $('#photo-input').val().trim();
  this.scores = [];
  for (let i = 1; i < 11; i++) {
    score = $(`#q${i}-select`).val();
    this.scores.push(score);
  }
  
};
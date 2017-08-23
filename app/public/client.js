$("#testButton").click( function() {
  event.preventDefault();
  let obj = new DataObj();
  
});

let DataObj = function() {
  this.name = $('#name-input').val().trim();
  this.photo = $('#photo-input').val().trim();
  this.scores = [];
  for (let i = 1; i < 11; i++) {
    score = $(`#q${i}-select`).val();
    this.scores.push(score);
  }
  console.log(this);
};
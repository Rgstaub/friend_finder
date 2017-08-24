$("#submit").click( function() {
  event.preventDefault();
  // Data validation to ensure that name and photo are entered
  console.log($('#name-input').val().trim());
  if (!$('#name-input').val().trim()) {
    swal(
      "Uh-oh!",
      "You need to enter a name",
      "warning"
    )
    return;
  } else if (!$('#photo-input').val().trim()) {
    swal(
      "Uh-oh!",
      "You need to link a photo",
      "warning"
    )    
  } else {
    // Create an object with all the input data
    var obj = new DataObj();
    // Post the object
    $.post('api/friends', obj, function(response) {
      console.log(response);
    })
    .done( (res) => {
      displayResult(res);
    })
  }
});

// Constructor for the survey data object
let DataObj = function() {
  this.name = $('#name-input').val().trim();
  this.photo = $('#photo-input').val().trim();
  this.scores = [];
  for (let i = 1; i < 11; i++) {
    let score = $(`#q${i}-select`).val();
    this.scores.push(score);
  }
};

// Function to display the selected match in a modal
let displayResult = function(obj) {
  swal({
    title: "Match Found!",
    text: `Say "Hi" to ${obj.name}`,
    imageUrl: obj.photo,
    confirmButtonText: "Hi"
  });
}
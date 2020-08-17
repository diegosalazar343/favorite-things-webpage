$(document).ready(function() {
  $("#favoriteInput").submit(function (event) {
  event.preventDefault();
  const yourFirstName = $("#firstName").val();
  const yourLastName = $("#lastName").val();
  const yourFirstThing = $("#firstThing").val();
  console.log(yourFirstThing);
  const yourSecondThing = $("#secondThing").val();
  console.log(yourSecondThing);
  const yourThirdThing = $("#thirdThing").val();
  console.log(yourThirdThing);

  const originalArray = [yourFirstName, yourLastName, yourFirstThing, yourSecondThing, yourThirdThing];
  console.log(originalArray);
  const modifiedArray = originalArray.concat()
  console.log(modifiedArray);


  });
});

$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const q1 = $("input:radio[name=reason]:checked").val();
    const q2 = $("input:radio[name=reason]:checked").val();
    const q3 = $("input:radio[name=reason]:checked").val();
    const q4 = $("input:radio[name=reason]:checked").val();
    const q5 = $("input:radio[name=reason]:checked").val();

    if (!name) {
      $("#nameAlert").addClass("visible");
      $("#nameAlert").fadeIn();
      
    }
  });
});
$(document).ready(function() {
  $("#suggester").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const q1 = $("input:radio[name=reason]:checked").val();
    const q2 = $("input:radio[name=reason]:checked").val();
    const q3 = $("input:radio[name=reason]:checked").val();
    const q4 = $("input:radio[name=reason]:checked").val();
    const q5 = $("input:radio[name=reason]:checked").val();
    let cplusplus = 0;
    let ruby = 0;
    let python = 0;
    let java = 0;
    let c = 0;
    let javascript = 0;

    if (!name) {
      $("#nameAlert").addClass("visible");
      $("#nameAlert").removeClass("invisible");
      $("#result").addClass("invisible");
      $("#result").removeClass("visible");

    } else {
      $("#inputName").text(name);
      $("#result").addClass("visible");
      $("#result").removeClass("invisible");
      $("#nameAlert").addClass("invisible");
      $("#nameAlert").addClass("visible");
    };

    if (q1 === "fun") {
      python++;
    } else if (q1 === "improve") {

    } else if (q1 === "money") {

    } else if (q1 ==="dunno") {
      python++;
    }

    if (q2 === "bigTech") {

    } else if (q2 === "web") {

    } else if (q2 === "mobile") {

    } else if (q2 === "gaming") {

    } else if (q2 ==="dunno") {
      python++;
    }

    if (q3 === "none") {

    } else if (q3 === "little") {

    } else if (q3 === "pro") {

    }

    if (q4 === "apple") {

    } else if (q4 === "microsoft") {

    } else if (q4 === "linux") {

    }

    if (q5 === "yes") {

    } else if (q4 === "no") {

    } else if (q4 === "meh") {

    }

  });  
});

// languages: C++, python, ruby, 
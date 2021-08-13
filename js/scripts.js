$(document).ready(function () {
  $("#suggester").submit(function (event) {
    event.preventDefault();
    const name = $("#name").val();
    const q1 = $("input:radio[name=reason]:checked").val();
    const q2 = $("input:radio[name=platform]:checked").val();
    const q3 = $("input:radio[name=experience]:checked").val();
    const q4 = $("input:radio[name=os]:checked").val();
    const q5 = $("input:radio[name=work]:checked").val();
    let cplusplus = 0;
    let csharp = 0
    let ruby = 0;
    let python = 0;
    let java = 0;
    let objectivec = 0;
    let javascript = 0;

    // Hides/shows name alert and result

    if (!name) {
      $("#nameAlert").addClass("visible");
      $("#nameAlert").removeClass("invisible");
      $("#result").fadeOut();

    } else {
      $("#inputName").text(name);
      $("#result").fadeIn();
      $("#nameAlert").addClass("invisible");
      $("#nameAlert").addClass("visible");
    };

    // Branching questions increment value to language variables above

    if (q1 === "fun") {
      python += 2;
      ruby += 1;
    } else if (q1 === "improve") {
      cplusplus += 2;
    } else if (q1 === "money") {
      python += 1;
      javascript += 1;
      objectivec += 1;
      csharp += 1;
      java += 2;
    } else if (q1 === "dunno") {
      python += 1;
    }

    if (q2 === "bigTech") {
      csharp += 2;
      objectivec += 2;
      python += 1;
    } else if (q2 === "web") {
      javascript += 3;
      java += 1;
      ruby += 2;
    } else if (q2 === "mobile") {
      objectivec += 2;
      java += 2;
    } else if (q2 === "gaming") {
      cplusplus += 2;
      csharp += 2;
    } else if (q2 === "dunno") {
      python += 1;
    }

    if (q3 === "none") {
      ruby += 1;
      python += 2;
      javascript += 1;
    } else if (q3 === "little") {
      ruby += 1;
      csharp += 1;
      java += 1;
    } else if (q3 === "pro") {
      cplusplus += 1;
    }

    if (q4 === "apple") {
      python += 1;
      cplusplus += 1;
      objectivec += 2;
      csharp -= 1;
    } else if (q4 === "microsoft") {
      javascript += 1;
      java += 1;
      csharp += 1;
      ruby += 1;
      objectivec -= 1;
    } else if (q4 === "linux") {
      cplusplus += 1;
      python += 1;
      java += 1;
      javascript += 1;
    }

    if (q5 === "startup") {
      javascript += 1;
      ruby += 1;
    } else if (q4 === "corporation") {
      cplusplus += 1;
      csharp += 1;
      java += 2;
      objectivec += 1;
    } else if (q4 === "myself") {
      python += 2;
    }

// Comparing values and showing results

    if (cplusplus > csharp && cplusplus > ruby && cplusplus > python && cplusplus > java && cplusplus > objectivec && cplusplus > javascript) {
      $("#cplusplus").show();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#java").hide();
      $("#objectivec").hide();
      $("#javascript").hide();
    } else if (csharp >= cplusplus && csharp >= ruby && csharp > python && csharp > java && csharp >= objectivec && csharp > javascript) {
      $("#cplusplus").hide();
      $("#csharp").show();
      $("#ruby").hide();
      $("#python").hide();
      $("#java").hide();
      $("#objectivec").hide();
      $("#javascript").hide();
    } else if (ruby > csharp && ruby >= cplusplus && ruby > python && ruby > java && ruby >= objectivec && ruby > javascript) {
      $("#cplusplus").hide();
      $("#csharp").hide();
      $("#ruby").show();
      $("#python").hide();
      $("#java").hide();
      $("#objectivec").hide();
      $("#javascript").hide();
    } else if (python >= csharp && python >= ruby && python >= cplusplus && python >= java && python >= objectivec && python >= javascript) {
      $("#cplusplus").hide();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#python").show();
      $("#java").hide();
      $("#objectivec").hide();
      $("#javascript").hide();
    } else if (java >= csharp && java >= ruby && java > python && java >= cplusplus && java >= objectivec && java > javascript) {
      $("#cplusplus").hide();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#java").show();
      $("#objectivec").hide();
      $("#javascript").hide();
    } else if (objectivec > csharp && objectivec > ruby && objectivec > python && objectivec > java && objectivec >= cplusplus && objectivec > javascript) {
      $("#cplusplus").hide();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#java").hide();
      $("#objectivec").show();
      $("#javascript").hide();
    } else if (javascript >= csharp && javascript >= ruby && javascript > python && javascript >= java && javascript >= objectivec && javascript >= cplusplus) {
      $("#cplusplus").hide();
      $("#csharp").hide();
      $("#ruby").hide();
      $("#python").hide();
      $("#java").hide();
      $("#objectivec").hide();
      $("#javascript").show();
    }
  });
});



$(document).ready(
  function() {
    $("#info-form").submit(function(event) {
      event.preventDefault();
      var dob = $("#born").val();
      var pet = $("input:radio[name=pet]:checked").val();
      var sign = $("#sign").val();

      if (pet === "cats" && sign === "Aries" || sign === "Leo" || sign === "Taurus") {
        $("h2").text("Madonna");
      };

      if (pet === "dogs" && sign === "Aries" || sign === "Taurus") {
        $("h2").text("Tom Cruise");
      };

      if (pet === "dogs" && sign === "Leo") {
        $("h2").text("Brad Pitt");
      };

      if (pet === "nopets") {
        $("h2").text("Donald Trump");
      };


    });
  }
);

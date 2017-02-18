$("#novaCitaĵo").on("click", function () {
    $.getJSON("./citaĵoj.json", function(json) {
        var html="";

        randomNumber = Math.floor(Math.random()*json.length);
        citaĵo = json[randomNumber];

        html += "<div class='citaĵo'>";
        html += "<i>" + citaĵo[0] + "</i><br> ";
        html +=  citaĵo[1] + "<br>";

        $(".message").html(html);
    });
});
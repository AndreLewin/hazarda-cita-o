$("#pepiCitaĵon").on("click", function () {
    citaĵo = $(".message").text();
    pepligilo = 'http://twitter.com/home?status=' +encodeURIComponent(citaĵo);
    window.open(pepligilo,'_blank');
});
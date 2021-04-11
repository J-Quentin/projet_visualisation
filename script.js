let corps = d3.select("body");
//ajouter un canevas à la page
let canevas = corps.append("svg")
    .attr("width". 600)
    .attr("height". 600);

//cercle en exemple
let mon_cercle = canevas.append("circle")
    .attr("cx",60)
    .attr("cy",60)
    .attr("r",40);
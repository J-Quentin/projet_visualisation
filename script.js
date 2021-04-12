let donnees = [30,60,120,340]

let corps = d3.select("body");
//ajouter un canevas à la page
let canevas = corps.append("svg")
    .attr("width", 600)
    .attr("height", 600);

//cercle en exemple
//let mon_cercle = canevas.append("circle")
//   .attr("cx",60)
//    .attr("cy",60)
//    .attr("r",40);

//ajouter autant de cercles que de données
canevas.selectAll("circle")
    .data(donnees)
    .enter()
    .append("circle")
        .attr("cx",(d => d))
        .attr("cy",300)
        .attr("r",d => d)
        .style("opacity", 0.5);
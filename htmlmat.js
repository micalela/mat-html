const links = [
  "http://new.math.uiuc.edu/oldnew/optiverse/",
  "http://new.math.uiuc.edu/oldnew/optiverse/qt/",
  "https://www.vanderbilt.edu/AnS/psychology/cogsci/chaos/workshop/Fractals.html",
  "https://www.wahl.org/fe/HTML_version/link/FE4W/c4.htm",
  "http://www.rogmann.org/math/tori/torus2en.html",
  "https://www.kleinbottle.com/",
  "https://personal.math.ubc.ca/~cass/courses/m308-03b/projects-03b/skinner/ex-dimension-koch_snowflake.htm",
  "https://personal.math.ubc.ca/~cass/courses/m308-03b/projects-03b/skinner/",
  "https://www2.karlin.mff.cuni.cz/~pyrih/e/e2001v2/c/ect/node52.html",
  "http://web1.kcn.jp/hp28ah77/index.html#chapters",
  "http://web1.kcn.jp/hp28ah77/us27i_klpr.htm",
  "https://www2.karlin.mff.cuni.cz/~pyrih/e/e2001v2/c/ect/node1.html",
  "http://www.complang.tuwien.ac.at/schani/",
  "https://www.math.leidenuniv.nl/~desmit/",
  "http://pi.math.cornell.edu/~dtaimina/hypplanes.htm",
  "https://www.georgehart.com/virtual-polyhedra/vp.html",
  "https://www.georgehart.com/index.html",
  "https://www.cs.ubc.ca/~tmm/gc/",
  "https://www.geometrygames.org/HyperbolicBlanket/index.html",
  "https://www.geometrygames.org/TorusGames/",
  "http://www.biscuitsandjam.com/stripe_maker.php",
  "http://madeleineshepherd.blogspot.com/search/label/random%20knitting",
  "https://themathematiciansshirts.wordpress.com/",
  "http://www.woollythoughts.com/borromeancubes.html",
  "http://www.woollythoughts.com/dragons.html",
  "http://www.mentalblocks.co.uk/aboutus.html",
  "http://www.rogmann.org/archiv/math/hyp/Dreiecke.html",
  "http://www.rogmann.org/archiv/math/hyp/anim/Animationen.html",
  "http://aleph0.clarku.edu/~djoyce/poincare/poincare.html",
  "https://www.ics.uci.edu/~eppstein/junkyard/hyper.html",
  "https://www.geometrygames.org/HyperbolicGames/",
  "https://www.ics.uci.edu/~eppstein/junkyard/tiling.html",
  "http://www.rogmann.org/math/csaszar/",
  "https://mathcurve.com/surfaces.gb/paraboloidhyperbolic/paraboloidhyperbolic.shtml",
  "http://mathpuzzle.com/",
  "https://kleinbottle.com/?utm_source=substack&utm_medium=email",
  "https://mathcurve.com/surfaces.gb/mobiussurface/mobiussurface.shtml",
  "http://andrewbayly.com/PR/pr.html",
  "https://www.epsilones.com/paginas/laboratorio/laboratorio-002-teseladopenrose.html",
  "https://www.epsilones.com/paginas/0-bestiario/bestiario-000.html",
];

const et = document.getElementById("links");

links.map((x, idx) => {
  const item = document.createElement("li"); /*<li></li>*/
  const pg = document.createElement("a"); /*<a></a>*/
  pg.setAttribute("href", x); /* a.href = url */
  pg.setAttribute("target", "_blank");
  pg.text = x; /* a.text = url */

  item.appendChild(pg); /* a inside li */
  et.appendChild(item); /* li inside et */
});

// $.fn.circle2path = function(cx, cy, r) {
//   var path =
//     "M " + (cx - r) + ", " + cy +
//     "a " + r + "," + r + " 0 1,0 " + r * 2 + ",0" +
//     "a " + r + "," + r + " 0 1,0 " + -(r * 2) + ",0";
//   this.attr({ d: path });
// };

function radius(w, h) {
    return (w || h) / 2;
  }
  
  var svg = $(".social-media svg"),
    width = svg.width(),
    height = svg.height(),
    path = svg.children(".loader"),
    path_width = parseInt(path.css('stroke-width')),
    svg_viewBox = [0 , 0, width, height],
    svg_background = $.merge(['new'], svg_viewBox);
  
  svg.attr({
    'viewBox': svg_viewBox.join(' '),
    'enable-background': svg_background.join(' ')
  });
  path.attr({
    cx: width / 2,
    cy: height / 2,
    r: (radius(width, height) - (path_width / 2))
  });
  // path.circle2path(width / 2, height / 2, radius(width, height) - (path_width / 2));
  
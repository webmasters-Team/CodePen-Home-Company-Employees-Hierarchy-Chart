var margin = {
    top: 20,
    right: 120,
    bottom: 20,
    left: 120
  },
  width = 960 - margin.right - margin.left,
  height = 800 - margin.top - margin.bottom;

var root = {
  "name": "Ian Devling",
  "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/cto.jpg",
  "area": "Corporate",
  "profileUrl": "'example.com",
  "office": "CTO office",
  "tags": "Ceo,tag1,manager,cto",
  "isLoggedUser": false,
  "positionName": "Cheaf Executive Officer ",
  "children": [{
    "name": "Davolio Nancy",
    "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
    "area": "Corporate",
    "profileUrl": "'example.com",
    "office": "CEO office",
    "tags": "Ceo,tag1, tag2",
    "isLoggedUser": false,
    "positionName": "CTO ",
    "children": [{
      "name": "Fuller Andrew",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Linear Manager"
    }, {
      "name": "Peacock Margaret",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "CEO"
    }, {
      "name": "Buchanan Steven",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Head of direction"
    }, {
      "name": "Suyama Michael",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Senior sales manager"
    }, {
      "name": "King Robert",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Senior Sales Manager",
      "children": [{
        "name": "Callahan Laura",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Junior sales manager"
      }, {
        "name": "Dodsworth Anne",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Junior sales manager"
      }]
    }, {
      "name": "West Adam",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "CTO"
    }, {
      "name": "Charlotte Cooper",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Senior Trader",
      "children": [{
        "name": "Doniyor Dev",
        "imageUrl": "https://avatars.githubusercontent.com/u/184954746?v=4",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": true,
        "positionName": "Full-stack engineer"
      }]
    }, {
      "name": "Yoshi Nagase",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Head of laboratory",
      "children": [{
        "name": "Valle Saavedra",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Junior Inovator"
      }, {
        "name": "Regina Murphy",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Developer"
      }, {
        "name": "Mayumi Ohno",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Senior developer"
      }, {
        "name": "SizePalette",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "System analyst"
      }]
    }]
  }, {
    "name": " Leverling Janet",
    "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/female.jpg",
    "area": "Corporate",
    "profileUrl": "'example.com",
    "office": "CEO office",
    "tags": "Ceo,tag1, tag2",
    "isLoggedUser": false,
    "positionName": "CTO ",
    "children": [{
      "name": "Peter Wilson",
      "isLoggedUser": false,
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "positionName": "Head of channels",
      "children": [{
        "name": " Lars Peterson",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Anakyst Developer"
      }]
    }, {
      "name": "Carlos Diaz",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Senior Android Developer",
      "children": [{
        "name": " Petra Winkler",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Android Developer"
      }, {
        "name": "Martin Bein",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Ios Developer",
        "size": 2023
      }]
    }, {
      "name": "Sven Petersen",
      "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
      "area": "Corporate",
      "profileUrl": "'example.com",
      "office": "CEO office",
      "tags": "Ceo,tag1, tag2",
      "isLoggedUser": false,
      "positionName": "Senior Developer",
      "children": [{
        "name": "Current User",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/bean.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Web Developer"
      }, {
        "name": "Beate Vileid",
        "imageUrl": "https://raw.githubusercontent.com/bumbeishvili/Assets/master/Projects/D3/Organization%20Chart/general.jpg",
        "area": "Corporate",
        "profileUrl": "'example.com",
        "office": "CEO office",
        "tags": "Ceo,tag1, tag2",
        "isLoggedUser": false,
        "positionName": "Junior Developer"
      }]
    }]
  }]
}
var i = 0,
  duration = 750,
  rectW = 170,
  rectH = 60;

var tree = d3.layout.tree().nodeSize([rectW + 20, rectH]);
var diagonal = d3.svg.diagonal()
  .projection(function(d) {
    return [d.x + rectW / 2, d.y + rectH / 2];
  });

var svg = d3.select("#body")
  .append("svg")
  .attr("width", window.innerWidth)
  .attr("height", window.innerHeight)
  .call(zm = d3.behavior.zoom().scaleExtent([0.05, 3]).on("zoom", redraw))
  .append("g")
  .attr("transform", "translate(" + window.innerWidth / 2 + "," + 20 + ")");

//necessary so that zoom knows where to zoom and unzoom from
zm.translate([window.innerWidth / 2, 20]);

root.x0 = 0;
root.y0 = height / 2;

function collapse(d) {
  if (d.children) {
    d._children = d.children;
    d._children.forEach(collapse);
    d.children = null;
  }
}

function findmySelf(d) {
  if (d.isLoggedUser) {
    expandParents(d);
  } else if (d._children) {
    d._children.forEach(function(ch) {
      ch.parent = d;
      findmySelf(ch);
    })
  } else if (d.children) {
    d.children.forEach(function(ch) {
      ch.parent = d;
      findmySelf(ch);
    });
  };

}

function expandParents(d) {
  while (d.parent) {
    d = d.parent;
    if (!d.children) {
      d.children = d._children;
      d._children = null;
    }

  }
}

function showMySelf() {
  if (!root.children) {
    if (!root.isLoggedUser) {
      root.children = root._children;
    }
  }
  if (root.children) {
    root.children.forEach(collapse);
    root.children.forEach(findmySelf);
  }

  update(root, true);
}
root.children.forEach(collapse);

update(root);

d3.select("#body").style("height", "800px");

var tooltip = d3.select('body')
  .append('div')
  .attr('class', 'customTooltip-wrapper');

function update(source, centerMySelf) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function(d) {
    d.y = d.depth * 180;
  });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function(d) {
      return d.id || (d.id = ++i);
    });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function(d) {
      return "translate(" + source.x0 + "," + source.y0 + ")";
    })
    .on("click", click);

  nodeEnter.append("rect")
    .attr("width", rectW)
    .attr("height", rectH)
    .attr("stroke", "gray")
    .attr("stroke-width", 1)
    .style("fill", function(d) {
      return d._children ? "lightsteelblue" : "#fff";
    });

  nodeEnter.append("text")
    .attr("x", rectH * 3 / 4 + 5)
    .attr("y", 10)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .text(function(d) {
      return d.name;
    });

  nodeEnter.append("text")
    .attr("x", rectH * 3 / 4 + 5)
    .attr("y", rectH - 10)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .text(function(d) {
      return d.area;
    });

  nodeEnter.append("text")
    .attr("x", rectH * 3 / 4 + 5)
    .attr("y", 30)
    .attr("dy", ".35em")
    .attr("text-anchor", "left")
    .text(function(d) {
      return d.positionName;
    });
  nodeEnter.append("svg:image")
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', rectH * 100 / 140)
    .attr('height', rectH)
    .attr("xlink:href", function(v) {
      return v.imageUrl;
    })

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + d.x + "," + d.y + ")";
    });

  nodeUpdate.select("rect")
    .attr("width", rectW)
    .attr("height", rectH)
    .attr("stroke", "#ccc")
    .attr("stroke-width", 1)
    .style("fill", function(d) {
      if (d.isLoggedUser) return "aquamarine";
      return d._children ? "PowderBlue" : "MintCream";
    });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function(d) {
      return "translate(" + source.x + "," + source.y + ")";
    })
    .remove();

  nodeExit.select("rect")
    .attr("width", rectW)
    .attr("height", rectH)
    //.attr("width", bbox.getBBox().width)""
    //.attr("height", bbox.getBBox().height)
    .attr("stroke", "black")
    .attr("stroke-width", 1);

  nodeExit.select("text");

  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function(d) {
      return d.target.id;
    });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("x", rectW / 2)
    .attr("y", rectH / 2)
    .attr("d", function(d) {
      var o = {
        x: source.x0,
        y: source.y0
      };
      return diagonal({
        source: o,
        target: o
      });
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function(d) {
      var o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function(d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });

  if (centerMySelf) {
    var x;
    var y;

    nodes.forEach(function(d) {
      if (d.isLoggedUser) {
        x = d.x;
        y = d.y;
      }

    });

    // normalize for width/height
    var new_x = (-x + (window.innerWidth / 2));
    var new_y = (-y + (window.innerHeight / 2));

    // move the main container g
    svg.attr("transform", "translate(" + new_x + "," + new_y + ")")
    zm.translate([new_x, new_y]);
    zm.scale(1);
  }

  /*################  TOOLTIP  #############################*/

  function getTagsFromCommaSeparatedStrings(tags){
    debugger;
   return tags.split(',').map(function(v){ return   '<li><div class="tag">'+v+'</div></li>  ' }).join('');
  }
  function tooltipContent(params) {
    
    return '   <a class="customTooltip" href="'+params.profileUrl+'" target="_blank" >  ' +
    '     <div class="tooltip-image-wrapper"> <img width="100" height="140" src="' + params.imageUrl + '">  ' +
      '     </div>  ' +
      '     <div class="tooltip-desc">  ' +
      '       <h4 class="position">'+params.positionName+'</h4>  ' +
      '       <h4 class="area">'+params.area+' </h4>  ' +
      '       <h3 class="name"> '+params.name+' <h3>   ' +
      '       <h4 class="office">'+params.office+'</h4>  ' +
      '         <h4 class="tags-wrapper">  ' +
      '           <span class="title">Tags: &nbsp;</span>  ' +
      '         <ul class="tags">  ' + getTagsFromCommaSeparatedStrings(params.tags)+
      '   </ul>  ' +
      '       </h4>  ' +
      '     </div>  ' +
      '  </a>  ';

    return '<div >' +
      ' <img width=120 height=160 src="' + params.imageUrl + '"/>' +
      '<h3 class="tooltip-name">' + params.name + '</h3>' +
      '<h5 class="tooltip-positionName">' + params.positionName + '</h3>' +
      '<h5 class="tooltip-department">' + params.department + '</h3>' +

      '</div>'
  }

  function tooltipHoverHandler(d) {

    tooltip.html(tooltipContent(d));

    tooltip.transition()
      .duration(200).style("opacity", "1").style('display', 'block');
    d3.select(this).attr('cursor', 'pointer').attr("stroke-width", 50);
  }

  function tooltipOutHandler() {
    tooltip.transition()
      .duration(200)
      .style('opacity', '0').style('display', 'none');
    d3.select(this).attr("stroke-width", 5);
  }

  nodeEnter.on('mouseover', tooltipHoverHandler);

  // nodeEnter.on('mouseout', tooltipOutHandler);

  nodeEnter.on("mousemove", function(d) {
    var zoomIndex = (window.outerWidth - 8) / window.innerWidth
    tooltip.style('top', (/*d3.event.pageY - 300*/ -60) + 'px')
      .style('left', (/*d3.event.pageX - 200*/-125) + 'px');
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);

}

//########################################################

//Redraw for zoom
function redraw() {
  //console.log("here", d3.event.translate, d3.event.scale);
  svg.attr("transform",
    "translate(" + d3.event.translate + ")" +
    " scale(" + d3.event.scale + ")");
}
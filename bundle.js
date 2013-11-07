;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var indContrib = module.exports = function (target) {

  console.log('FUCK');

  var w = 400;
  var h = 400;
  var padding = 30;

  var colors = ["orange", "green"];
  var xSpace = 190;
  var xMargin = 0;
  var yMargin = 200;

  console.log(target);

  var svg = d3.select(target)
    .append("svg")
    .attr("height", h)
    .attr("width", w)
    .attr("fill", colors[0]); 
};

    

  //   truncData = dataset.slice(0, 10);

  //   var xScale = d3.scale.linear()
  //     .domain([0, d3.max(truncData, function(d) {
  //       // use larger of 2 yes and no values
  //       if (d[1].no > d[1].yes) return d[1].no;
  //       return d[1].yes; })])
  //     .rangeRound([0, w/2 - padding * 2]);

  //   var yScale = d3.scale.ordinal()
  //     .domain(d3.range(truncData.length))
  //     .rangeRoundBands([padding, h - padding], 0.20);

  //   var formatAsPercentage = d3.format(".1%");

  //   var xAxis = d3.svg.axis()
  //     .scale(xScale)
  //     .orient("bottom")
  //     .ticks(5);

  //   var yAxis = d3.svg.axis()
  //     .scale(yScale)
  //     .orient("left")

},{}],2:[function(require,module,exports){
module.exports={
  "biden": {
    "phrase": "Vice President Biden",
    "title": "Joseph Biden",
    "subheads": [
      {
        "subhead": "Campaign Finance",
        "content": [
          {
            "title": "Industry Contributions",
            "img": "https://raw.github.com/ameensol/ghettoCDN/master/gun/img/bidenIndContribImg.png",
            "source": "Sunlight Foundation",
            "sourceURL":"http://influenceexplorer.com/politician/joseph-r-biden-jr/bb7109816cb44622be17ec7b0d642171?cycle=2008"
          },
          {
            "title": "Organization Contributions",
            "img":"https://raw.github.com/ameensol/ghettoCDN/master/gun/img/bidenOrgContribImg.png",
            "source": "Sunlight Foundation",
            "sourceURL":"http://influenceexplorer.com/politician/joseph-r-biden-jr/bb7109816cb44622be17ec7b0d642171?cycle=2008"
          }
        ]
      },
      {
        "subhead":"Relevant Speeches",
        "content": {
          "iframe": "<iframe height=\"360\" width=\"640\" style=\"border: 0px solid #ffffff;\" src=\"http://cdnapi.kaltura.com/index.php/extwidget/embedIframe/entry_id/0_ewldncd8/widget_id/_483511/uiconf_id/5590821?referer=http://abcnews.go.com/Politics/video/joe-biden-gun-control-speech-vice-president-pushes-19429372&amp;flashvars[autoPlay]=false&amp;addThis.playerSize=392x221&amp;freeWheel.siteSectionId=nws_offsite&amp;closedCaptionActive=false&amp;addThis.playerSize=640x360&amp;closedCaptionsOverPlayer.fontsize=18\">Unfortunately your browser does not support IFrames.</iframe>"
        }
      }
    ]
  }
}
},{}],3:[function(require,module,exports){
/*
 * Title Caps
 *
 * Created CommonJS module By Julia Jacobs - http://html5devgal.wordpress.com - 16 May
 * Ported to JavaScript By John Resig - http://ejohn.org/- 21 May 2008
 * Original by John Gruber - http://daringfireball.net/ - 10 May 2008
 * License: http://www.opensource.org/licenses/mit-license.php
 */

(function () {
    "use strict";
    var small = "(a|an|and|as|at|but|by|en|for|if|in|of|on|or|the|to|v[.]?|via|vs[.]?)";
    var punct = "([!\"#$%&'()*+,./:;<=>?@[\\\\\\]^_`{|}~-]*)";

    function lower (word) {
        return word.toLowerCase ();
    }

    function upper (word) {
        return word.substr (0, 1).toUpperCase () + word.substr (1);
    }

    function caps (match) {
        return (/[A-Za-z]\.[A-Za-z]/).test (match) ? match : upper (match);
    }

    function replacePunct(all, punct, word) {
        return punct + upper (word);
    }

    exports.titlecaps = function (title) {
        var parts = [], split = /[:.;?!] |(?: |^)["Ō]/g, index = 0;

        while (true) {
            var m = split.exec (title);

            parts.push (title.substring (index, m ? m.index : title.length)
                            .replace (/\b([A-Za-z][a-z.'Ō]*)\b/g, caps)
                            .replace (new RegExp ("\\b" + small + "\\b", "ig"), lower)
                            .replace (new RegExp ("^" + punct + small + "\\b", "ig"), replacePunct)
                            .replace (new RegExp ("\\b" + small + punct + "$", "ig"), upper));

            index = split.lastIndex;

            if (m) {
                parts.push (m[0]);
            }
            else {
                break;
            }
        }

        return parts.join ("").replace (/ V(s?)\. /ig, " v$1. ")
            .replace (/(['Ō])S\b/ig, "$1s")
            .replace (/\b(AT&T|Q&A)\b/ig, function (all) {
            return all.toUpperCase ();
        });
    };

} ());

},{}],4:[function(require,module,exports){
module.exports=[
    {
        "count": "123486",
        "amount": "58189782.00",
        "id": "b21467ae32924f84ada9076535401a91",
        "should_show_entity": false,
        "name": "RETIRED"
    },
    {
        "count": "40221",
        "amount": "28331500.00",
        "id": "f50cf984a2e3477c8167d32e2b14e052",
        "should_show_entity": true,
        "name": "LAWYERS/LAW FIRMS"
    },
    {
        "count": "49118",
        "amount": "22456421.00",
        "id": "31657d3c187e4cecb670d228d7e674d2",
        "should_show_entity": true,
        "name": "EDUCATION"
    },
    {
        "count": "21512",
        "amount": "10808730.00",
        "id": "a05a0d06f6814b31bece35a81fcb40c7",
        "should_show_entity": true,
        "name": "HEALTH PROFESSIONALS"
    },
    {
        "count": "14821",
        "amount": "9052702.00",
        "id": "e5175721aac9406795a1f97cae01e01d",
        "should_show_entity": true,
        "name": "BUSINESS SERVICES"
    },
    {
        "count": "19217",
        "amount": "8801950.00",
        "id": "9e701425eeb14b4c874cfb4415a4ac3b",
        "should_show_entity": true,
        "name": "CIVIL SERVANTS/PUBLIC OFFICIALS"
    },
    {
        "count": "13370",
        "amount": "7959352.00",
        "id": "042288e0185a44ec82982814c69abdca",
        "should_show_entity": true,
        "name": "COMPUTERS/INTERNET"
    },
    {
        "count": "9241",
        "amount": "6720885.00",
        "id": "9fd0b2477acc4fc385e2e2c8e6ed7b00",
        "should_show_entity": true,
        "name": "TV/MOVIES/MUSIC"
    },
    {
        "count": "6359",
        "amount": "6610837.00",
        "id": "0af3f418f426497e8bbf916bfc074ebc",
        "should_show_entity": true,
        "name": "SECURITIES & INVESTMENT"
    },
    {
        "count": "11439",
        "amount": "6402143.00",
        "id": "d9c4a26cd671436eac3c501184364fc4",
        "should_show_entity": false,
        "name": "MISC BUSINESS"
    }
]
},{}],5:[function(require,module,exports){
var caps = require('titlecaps');

var bigData    = require('./littleData.json');
var obamaIndContrib = require('./obamaIndContrib.json');
var indContrib = require('./lib/d3vis/indContrib.js');

var sunlightBarChart = require('./sunlightBarChart.js');

$(function(){
  // var url = document.URL;
  init();
});

function init() {

  console.log('extension injection commenced');

  var screenWidth = document.width;
  var article = $("#post-content").children("p");

  freeIcons = chrome.extension.getURL("lib/glyphicons/free");
  socialIcons = chrome.extension.getURL("lib/glyphicons/social");
  thumbsUp = freeIcons + "/glyphicons_343_thumbs_up.png";
  thumbsDown = freeIcons + "/glyphicons_344_thumbs_down.png";
  home = freeIcons + "/glyphicons_020_home.png";
  cup = freeIcons + "/glyphicons_074_cup.png";
  message = freeIcons + "/glyphicons_124_message_plus.png";
  settings = freeIcons + "/glyphicons_280_settings.png";
  chat = freeIcons + "/glyphicons_245_chat.png";
  data = freeIcons + "/glyphicons_041_charts.png";
  right = freeIcons + "/glyphicons_211_right_arrow.png";
  left = freeIcons + "/glyphicons_210_left_arrow.png";

  $("body").append('<div id="nav">\
    <div id="navContainer">\
      <div class="icons pull-left">\
        <img id="dataLauncher" class="icon" src="' + data + '">\
        <img class="icon" src="' + chat + '">\
      </div>\
      <div class="icons icons-center">\
        <img class="icon" src="' + thumbsDown + '">\
        <span id="articleScore">357</span>\
        <img class="icon" src="' + thumbsUp + '">\
        <img class="icon" src="' + cup + '">\
      </div>\
      <div class="icons pull-right">\
        <img class="icon" src="' + message + '">\
        <img class="icon" src="' + home + '">\
        <img class="icon" src="' + settings + '">\
      </div>\
    </div>\
  </div>');

  console.log(bigData);

  var lazyData = []; // this is to be used by d3 to make charts, should have objects with props 'target' and 'dataset'.

  var entityHTML = '<div id="entities"><h2>Entities</h2><ul>';
  var subheadsHTML = '<div id="subheadsList">';
  var modalsHTML = '<div id="modalsList">';
  Object.keys(bigData).forEach(function(e) {
    // replace the entities phrase with a datalink
    article.each(function() {
      $(this).html($(this).html().replace(bigData[e].phrase, '<a id="' + e + 'Link" class="dataLink" href="#">' + bigData[e].phrase + '</a>'));
    });
    entityHTML += '<li class="tier1"><a id="' + e + '" class="entity">' + bigData[e].title + '</a></li>';
    subheadsHTML += '<div class="subheadEntity"><ul>';
    modalsHTML += '<div class="modalEntity">';
    Object.keys(bigData[e].subheads).forEach(function(s) {
      subheadsHTML += '<li class="tier2"><a class="subhead">' + s + '</a></li>';
      modalsHTML += '<div class="modal">';
      modalsHTML += '<div class="modal-title"><h3>' + bigData[e].title + '</h3></div>';
      var data = bigData[e].subheads[s];
      if(notBottom(data) == 0) {
        // more than one data, use slider
        modalsHTML += '<div class="button-left"><img class="icon" src="' + left + '"></div>';
        modalsHTML += '<div class="button-right"><img class="icon" src="' + right + '"></div>';
        modalsHTML += '<div class="cycle">';
        modalsHTML += innerSlider(data, e, s);
        modalsHTML += '</div>'; // cycle
      } else {
        modalsHTML += innerModal(data, e, s);
      }
      modalsHTML += '</div>'; // modal
    });
    subheadsHTML += '</ul></div>'; //subheads
    modalsHTML += '</div>'; // modalEntity
  });

  // returns 0 only if the data is made up of arrays and objects, or returns the number of strings and numbers
  function notBottom (data) {
    return Object.keys(data).reduce(function(prev, el, ind, arr) {
    if (typeof data[el] == 'string' || typeof data[el] == 'number') return prev + 1;
      return prev;
    }, 0);
  }

  function innerSlider (data, e, s) {
    var html = '';
    if(typeof data == 'object') {
      Object.keys(data).forEach(function(d) {
        html += innerModal(data[d], e, s, d);
      }); 
    } else if(typeof data == 'array') {
      data.forEach(function(d) {
        html += innerModal(data[d], e, s, d);
      });
    } else {
      throw new Error("innerSlider called with something other than an object or array!");
    }
    return html;
  }

  function innerModal(data, e, s, d) {
    var html = '<div class="data">';
    // Data, Img, Text, or iFrame... pick one. 
    if(data.data) {
      if (d) {
        var dataTarget = e + d.replace(/\s/g, '');
        var title = d;
      } else {
        var dataTarget = e + s.replace(/\s/g, '');
        var title = s;
      }
      html += '<div id="' + dataTarget + '"></div>';
      // MAKE AN ARRAY
      lazyData.push({
        target: '#' + dataTarget,
        dataset: data.data,
        title: title
      });
    } else if (data.img) {
       html += modalImg(data.img);
    } else if (data.text) { 
      html += modalText(data.text);
    } else if (data.iframe) {
      html += data.iframe;
    }
    if(data.source) html += modalSource(data.source, data.sourceURL);
    html += '</div>';
    return html;
  }

  function modalImg(img) {
    return '<img src="' + img + '">'
  }

  function modalText(text) {
    return '<p>' + text + '</p>';
  }

  function modalSource(source, sourceURL) {
    return '<div class="modal-source"><a href="' + sourceURL + '">' + source + '</a></div>';
  }

  $("body").append(entityHTML);
  $("body").append(subheadsHTML);
  $("body").append(modalsHTML);

  // Jquery cached lookups
  var _entities = $("#entities .entity");
  var _subheadEntities = $("#subheadsList .subheadEntity");
  var _subheads = $("#subheadsList .subhead");
  var _modalEntities = $("#modalsList .modalEntity");
  var _modals = $("#modalsList .modal");


  // 
  // 
  //   
  //   Event Handlers
  //   
  // 
  //
  //

  _entities.mousedown(function(e) {
    e.preventDefault();
    e.stopPropagation();
    // var a = $(this);
    // setAnchors(e, a);
    // setSubheads(e, a);
  });

  function setAnchors(e, a) {
    if (a.hasClass("active")) {
      a.removeClass("active");
    } else {
      var li = a.parent("li");
      li.siblings("li").children("a").removeClass("active hover");
      a.addClass("active");
    }
  }

  _entities.mouseenter(function(e) {
    var a = $(this);

    // checks that none of the other entities are active
    if (_entities.hasClass("active")) return;

    _entities.removeClass("hover");
    a.addClass("hover");

    // checks that none of the subheads are active
    var subAnchors = $("#subheadsList .subhead");
    subAnchors.removeClass("hover");
    if (!subAnchors.hasClass("active")) setSubheads(e, a);
  });

  // Blanket hides all subheads, then displays the target subhead
  function setSubheads(e, a) {
    var i = a.parent("li").index();

    // hide subheads
    _subheadEntities.removeClass("active");

    var subheadEntity = $(_subheadEntities.get(i));
    subheadEntity.css("left", a.width() + 21 + "px")
      .css("top", (a.offset().top - $(window).scrollTop()) - 5 + "px")
      .addClass("active");
  }

  _subheads.mousedown(function(e) {
    e.preventDefault();
    e.stopPropagation();
    // var a = $(this);
    // setAnchors(e, a);
    // setModals(e, a);
  });

  function setModals(e, a) {
    var j = a.parent("li").index();
    var i = a.parents(".subheadEntity").index();
    // console.log(i, j);

    var modalsList = $("#modalsList");
    modalsList.show();

    var modalEntity = $(_modalEntities.hide().get(i));
    modalEntity.show();
    // console.log(modalEntity);

    var modal = $(modalEntity.children(".modal").hide().get(j));
    modal.find(".data").removeClass("active").first().addClass("active");

    var left = (screenWidth - modal.width()) / 2;
    modal.css("left", left).show();
  }

  _subheads.mouseenter(function(e) {
    var a = $(this);
    // checks that none of the other entities are active
    if (_subheads.hasClass("active")) return;
    _subheads.removeClass("hover");
    a.addClass("hover");
    setModals(e, a);
  });

  _modals.mousedown(function(e) {
    e.preventDefault();
    e.stopPropagation();
  });

  $("#modalsList .button-left").mousedown(function(e) {
    var datas = $(this).siblings(".cycle").children(".data");
    var prev, active;
    datas.each(function(i, e) {
      e = $(e);
      if(e.hasClass("active")) {
        e.removeClass("active");
        prev = e.prev(".data");
      }
    });
    if(prev && prev.length > 0) {
      prev.addClass("active");  
    } else {
      datas.last(".data").addClass("active");
    }
  });

  $("#modalsList .button-right").mousedown(function(e) {
    var datas = $(this).siblings(".cycle").children(".data");
    var next;
    datas.each(function(i, e) {
      e = $(e);
      if(e.hasClass("active")) {
        e.removeClass("active");
        next = e.next(".data");
      }
    });
    if(next && next.length > 0) {
      next.addClass("active");
    } else {
      datas.first(".data").addClass("active");
    }
  });

  // Flash fix for embedding video players
  flashTransparent($(".data"));

  function flashTransparent(e) {
    e.children("iframe").each(function() {
      var url = $(this).attr("src");
      $(this).attr("src", url+"?wmode=transparent");
    });
  }

  $(document).on('click', '.dataLink', function(e) {
    e.preventDefault();
    e.stopPropagation();
    var entityID = e.currentTarget.id.replace(/Link$/, "");
    var entity = $("#" + entityID);

    _entities.removeClass("hover");
    entity.addClass("hover");
    $("#entities").show();
    $("#subheadsList").show();
    setSubheads(e, entity);
  });

  $(document).on('click', '#dataLauncher', function(e) {
    $("#entities").show();
    $("#subheadsList").show();
  });

  $(document).mousedown(function(e) {
    $("#entities").hide();
    $("#subheadsList").hide();
    $("#modalsList").hide();
  });

  // indContrib(null, "#obamaData");
  // indContrib(obamaIndContrib, "#obamaData");

  // d3 d3 d3 d3 d3 d3 d3 d3 d3 d3 d3

// make the server respond with the correct structure for the cleint

  lazyData.forEach(function(e) {
    sunlightBarChart(e.target, e.dataset, e.title);
  });
}
  
},{"./lib/d3vis/indContrib.js":1,"./littleData.json":2,"./obamaIndContrib.json":4,"./sunlightBarChart.js":6,"titlecaps":3}],6:[function(require,module,exports){
var caps = require('titlecaps');

var barChart = module.exports = function(target, dataset, title) {
  var w = 600;
  var h = 265;
  var padding = 30;

  var colors = ["orange", "green"];
  var xSpace = 160;
  var xMargin = 30;
  var yMargin = 200;

  var svg = d3.select(target)
    .append("svg")
    .attr("height", h)
    .attr("width", w);

  svg.append("rect")
    .attr("width", w)
    .attr("height", h)
    .attr("fill", "white");

  var xScale = d3.scale.linear()
    .domain([0, d3.max(dataset, function(d) {
      return parseInt(d.amount || d.total_amount) })])
    // .rangeRound([0, w/2 - padding * 2]);
    .range([0, w - (xSpace + xMargin + 100)]); // 80 for text offset


  var yScale = d3.scale.ordinal()
    .domain(d3.range(dataset.length))
    .rangeRoundBands([padding, h - padding], 0.20);

  var formatAsPercentage = d3.format(".1%");

  var xAxis = d3.svg.axis()
    .scale(xScale)
    .orient("bottom")
    .tickSize(0);

  var yAxis = d3.svg.axis()
    .scale(yScale)
    .orient("left")
    .tickSize(0);

  var clip = svg.append("defs")
    .append("clipPath")
    .attr("id", "clip")
    .append("rect")
    .attr("x", xSpace + xMargin)
    .attr("width", w - (xSpace + xMargin + 100))
    .attr("height", h)

  var set = svg.selectAll(".set")
    .data(dataset)
    .enter()
    .append("g")
    .attr("transform", function(d, i) {
      return "translate(0," + yScale(i) + ")"
    })

  // Bars
  set.append("rect")
    .attr("clip-path", "url(#clip)")
    .attr("class", "bar")
    .attr("width", function(d) {
      return xScale(d.amount || d.total_amount) + 5
    })
    .attr("y", yScale.rangeBand() * 0.1)
    .attr("x", xSpace + xMargin - 5)
    .attr("height", yScale.rangeBand() * 0.9)
    .attr("rx", "4")
    .attr("ry", "4")
    .attr("fill", colors[0])

  // Dollar label of bar graph
  set.append("text")
    .attr("height", yScale.rangeBand())
    .attr("x", function(d) {
      return xScale(d.amount || d.total_amount) + xSpace + 8 + xMargin;
    })
    .attr("y", yScale.rangeBand() * 0.82)
    .text(function(d) {
      return "$" + Math.round(d.amount || d.total_amount).toLocaleString();
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "dimgrey")

  // Industry label on y-axis
  set.append("text")
    .text(function(d) { 
      // TODO return only 1st letter uppercase
      // return d.name.toLowerCase();
      // return d.name;
      return caps.titlecaps(d.name.toLowerCase());
    })
    .attr("x", xMargin)
    .attr("y", yScale.rangeBand() * 0.88)
    .attr("font-family", "sans-serif")
    .attr("font-size", "12px")
    .attr("fill", "black")

  // title
  svg.append("text")
    .attr("x", padding)             
    .attr("y", (padding/1.5))
    .attr("text-anchor", "left")
    .style("font-size", "16px") 
    .style("text-decoration", "underline")  
    .text(title);

  // x axis
  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + (xSpace + xMargin) + "," + (h - padding) + ")")
    .call(xAxis);

  // y axis
  svg.append("g")
    .attr("class", "axis yAxis")
    .attr("transform", "translate(" + (xSpace + xMargin) + ",0)")
    .call(yAxis);
}
},{"titlecaps":3}]},{},[5])
;
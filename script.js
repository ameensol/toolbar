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
  
// Constructor function for modals - params should have html and id for now, but I will expand later
var Modal = module.exports = function(entity) {
  if(!this instanceof Modal) { return new Modal(entity) }
  this.id = entity.disambiguated.name.replace(/\s+/g, '').replace('(', '_').replace(')', '');
  this.text = entity.text;
  
  $('body').append('<div class="modal" id="' + this.id + '"></div>');
  this.modal = $("#" + this.id);
  this.modal.hide();

  // because the html has yet to be created (although it will be here in some initialization fashion) this will throw an error
  // this.modalTitle = $("#" + this.id + " .modalTitle");

  this.assignLink = function() {
    var self = this;

    console.log(self.text, self.id);

    self.linkID = self.id + "Link";

    $("#article_body .article_body").each(function() {
      $(this).html($(this).html().replace(self.text, "<a id='" + self.linkID + "' class='dataLink' href='#'>" + self.text + "</a>")); 
    });
    // articleBody.innerHTML = articleBody.innerHTML.replace(self.text, "<a id='" + self.linkID + "' class='dataLink' style='color:#C40000;text-decoration:none;border-bottom:none;' href='#'>" + self.text + "</a>");
  };

  // Commented because I'm blanket closing all elements when I open a new subhead/subsubhead
/*  this.toggleFade = function(e, fadeTime) {
    var self = this;
    if(e && e.css("display")) {
      if(e.css("display") == "none") {
        e.css("display", "hidden").fadeIn(fadeTime / 4);
        e.promise().done(function() {
          self.center(self.modalTitle, self.modal);
        });
      } else {
        e.fadeOut(fadeTime);
        self.modalTitle.css("margin-left", 0);
      }
    } 
  };*/

  // Toggle the visibility of one or more elements from a button click
  this.assignToggle = function(button, element) {
    var self = this;
    button.click(function(e) {
      e.stopPropagation();
      if (element.css("display") == "none") {
        if (button.hasClass("subhead")) {
          button.siblings(".subgroup").hide();
        }
        if (button.hasClass("subSubhead")) {
          button.siblings(".subSubgroup").hide();
        }
        element.css("display", "hidden").fadeIn(100);
      } else {
        element.fadeOut(100);
      }
    });
  }; 

  // centers the position of a element to its parent
  // * expects jQuery elements
  this.center = function (element, parent) {
    var self = this;
    var left = (parent.width() - element.width()) / 2;
    element.css("margin-left", left);
  };

  // Init gun control event handlers
  this.init = function() {
    var self = this;

    self.modal.click(function(e) {
      e.stopPropagation();
    });

    document.addEventListener("click", function(e) {
      self.modal.hide();
    });
    
    self.assignLink();

    return self;
  };

  return this.init();
}
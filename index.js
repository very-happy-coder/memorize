var Practice = {
  this.start = false;
  this.index = undefined;
};
Practice.add = function(el, info) {
  this.el = el;
  this.info = info;
};
Practice.correct = function() {};
Practice.incorrect = function() {};
Practice.start = function(form, input) {
  this.start = true;
  while (this.start == true) {
    this.index = Math.floor(Math.random()*this.info.length);
    this.el.innerHTML = this.info[this.index].key;
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if (input.value.toUpperCase() === this.info[this.index].value.toUpperCase()) {
        Practice.correct();
        this.el.innerHTML = this.info[this.index].value;
        window.setTimeout(function() {}, 1000);
      } else {
        Practice.incorrect();
      }
    });
  }
};
Practice.end = function() {
  this.start = false;
};

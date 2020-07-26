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
    form.addEventListener("submit", function() {
      if (input.value.toUpperCase() === this.info[this.index].value.toUpperCase()) {
        Practice.correct();
      } else {
        Practice.incorrect();
      }
    });
  }
};
Practice.end = function() {
  this.start = false;
};

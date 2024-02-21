// ABOUT SECTION DYNAMIC TEXT PART
const text = document.querySelector(".second-text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "software engineer.";
  }, 0);
  setTimeout(() => {
    text.textContent = "music lover.";
  }, 4000);
  setTimeout(() => {
    text.textContent = "basketball player.";
  }, 8000);
  setTimeout(() => {
    text.textContent = "sci-fi addict.";
  }, 12000);
};

textLoad();
setInterval(textLoad, 16000);

// CURSOR SHAPE TO CIRCLE WITH INVERTED INSIDE
document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

// PROJECTS PAGE ACCORDION
var acc = document.getElementsByClassName("project--accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// CLICK ALL OF THE LIST ELEMENTS AREA TO REDIRECT
document.addEventListener("DOMContentLoaded", function () {
  var clickableItems = document.querySelectorAll(".pages-list li");

  clickableItems.forEach(function (item) {
    item.addEventListener("click", function () {
      var link = item.querySelector("a");
      if (link) {
        link.click();
      }
    });
  });
});

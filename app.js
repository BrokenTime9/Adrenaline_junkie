// blur and translate animation-------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// text opacity animation----------------------------------
const observerOpacity = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("opacity1");
    } else {
      entry.target.classList.remove("opacity1");
    }
  });
});

const opacityElements = document.querySelectorAll(".opacity0");
opacityElements.forEach((el) => observerOpacity.observe(el));

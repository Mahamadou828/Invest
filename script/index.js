window.onload = function () {
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function () {
      const elt = document.querySelector(".responsive-navbar");
      elt.classList.remove("dispear");
      elt.classList.add("appear");
      elt.animate(
        [
          {
            opacity: 1,
          },
        ],
        {
          duration: 300,
        }
      );
      window.setTimeout(function () {
        elt.style.opacity = 1;
      }, 300);
    });

  document
    .querySelector(".navbar-close")
    .addEventListener("click", function () {
      const elt = document.querySelector(".responsive-navbar");
      elt.classList.remove("appear");
      elt.animate(
        [
          {
            opacity: 0,
          },
        ],
        {
          duration: 300,
        }
      );
      window.setTimeout(function () {
        elt.style.opacity = null;
        elt.classList.add("dispear");
      }, 300);
    });
};

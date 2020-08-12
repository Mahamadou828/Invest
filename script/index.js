/**
 * @param {HTMLElement} elt
 */
function AnimateOpoacity(elt) {
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
}

window.onload = function () {
  // $(
  //   ".navbar a:not('.dropdownSelect'), .text-center-remote , .button-link , .portfolio"
  // ).on("click", function (event) {
  //   event.preventDefault();
  //   const hash = this.hash;

  //   $("body,html").animate(
  //     { scrollTop: $(hash).offset().top },
  //     900,
  //     function () {
  //       window.location.hash = hash;
  //     }
  //   );
  // });

  let position = window.scrollY;
  document
    .querySelector(".navbar-toggler")
    .addEventListener("click", function () {
      const elt = document.querySelector(".responsive-navbar");
      elt.classList.remove("dispear");
      elt.classList.add("appear");
      AnimateOpoacity(elt);
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

  window.addEventListener("scroll", function () {
    const elt = document.querySelector(".navbar");
    let toTop = false;
    const scrollPosition = window.scrollY;
    if (position > scrollPosition && scrollPosition > 10) {
      elt.classList.add("fixed");
      AnimateOpoacity(elt);
      window.setTimeout(function () {
        elt.style.opacity = 1;
      }, 300);
    } else if (scrollPosition <= 20) {
      elt.classList.remove("fixed");
    } else {
      toTop = false;
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
        elt.classList.remove("fixed");
      }, 300);
    }
    position = scrollPosition;
  });
};

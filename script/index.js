/**
 * Animate The Opacity Of An element
 * @param {HTMLElement} elt
 * @returns {void}
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

/**
 * Function For Removing The Navbar
 * @returns {void}
 */
function RemoveNavbar() {
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
    elt.classList.add("dispear");
    elt.style.opacity = null;
  }, 250);
}

let position = window.scrollY;
const NavLink = document.querySelectorAll(".scroll-link");

NavLink.forEach(function (item) {
  item.addEventListener("click", function (e) {
    const Navbar = document.querySelector(".appear");
    if (Navbar) {
      RemoveNavbar();
    }
    const hash = this.hash;
    if (hash.length > 0) {
      e.preventDefault();
      document.querySelector(hash).scrollIntoView({ behavior: "smooth" });
    }
  });
});

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

document.querySelector(".navbar-close").addEventListener("click", function () {
  RemoveNavbar();
});

window.addEventListener("scroll", function () {
  const elt = document.querySelector(".navbar");
  let toTop = false;
  const scrollPosition = window.scrollY;
  if (position > scrollPosition && scrollPosition > 10) {
    if (!toTop) {
      toTop = true;
      elt.classList.add("fixed");
      AnimateOpoacity(elt);
      window.setTimeout(function () {
        elt.style.opacity = 1;
      }, 300);
    }
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

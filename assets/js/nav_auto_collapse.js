document
.querySelectorAll(".collapse .nav-link")
.forEach((link) => {
  link.addEventListener("click", function (e) {
    let section = document.querySelector(e.target.getAttribute("href"));
    if (section) {
      e.preventDefault(); // Prevent default anchor click behaviour //
      let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
      window.scroll({
        top: section.offsetTop - navbarHeight, // Adjust for navbar height //
        behavior: "smooth",
      });
      document
      .querySelector(".collapse")
      .classList.remove("show"); // Collapse navbar //
    }
  })
})
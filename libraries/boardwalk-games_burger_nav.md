# Code Institute burger icon navigation menu

One of the [Code Institute](https://codeinstitute.net) walkthrough projects, [Boardwalk Games](https://github.com/stillprocrastinating/UDP5WA4CF-TU_boardwalk_games), demonstrates the building of a collapsible navigation menu using [Bootstrap](https://getbootstrap.com) industry standard burger icon and custom automatic navigation menu collapse JavaScript.

```html
<body class="d-flex flex-column min-vh-100">
    <!-- Navigation -->
     <nav id="navbar" class="navbar navbar-expand-lg fixed-top" data-bs-theme="dark">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="assets/images/logo-sm-white.png" alt="Boardwalk Games logo" class="logo">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#services">
                            Services
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#events">
                            Events
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="game-library.html">
                            Games
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">
                            Contact
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="booking.html" class="btn custom-button-filled ms-lg-3">
                            Book now
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</body>
```

```js
document.querySelectorAll(".narbar-collapse .nav-link").forEach(
    (link) => { link.addEventListener(
        "click",
        function (e) { let section = document.querySelector(e.target.getAttribute("href"));
        if (section) { e.preventDefault();
        // Prevent default anchor click behaviour let navbarHeight = document.querySelector(".navbar-toggler").offsetHeight;
        window.scroll(
            { top: section.offsetTop - navbarHeight,
            // Adjust for navbar height behavior: "smooth",
            }
        );
        document.querySelector(".navbar-collapse").classList.remove("show");
        // Collapse navbar } }
    )}
)
```


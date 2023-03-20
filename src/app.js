$(()=>{
    $("#header").html(`<nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Oracles</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="index.html"
              >Dice roll</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="mythic.html"
              >Mythic</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="muse.html"
              >Muse</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="ironsworn.html"
              >Ironsworn</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>`);
});
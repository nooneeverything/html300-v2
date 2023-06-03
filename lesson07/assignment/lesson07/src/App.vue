<template>
  <div id="app">
    <h1 class="text-center text-capitalize m-5"> Law Offices of Yema Measho </h1>
      <b-nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav p-4 align-middle">
                      <li class="nav-item">
                        <!-- Tooltip-->
                        <a class="nav-link active" aria-current="page" href="/" data-toggle="tooltip" data-placement="bottom" title="Back to Homepage">Home</a>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <a class="nav-link" href="team" data-toggle="tooltip" data-placement="bottom" title="See Our Team">Team</a>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <a class="nav-link" href="aboutus" data-toggle="tooltip" data-placement="bottom" title="Learn More About Our Firm"f>About Us</a>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <a class="nav-link" href="contact"  data-toggle="tooltip" data-placement="bottom" title="Contact Information">Contact</a>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <a class="nav-link" href="#" data-toggle="tooltip" data-placement="bottom" title="Unavaiable">Location</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </b-nav>
              
    <router-view> </router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Times New Roman", Times, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

/*Style NavBar*/
.routerlink{
  color: rgb(255, 255, 255)
}

.dropdown{
  color: rgb(0, 0, 0)
}



</style>

<template>
  <div id="app">
    <h1 class="text-center text-capitalize m-5"> Law Offices of Yema Measho </h1>
      <b-nav class="navbar navbar-expand-lg navbar-light" style="background-color: #e3f2fd;">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <b-button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                  </b-button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav p-4 align-middle">
                      <li class="nav-item">
                        <!-- Tooltip-->
                        <router-link class="nav-link" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to Homepage">Home</router-link>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <router-link class="nav-link" to="/team" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See Our Team">Team</router-link>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <router-link class="nav-link" to="/aboutus" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Learn More About Our Firm">About Us</router-link>
                      </li>
                      <!-- Tooltip -->
                      <li class="nav-item">
                        <router-link class="nav-link" to="/contact" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact Informattion"> Contact</router-link>
                      </li>
                      <!-- Tooltip -->  
                      <li class="nav-item">
                        <router-link class="nav-link" to="/#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Unavaiable">Locaion</router-link>
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

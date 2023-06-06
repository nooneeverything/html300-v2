<template>
  <div id="app">

  <div>
  <b-navbar toggleable="lg" type="light" variant="info">  
    <h1 class="text-center text-capitalize m-5"> Law Offices of Yema Measho </h1>
    <b-navbar-brand><router-link class="nav-link" to="/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Back to Homepage">Home</router-link></b-navbar-brand>
    <b-navbar-brand><router-link class="nav-link" to="/team" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See Our Team">Team</router-link></b-navbar-brand>
    <b-navbar-brand><router-link class="nav-link" to="/aboutus" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Learn More About Our Firm">About Us</router-link></b-navbar-brand>
    <b-navbar-brand><router-link class="nav-link" to="/contact" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Contact Informattion"> Contact</router-link></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">  
        <!--<b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
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

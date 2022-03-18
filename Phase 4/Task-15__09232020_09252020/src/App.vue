<template>
  <div id="app">
    <div class="container px-0">
      <!--========== NAV BAR ==========-->
      <nav class="navbar navbar-expand-md">
        <a class="navbar-brand px-3" href="#"><img src="@/assets/images/logo.png" alt="logo" class="logo"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#"><router-link to="/" class="text-secondary px-2">Home</router-link><span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle text-secondary px-2" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                About 
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#"><router-link to="/about" class="text-dark">About A</router-link></a>
                <a class="dropdown-item" href="#"><router-link to="/about/team" class="text-dark">Team</router-link></a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/contact" class="text-secondary px-2">Contact</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/dashboard" class="text-secondary px-2">Dashboard</router-link></a>
            </li>
          </ul>
        </div>
      </nav>
      <!--========== END NAV BAR ==========-->
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
* {
  font-family: 'Montserrat', sans-serif
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  width: 50px;
}
.navbar {
  background: #f1f1f1;
}
</style>>
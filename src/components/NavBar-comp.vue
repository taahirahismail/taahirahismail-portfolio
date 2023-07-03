<template>
    <nav class="navbar navbar-expand-lg navbar-light brown-bg">
  <div class="container-fluid">
    <a class="navbar-brand px-3" href="#">
        <img src="https://i.postimg.cc/GtVn5Fvb/another-logo.jpg" alt="taahirah-logo" style="width: 17%; border-radius: 50%;">
    </a>
    <button class="navbar-toggler light-bg" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link light-text">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link light-text">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/resume" class="nav-link light-text">Resum&eacute;</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link light-text">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials" class="nav-link light-text">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact" class="nav-link light-text">Contact Me</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.router-link-active {
    color: #E98580 !important;
}
.nav-link:hover {
    color: #E98580 !important;
}

.light-bg {
    background-color: #FDD2BF
}
.brown-bg {
    background-color: #492F10;
}

.light-text {
    color: #FDD2BF;
}    
</style>
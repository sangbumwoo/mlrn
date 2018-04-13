<template>
  <div id="app">


    <div id="nav" class="w3-light-gray">
      <router-link to="/">/</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<style>
@import "../node_modules/slick-carousel/slick/slick.css";
@import "../node_modules/slick-carousel/slick/slick-theme.css";
@import "../node_modules/w3-css/3/w3.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

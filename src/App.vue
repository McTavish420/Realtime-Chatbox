<template>
  <div id="app">
    <router-view />
    <footer class="navbar-default navbar-bottom navbar-dark bg-dark fixed-bottom">
        <div class="container-fluid">
           <p class="text-center nav-bar mb-0">Checkout repository at <a href="https://github.com/McTavish420/chatbox" target="_blank">
             https://github.com/McTavish420/chatbox
        </a></p>
       </div>
   </footer>

  </div>
</template>

<style>
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
footer {
  color: white;
}
</style>

<template>
  <div class="welcome" v-if="enter">
    <button @click="enterSite">Enter</button>
  </div>
  <div class="main" v-else>
  <header>
    <div class="navigation">
      <h2 class="name">Barrett Cahalen</h2>
      <div class="menu">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contactme">Contact Me</router-link>
      </div>
    </div>
  </header>
  <div>
    <RouterView />
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      enter : true
    }
  }, 
  methods: {
    enterSite() {
      this.enter = false;
    }
  }
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');

.welcome{
  background : black;
  height: 100vh;
  width: 100vw;
  
}

html, body{
  overflow-x: hidden;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

header{
  background-color: #7d0b0b;
}

.navigation{
  display: flex;
  margin: 5px 15px 5px 15px;
  justify-content: space-between;
  align-items: center;
}

.menu{
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
}

h2{
  color: wheat;
  font-family: "Lora", serif;
}

a {
  color: wheat;
  text-decoration: none;
  font-size: larger;
  font-family: "Lora", serif;
}

a:hover{
  text-decoration: underline solid;
  color: white;
}
</style>

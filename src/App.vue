<template>
  <scrollButton />
  <!-- <Transition>
    <div class="welcome" v-if="enter">
    <h1 class="welcomeMessage">Welcome To My Portfolio</h1>
    <button class="enter" @click="enter = !enter">Enter</button>
  </div>
  </Transition> -->
  <div class="phone">
      <h1 class="phoneWords"><fa :icon="['fas', 'triangle-exclamation']" /> Coming Soon <fa :icon="['fas', 'triangle-exclamation']" /> <br> Barrett's Portfolio for Phone</h1>
    </div>
    <div class="tablet">
      <h1 class="tabletWords"> <fa :icon="['fas', 'triangle-exclamation']" /> Coming Soon <fa :icon="['fas', 'triangle-exclamation']" /> <br> Barrett's Portfolio for Tablet/IPad </h1>
    </div>
  <div id="top">
    <header>
      <div class="navigation">
        <router-link to="/" class="name">Barrett Cahalen</router-link>
        <nav class="menu">
          <router-link to="/" class="routing">Home</router-link>
          <router-link to="/projects" class="routing">Projects</router-link>
          <router-link to="/contactme" class="routing">Contact Me</router-link>
          <a role="button" href="../BarrettCahalenResume.pdf" download="BarrettCahalenResume.pdf" class="routing"><fa :icon="['fas', 'download']" /></a>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
      <div class="link">
      <a class="linkName" href="https://www.linkedin.com/in/barrett-cahalen/" target="_blank">LinkedIn<fa :icon="['fab', 'linkedin']" class="linkedIn"/></a>
      <a class="linkName" href="https://github.com/bpcahalen" target="_blank">GitHub<fa :icon="['fab', 'github']" /></a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import scrollButton from "../src/components/scrollButton.vue";
</script>

<script>
import resume from "../public/BarrettCahalenResume.pdf";
import { hydrateOnMediaQuery } from "vue";

export default {
  data() {
    return {
      // enter: true
      showButton: false,
      screen: "main"
    }
  }
  
}
</script>


<style>

@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lora:ital,wght@1,500&display=swap');



.v-enter-active {
  animation: bounce-in 0.5s;
}
.v-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}


/* .welcome {
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
} */

/* .enter{
  animation: transitionOut 2s;
} */

@keyframes transitionOut {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-100%);
  }
}

.enter {
  color: white;
  background-color: black;
  font-size: 250%;
  font-family: "Lora", serif;
  border: none;
}

.enter:hover {
  text-decoration: underline;
  cursor: pointer;
}

.welcomeMessage {
  overflow: hidden;
  white-space: nowrap;
  border-right: .15px solid white;
  cursor: default;
  color: wheat;
  font-size: 800%;
  font-family: "Dancing Script", cursive;
  text-align: center;
  margin-bottom: 30px;
  animation:
    typing 3.5s steps(40, end),
    blink-caret .75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0
  }

  to {
    width: 90%
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent
  }

  50% {
    border-color: white;
  }
}

html,
body {
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
  margin: 0;
  /* height: 100vh; */
  width: 100vw;
}

header {
  margin: 0;
  background-color: navy;
  border-bottom: 	#505050 6px solid;
  height: 60px;
}

.navigation {
  display: flex;
  margin: 0 15px 0 15px;
  justify-content: space-between;
  align-items: center;
}

.menu {
  display: flex;
  width: 40%;
  justify-content: space-around;
  align-items: center;
}

.name {
  color: white;
  font-family: "Lora", serif;
  cursor: pointer;
  text-decoration: none;
  font-size: 24px;
  margin: 19.92px 0;
}

.routing {
  color: white;
  text-decoration: none;
  font-size: larger;
  font-family: "Lora", serif;
}

.routing:hover{
  text-decoration: underline solid;
  color: wheat;
}

footer{
  height: 100%;
  margin: 0;
  background-color: navy;
  border-top: 	#505050 6px solid;
  padding: 10px 0px 10px 0px;
}

.link {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.linkName{
  cursor: pointer;
  width: 95px;
  color: white;
  text-decoration: none;
  font-size: larger;
  font-family: "Lora", serif;
  display: flex; 
  justify-content: space-evenly;
  align-items: center;
}

.resumeButton{
  border: none;
  background-color: navy;
  color: white;
  text-decoration: none;
  font-size: large;
  font-family: "Lora", serif;
  cursor: pointer;
}

.linkName:hover{
  text-decoration: underline solid;
  color: wheat;
}

.linkedIn{
  margin: 0 0 0 4px;
}

@media only screen and (max-width: 768px) {
    #top, .tablet{
      display: none;
   }

   .phone{
    background-image: url("../src/images/under-construction.jpg");
    color: white;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .phoneWords{
    width: 100vw;
    color: black;
    text-align: center;
    background-color: gold;
    padding: 40px;
   }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    #top, .phone{
      display: none;
   }

   .tablet{
    background-image: url("../src/images/under-construction.jpg");
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .tabletWords{
    width: 100vw;
    color: black;
    text-align: center;
    background-color: gold;
    padding: 40px;
   }
}

  @media only screen and (min-width: 1025px){
    .phone, .tablet{
      display: none;
    }
  }

</style>

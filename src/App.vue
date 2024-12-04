<template>
  <div class="welcome" v-if="enter">
    <h1 class="welcomeMessage">Welcome To My Portfolio</h1>
    <button class="enter" @click="enterSite">Enter</button>
  </div>
  <div v-if="!enter">
    <header>
      <div class="navigation">
        <h2 class="name">Barrett Cahalen</h2>
        <nav class="menu">
          <router-link to="/">Home</router-link>
          <!-- <router-link to="/about">About</router-link> -->
          <router-link to="/projects">Projects</router-link>
          <router-link to="/contactme">Contact Me</router-link>
          <a href="../../public/Barrett Cahalen Resume.pdf" download>
                <button class="resumeButton">Resume</button>
            </a>
        </nav>
      </div>
    </header>
    <RouterView />
    <footer>
      <a class="link">LinkedIn</a>
      <a class="link">GitHub</a>

    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enter: true
    }
  },
  methods: {
    enterSite() {
      if (this.enter) {
        this.enter = false;
      } else {
        this.enter = true;
      }
    }
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Lora:ital,wght@1,500&display=swap');

.welcome {
  background: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}

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
  scroll-behavior: smooth;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

header {
  margin: 0;
  background-color: #7d0b0b;
  border-bottom: wheat 4px solid;
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
  color: wheat;
  font-family: "Lora", serif;
  cursor: default;
}

a {
  color: wheat;
  text-decoration: none;
  font-size: larger;
  font-family: "Lora", serif;
}

a:hover {
  text-decoration: underline solid;
  color: white;
}

footer{
  margin: 0;
  background-color: #7d0b0b;
  border-top: wheat 4px solid;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px 0px 10px 0px;
}

.link {
  cursor: pointer;
}

.resumeButton{
  border: none;
  background-color: #7d0b0b;
  color: wheat;
  text-decoration: none;
  font-size: large;
  font-family: "Lora", serif;
  cursor: pointer;
}

.resumeButton:hover{
  text-decoration: underline solid;
  color: white;
}
</style>

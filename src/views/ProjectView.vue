<template>
    <div class="project">
        <h1 class="projectTitle">Projects</h1>
        <h2 class="projectWelcome">Welcome to my projects page!</h2>
        <h3 class="projectWelcome2">Here you can see a few examples of projects I've created or co-created along with
            the use of languages or frameworks such as: <br> Java, SQL, HTML, CSS, JS, Spring, and Vue.js.</h3>
            <div class="quickAccess">
                <a href="#1" id="project-1" class="jump">Frontend Project</a>
                <a href="#2" id="project-2" class="jump">Backend Project</a>
                <a href="#3" id="project-3" class="jump">Fullstack Project</a>
            </div>
        <div>
            <project :projects="projects"/>
        </div>

    </div>
</template>

<script>

import project from '../components/ProjectComponent.vue';
import image1 from '../images/playbillMemoryGame.png';
import image2 from '../images/tenMo.png';
import image3 from '../images/worldBytes.png';

export default {
    components: {
        project
    },
    data(){
        return {
            projects: [
                {
                title: "Memory Game",
                source: image1,
                description: "Created a front end memory game that utilizes JavaScript, FetchAPI, andFisher-Yates shuffling method. The application is able to keep score, lock out when cards match, and even allow for an extra hard challenge with hardcore mode.", 
                htmlUrl: "https://playbillmemory.netlify.app",
                id: 1 
                },
                {
                title: "TenMo Money Transfer System",
                source: image2,
                description: "Co-created a command line and RESTful API server for a money transfer program using SQL, JDBC framework, and HTTP protocol. Capabilities include user registration, login, money transfer, transfer tracking, and logout.", 
                htmlUrl: "https://github.com/bpcahalen/TEnmo-Service",
                id: 2
                },
                {
                title: "WorldBytes: Meal Planning Site",
                source: image3,
                description: "Built within 2 weeks using Java, JDBC, RESTful API design, and Vue.js. Features include user registration, login, recipe finding, and personal account management.", 
                htmlUrl: "https://playbillmemory.netlify.app",
                id: 3
                }
            ]
        }
    }
}

</script>

<style>

.project {
    height: 100%;
    padding: 20px 0 40px 0;
    background-image: url("../images/tan3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    cursor: default;
    color: black;
}

.projectTitle {
    text-align: center;
    font-family: "Lora", serif;
    font-size: 500%;
    margin-bottom: 15px;
    text-decoration: underline;
    color: black;
}

.projectWelcome {
    text-align: center;
    font-family: "Lora", serif;
    font-weight: bold;
}

.projectWelcome2 {
    text-align: center;
    font-family: "Lora", serif;
    font-size: 100%;
    margin-bottom: 35px;
    font-weight: bold;
}

.quickAccess{
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.jump{
    color: black;
    font-family: "Lora", serif;
}

.jump:hover{
    color: black;
    text-decoration: underline black;
}

/* .projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "project1"
        "project2"
        "project3";
    margin-top: 30px;
} */

/* .project1 {
    grid-area: project1;
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    grid-template-areas:
        "playbill playbillDef";
    align-items: center;
    font-family: "Lora", serif;
}

.project2 {
    grid-area: project2;
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    grid-template-areas:
        "tenmoDef tenmo";
    align-items: center;
    font-family: "Lora", serif;
    margin-left: 20px;
}

.project3 {
    grid-area: project3;
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    grid-template-areas:
        "worldByte worldByteDef";
    align-items: center;
    font-family: "Lora", serif;
}


.projectLink2-1 {
    color: black;
    font-size: small;
    font-family: "Lora", serif;
    font-weight: bold;
    color: white;
}

.projectLink2-1:hover {
    color: wheat;
    text-decoration: underline wheat;
    cursor: pointer;
} */

</style>
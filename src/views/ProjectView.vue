<template>
    <div class="project">
        <h1 class="projectTitle">Projects</h1>
        <h2 class="projectWelcome">Welcome to my projects page!</h2>
        <h3 class="projectWelcome2">Here you can see a few examples of projects I've created or co-created along with
            the use of languages such as: <br> Java, SQL, HTML, CSS, JS, and Vue.</h3>
        <div class="projects">
            <div class="project1">
                <div class="image-link">
                    <img class="playbill" src="../images/playbillMemoryGame.png" />
                    <span class="projectLink">Find it here: <a
                            class="projectLink2" href="https://playbillmemory.netlify.app" target="_blank">https://playbillmemory.netlify.app</a></span>
                </div>
                <div class="playbillDef">
                    <h4>Memory Game</h4>
                    <p>Created a front end memory game that utilizes JavaScript, FetchAPI, andFisher-Yates shuffling
                        method. The application is able to keep score, lock out when cards match, and even allow for an
                        extra hard challenge with hardcore mode.</p>
                </div>
            </div>
            <div class="project2">
                <div class="tenmoDef">
                    <h4>TenMo Money Transfer System</h4>
                    <p>Co-created a command line and RESTful API server for a money transfer program using SQL, JDBC
                        framework, and HTTP protocol. Capabilities include user registration, login, money transfer,
                        transfer tracking, and logout.</p>
                </div>
                <div class="image-link">
                    <img class="tenmo" src="../images/tenMo.png" />
                    <span class="projectLink">Find it here: <a
                            class="projectLink2-1" href="https://github.com/bpcahalen/TEnmo-Service" target="_blank">https://github.com/bpcahalen/TEnmo-Service</a></span>
                </div>
            </div>
            <div class="project3">
                <div class="image-link">
                    <img class="worldByte" src="../images/worldBytes.png" />
                    <span class="projectLink">Find it here: <a
                            class="projectLink2" target="_blank">https://playbillmemory.netlify.app</a></span>
                </div>
                <div class="worldByteDef">
                    <h4>WorldBytes: Meal Planning Site</h4>
                    <p> Built within 2 weeks using Java, JDBC, RESTful API design, and Vue.js. Features include user
                        registration, login, recipe finding, and personal account management.</p>
                </div>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style>
.project {
    height: 100%;
    padding: 20px 0 40px 0;
    background-color: black;
    cursor: default;
    color: white;
}

.projectTitle {
    text-align: center;
    font-family: "Lora", serif;
    font-size: 500%;
    margin-bottom: 15px;
    text-decoration: underline;
    color: white;
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
    margin-bottom: 50px;
    font-weight: bold;
}

.projects {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
        "project1"
        "project2"
        "project3";
    margin-top: 30px;
}

.project1 {
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

.image-link {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projectLink {
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
    color: white;
}

.projectLink2 {
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
    color: white;
}

.projectLink2-1 {
    color: black;
    font-size: small;
    font-family: "Lora", serif;
    font-weight: bold;
    color: white;
}

.projectLink2:hover {
    color: wheat;
    text-decoration: underline wheat;
    cursor: pointer;
}

.projectLink2-1:hover {
    color: wheat;
    text-decoration: underline wheat;
    cursor: pointer;
}

.playbill {
    grid-area: playbill;
    width: 400px;
    height: 325px;
    margin: 5px;
}

.playbillDef {
    grid-area: playbillDef;
    font-size: 135%;
}

.tenmo {
    grid-area: tenmo;
    width: 400px;
    height: 325px;
    margin: 5px;
}

.tenmoDef {
    grid-area: tenmoDef;
    font-size: 135%;
}


.worldByte {
    width: 400px;
    height: 325px;
    grid-area: worldByte;
    margin: 5px;
}

.worldByteDef {
    grid-area: worldByteDef;
    font-size: 135%;
}
</style>
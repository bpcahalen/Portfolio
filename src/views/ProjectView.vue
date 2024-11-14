<template>
<div class="project">
    <h1 class="projectTitle">Projects</h1>
    <p class="projectWelcome">Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti natoque vestibulum aliquet inceptos cras class taciti. Egestas platea in pulvinar phasellus turpis?</p>
    <div class="projects">
        <div class="project1">
            <div class="image-link">
            <img class="playbill" src="../images/playbillMemoryGame.png"/>
            <span class="projectLink">Find it here: <a class="projectLink2">https://playbillmemory.netlify.app</a></span>
            </div>
            <p class="playbillDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
        </div>
        <div class="project2">
            <p class="tenmoDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
            <div class="image-link">
                <img class="tenmo" src="../images/tenMo.png"/>
                <span class="projectLink">Find it here: <a class="projectLink2">https://playbillmemory.netlify.app</a></span>
            </div>
        </div>
        <div class="project3">
            <div class="image-link">
            <img class="worldByte" src="../images/worldBytes.png"/>
            <span class="projectLink">Find it here: <a class="projectLink2">https://playbillmemory.netlify.app</a></span>
            </div>
            <p class="worldByteDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
            
        </div>
    </div>
   
</div>
</template>

<script>

</script>

<style>
.project{
    height: 100%;
    padding: 20px 0 40px 0;
    /* background-color: black; */
    cursor: default;
}

.projectTitle{
    text-align: center;
    font-family: "Lora", serif;
    font-size: 500%;
}

.projectWelcome{
    text-align: center;
    font-family: "Lora", serif;
    
}

.projects{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "project1"
    "project2"
    "project3";
     margin-top: 30px;
}

.project1{
    grid-area: project1;
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    grid-template-areas: 
    "playbill playbillDef";
    align-items: center;
    font-family: "Lora", serif;
}

.project2{
    grid-area: project2;
    display: grid;
    grid-template-columns: 1.75fr 1fr;
    grid-template-areas: 
    "tenmoDef tenmo";
    align-items: center;
    font-family: "Lora", serif;
    margin-left: 20px;
}

.project3{
    grid-area: project3;
    display: grid;
    grid-template-columns: 1fr 1.75fr;
    grid-template-areas: 
    "worldByte worldByteDef";
    align-items: center;
    font-family: "Lora", serif;
}

.image-link{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projectLink{
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
}

.projectLink2{
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
}

.projectLink2:hover{
    color: black;
    text-decoration: underline;
    cursor: pointer;
}

.playbill{
    grid-area: playbill;
    width: 400px;
    height: 325px;
    margin: 5px;
}

.playbillDef{
    grid-area: playbillDef;
    font-size: 135%;
}

.tenmo{
    grid-area: tenmo;
    width: 400px;
    height: 325px;
    margin: 5px;
}

.tenmoDef{
    grid-area: tenmoDef;
    font-size: 135%;
}


.worldByte{
    width: 400px;
    height: 325px;
    grid-area: worldByte;
    margin: 5px;
}

.worldByteDef{
    grid-area: worldByteDef;
    font-size: 135%;
}


</style>
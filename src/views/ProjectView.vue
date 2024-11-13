<template>
<div class="project">
    <h1 class="projectTitle">Projects</h1>
    <p class="projectWelcome">Lorem ipsum odor amet, consectetuer adipiscing elit. Potenti natoque vestibulum aliquet inceptos cras class taciti. Egestas platea in pulvinar phasellus turpis?</p>
    <div class="projects">
        <div class="project1">
            <img class="playbill" src="../images/worldBytes.png"><a>https://playbillmemory.netlify.app</a></img>
            <p class="playbillDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
        </div>
        <div class="project2">
            <p class="tenmoDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
            <img class="tenmo" src="../images/worldBytes.png"></img>
        </div>
        <div class="project3">
            <img class="worldByte" src="../images/worldBytes.png">WorldBytes Recipes Page</img>
            <p class="worldByteDef">Lorem ipsum odor amet, consectetuer adipiscing elit. Finibus iaculis sapien; libero tortor id imperdiet penatibus eleifend. Nascetur libero neque etiam, tempor per rhoncus. Est pharetra penatibus rutrum bibendum felis; bibendum eleifend. Feugiat efficitur parturient fusce magna; eros quisque. Suspendisse himenaeos adipiscing non felis suspendisse varius interdum. Neque sollicitudin tristique integer, lacinia non tincidunt. Augue finibus metus tempus mus accumsan cursus.</p>
            <a></a>
        </div>
    </div>
    
</div>
</template>

<script>

</script>

<style>
.project,template{
    height:100vh;
}

.projectTitle{
    text-align: center;
}

.projectWelcome{
    text-align: center;
}

.projects{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas: 
    "project1"
    "project2"
    "project3"
     
}

.project1{
    grid-area: project1;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project2{
    grid-area: project2;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.project3{
    grid-area: project3;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.playbill{
    
}

.tenmo{
}


img{
    width: 200px;
    height: 200px;
    grid-area: worldByte;
}


</style>
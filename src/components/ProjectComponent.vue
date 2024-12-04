<template>
    <div class="projects" v-for="project in projects" :key="project.id">
        <a :id="project.id"></a>
        <h4 class="projectName">{{project.title}}</h4>
        <div class="image-link">
                    <img class="image" :src="project.source" />
                </div>
                <div class="definition">
                    <p>{{project.description}}</p>
                </div>
                <span class="projectLink">Find it here: <a
                    class="projectLink2" :href="project.htmlUrl" target="_blank">{{ project.htmlUrl }}</a></span>
    </div>
</template>

<script>

export default{
    props: ['projects']
}

</script>

<style>

.projects{
    color: black;
    margin: 40px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Lora", serif;
}

.projectName{
    text-decoration: underline solid 3px;
    font-size: 50px;
    margin: 15px 0;
}

.image-link {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.image{
    width: 400px;
    height: 325px;
    margin: 5px;
}

.projectLink {
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
}

.projectLink2 {
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
}

.projectLink2:hover {
    color: black;
    text-decoration: underline black;
    cursor: pointer;
}

.definition{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 135%;
}
</style>
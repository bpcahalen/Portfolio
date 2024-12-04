<template>
    <div class="projects" v-for="project in projects" :key="project.id">
        <a :id="project.id"></a>
        <h4 class="projectName">{{project.title}}</h4>
        <div class="image-link">
                    <img class="image" :src="project.source" />
                </div>
                <div class="definition">
                    <p class="description">{{project.description}}</p>
                    <p class="keyFeatures">Key Features: </p>
                    <table>
                        <tr>
                            <td>{{ project.data1 }}</td>
                            <td>
                                <ul>
                                    <li>{{ project.data2 }}</li>
                                    <li>{{ project.data3 }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>{{ project.data4 }}</td>
                            <td>
                                <ul>
                                    <li>{{ project.data5 }}</li>
                                    <li>{{ project.data6 }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>{{ project.data7 }}</td>
                            <td>
                                <ul>
                                    <li>{{ project.data8 }}</li>
                                    <li>{{ project.data9 }}</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>{{ project.data10 }}</td>
                            <td>
                                <ul>
                                    <li>{{ project.data11 }}</li>
                                    <li>{{ project.data12 }}</li>
                                </ul>
                            </td>
                        </tr>
                    </table>
                    <p class="demonstrates">{{ project.demonstrates }}</p>
                </div>
                <span class="projectLink"> {{ project.find }} <a
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
    margin: 0;
}

.projectLink2 {
    color: black;
    font-size: medium;
    font-family: "Lora", serif;
    font-weight: bold;
    margin: 0;
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
    margin-bottom: 0;
    font-size: 135%;
}

.keyFeatures{
    font-weight: bolder;
    font-size: larger;
}

.description, .demonstrates{
    text-align: center;
}
</style>
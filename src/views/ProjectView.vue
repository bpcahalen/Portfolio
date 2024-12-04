<template>
    <div class="project">
        <h1 class="projectTitle">Projects</h1>
        <h2 class="projectWelcome">Welcome to my projects page!</h2>
        <h3 class="projectWelcome2">Here you can see a few examples of projects I've created or co-created along with
            the use of languages or frameworks such as: <br> Java, SQL, HTML, CSS, JS, Spring Boot, RESTful API's, and Vue.js.</h3>
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
                description: "This interactive memory card game is a fun and challenging application built using HTML, CSS, and JavaScript, incorporating Fetch API and the Fisher-Yates shuffling method for randomness. The game is designed to test and improve players memory skills while offering an engaging user experience.", 
                data1: "Dynamic Gameplay Mechanics:",
                data2: "Players match pairs of cards to clear the board.",
                data3: "Cards lock in place when matched, ensuring no accidental re-selection.",
                data4: "Score Tracking & Randomized Shuffling:",
                data5: "Keeps track of matches and attempts, allowing players to monitor their progress.",
                data6: "The Fisher-Yates algorithm ensures cards are shuffled randomly each time the game resets, providing a fresh challenge every round.",
                data7: "Challenge Mode:",
                data8: "A unique Extra Hard Mode adds an extra layer of difficulty.",
                data9: "If a player matches a pair within the specified number of attempts, the game resets the attempt counter to zero to allow for further guessing.",
                data10: "Design Highlights:",
                data11: "Clean and intuitive UI with responsive styling for different screen sizes.",
                data12: "Clear visual feedback for card matches and mismatches.",
                demonstrates: "This project showcases strong JavaScript programming, creative problem-solving, and front-end development skills. It demonstrates proficiency in game logic design, user experience optimization, and efficient use of APIs for interactive features.",
                htmlUrl: "https://playbillmemory.netlify.app",
                id: 1 
                },
                {
                title: "TenMo Money Transfer System",
                source: image2,
                description: "This project is a Venmo-like command-line application co-developed using SQL, JDBC Framework, HTTP Protocol, and RESTful APIs. It provides a seamless backend solution for managing peer-to-peer financial transactions with essential features for user registration, secure authentication, and transaction tracking.", 
                data1: "User Management:",
                data2: "Registration: Users can create an account, and their information is securely stored in the database.",
                data3: "Login System: Implements secure login functionality using user-provided credentials for authentication.",
                data4: "Financial Transactions:",
                data5: "Money Transfers & Deposit Functionality: Allows users to transfer funds to other registered accounts and can deposit money into their account to fund future transactions.",
                data6: "Transaction Tracking: Tracks all transfers and stores detailed information in the database, allowing users to view transaction histories and details.",
                data7: "Backend Design:",
                data8: "Built using the JDBC framework for database connectivity, ensuring efficient interaction with the SQL database.",
                data9: "Implements structured and optimized queries for secure data handling and integrity.",
                data10: "Highlights:",
                data11: "Robust and scalable backend architecture designed for reliability and security.",
                data12: "Comprehensive error handling for common transaction and login issues.",
                demonstrates: "This project demonstrates expertise in backend development, database design, RESTful API integration, and implementing secure and efficient financial operations in a real-world scenario.",
                htmlUrl: "https://github.com/bpcahalen/TEnmo-Service",
                id: 2
                },
                {
                title: "WorldBytes: Meal Planning Site",
                source: image3,
                description: "This collaborative full-stack application was developed by a team of four, leveraging a robust tech stack including Java, JDBC, SQL, PostgreSQL, RESTful API design, Axios, and Vue.js. The project provides an intuitive meal-planning solution that integrates external APIs and features a dynamic user interface for an enhanced user experience.", 
                data1: "User Authentication:",
                data2: "Registration: Allows users to create an account and securely store their information.",
                data3: "Login: Enables secure authentication to access personalized features.",
                data4: "Recipe Search and Integration with Personalized Recipe Management:",
                data5: "Spoonacular API Integration & Search Filters: Fetches a wide variety of recipes and can filter them by preparation time, dietary preferences, or general recipe names.",
                data6: "Save or delete recipes from your personal account and get recipe details for any recipe in the entire application",
                data7: "Future Enhancements (In Progress):",
                data8: "Meal Plan Creation: Users will soon be able to create custom meal plans using their saved recipes.",
                data9: "Enhanced Recipe Interaction: Expanding functionality to include additional recipe metrics and meal-planning tools.",
                data10: "Technical Highlights:",
                data11: "Backend: Developed with Java, utilizing JDBC for database connectivity and PostgreSQL for data management. RESTful API design ensures smooth communication between the backend and frontend.",
                data12: "Frontend: Built with Vue.js for a dynamic and responsive user interface. Axios facilitates efficient API calls.",
                demonstrates: "This project demonstrates strong teamwork and collaboration, as well as proficiency in full-stack development, API integration, and UI/UX design. It showcases a practical application with scalable architecture and room for future growth and features.",
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
<template>
    <div class="contactPage">
        <div class="contact">
        <h1 class="contactMe">Let's Connect!</h1>
        <p class="connectMessage">I’m always seeking exciting opportunities in software development where I can apply my skills and continue growing as a developer. 
            <br>With a passion for problem-solving and a dedication to learning, I’m ready to take on challenges and deliver results.
            <br>
            Feel free to reach out—I’d love to connect and explore how we can work together and what we might be able to build together!
        </p>
            <div class="formBody">
                <div class="headshot">
                <img src="../images/businessPhoto.jpg" class="headshot2">
            </div>
                <div v-if="submitted == 'sent'">
                    <p class="respond">Thank you for your message! <br>You Can Expect A Response Within 24 Hours!</p>
                </div>
                <div v-if="submitted == 'loading'" class="loading">
                    <fa class="spinner" :icon="['fas', 'rotate']" />
                </div>
                <div class="error" v-if="error">Sorry, there was an error sending your message. 
                    <br>Please try again in a couple minutes as I'd love to know what you have to say!
                </div>
            <form @submit.prevent="sendEmail" @keypress.enter.prevent="sendEmail" v-if="submitted == 'start'" class="form" ref="form">
                <div class="inputArea">
                <div class="fullName">
                <label for="fullName" class="fullNameLabel">Full Name <fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <input type="text" id="fullName" class="fullNameInput" name="name" required><br>
                </div>
                <div class="email">
                <label for="email" class="emailLabel">Email Address <fa class="asterisk" :icon="['fas', 'asterisk']" /> </label>
                <input type="text" id="email" class="emailInput" name="email" required><br>
                </div>
                <div class="state">
                <label for="state" class="stateLabel">State: </label>
                <select id="state" class="stateSelect" name="state">
                    <option value="nothing"></option>
                    <option value="AB">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                </select><br>
                </div>
                <div class="message">
                <label for="subject" class="messageLabel">Message <fa class="asterisk" :icon="['fas', 'asterisk']" /></label>
                <textarea name="message" id="subject" placeholder="Your Message Here..." required></textarea>
                </div>
                </div>
                <input type="submit" value="Submit" class="formSubmit">
            </form>
            </div>
        </div>
    </div>
</template>

<script>
// import emailService from "../services/emailService";
import emailjs from "@emailjs/browser";

export default{
    data(){
        return{
            submitted: "start",
            error: false
        }
    },
    methods: {
        sendEmail(){
            emailjs
            .sendForm('service_da5p25p', 'template_w550i1f', this.$refs.form, {publicKey:'2mXKjhEHNCkJh7MYv'})
            .then(response => {
                if(response.status === 200){
                    this.submitted = "loading";
                    setTimeout(() => {this.submitted = "sent";}, 1500)
                }
            })
            .catch(response => {
                if(response.status === 400){
                    this.error = true;
                    this.submitted = "";
                }
            })
        }
    }
}

</script>

<style>

.contactPage{
    display: flex;
    justify-content: center;
    background-image: url("../images/tan3.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: "Lora", serif;
}

.contactMe{
    text-align: center;
    margin: 40px 0 20px 0;
    font-size: 50px;;
}

.connectMessage{
    font-family: "Lora", serif;
    text-align: center;
    margin-bottom: 45px;
    font-size: 17px;
    line-height: 30px;
}

.formBody{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 60px;
    padding: 5px;
    border: solid black 2px;
    width: 890px;
    border-radius: 5px;
}

.headshot{
    width: 400px;
    height: 410px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.headshot2 {
    width: 335px;
    height: 385px;
    margin: 0;
    padding: 0;
}

.asterisk{
    color: red;
    height: 7px;
    width: 7px;
    padding-bottom: 10px;
}

.form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 415px;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Lora", serif;
}

.error{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 415px;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Lora", serif;
    font-size: 18px;
    line-height: 35px;
}

.respond, .loading{
    width: 415px;
    height: 357px;
    margin: 0;
    padding: 40px;
    font-family: "Lora", serif;
    text-align: center;
    font-size: 27px;
    line-height: 60px;
    display: flex;
    justify-content: center;
    align-items: center
}

.spinner{
    font-size: 50px;
    color: navy;
    animation: 5s spin linear infinite;
}

@keyframes spin{
    from{transform: rotate(0deg)}
    to {transform: rotate(1000deg)}
}

.fullNameInput, .emailInput{
    width: 375px;
    background-color: white;
    color: black;
    font-family: "Lora", serif;
    border: black 1px solid;
    font-size: 15px;
    padding: 5px 0 5px 5px;
}

.fullNameLabel, .emailLabel{
    font-family: "Lora", serif;
    margin: 0 10px 0 0 ;
    width: 150px;
    padding-bottom: 5px;
}

.messageLabel{
    font-family: "Lora", serif;
    font-size: 16px;
    width: 150px;
}

.stateLabel{
    font-family: "Lora", serif;
    margin: 0 10px 0 0 ;
    width: 40px;
}

.stateSelect{
    font-size: 15px;
    font-family: "Lora", serif;
    padding: 2px 0 2px 2px;
}

.fullName, .email{
    height: 60px;
    width: 375px;
    display: flex;
    flex-direction: column;
}

.email{
    margin: 15px 2px 20px 2px;
}

.fullName{
    margin: 15px 2px 10px 2px;
}

.state{
    margin: 0 0 20px 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.message{
    height: 175px;
}

.formSubmit{
    background-color: white;
    color: navy;
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
    width: 90px;
    height: 25px;
    border-radius: 5px;
    border: solid 1px black;
}

.formSubmit:hover{
    cursor: pointer;
    background-color: navy;
    color: white;
    box-shadow: 3px 3px navy;
}

select{
    background-color: white;
}

textarea{
    background-color: white;
    height: 125px;
    width: 375px;
    margin-top: 8px;
    padding: 8px;
    font-size: 15px;
    resize: none;
}

::placeholder{
    color: black;
}

/* .resume{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.resTitle{
    font-size: 30px;
    margin: 20px 0 20px 0;
}

.resAdjust{
    height: 380px;
    width: 293px;
    border: black solid 3px;
} */
</style>
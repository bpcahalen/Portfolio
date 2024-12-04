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
                <img src="../images/businessPhoto.jpg" class="headshot2">
            <form class="form">
                <div class="fullName">
                <label for="fullName">Full Name: </label>
                <input type="text" id="fullName"><br>
                </div>
                <div class="email">
                <label for="email">Email Address: </label>
                <input type="text" id="email"><br>
                </div>
                <div class="state">
                <label for="state">State: </label>
                <select type="text" id="state">
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
                <label for="subject"></label>
                <textarea name="subject" id="subject" placeholder="Your Message Here..."></textarea>
                <input type="submit" value="Submit" class="formSubmit">
            </form>
            </div>
            <p class="respond">You Can Expect A Response Within 24 Hours!</p>
        </div>

    </div>
</template>

<script>

export default{
    
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
}

.formBody{
    display: flex;
    justify-content: center;
    padding: 20px;
    margin: 20px 60px;
    border: solid black 2px;
    width: 890px;
}

.headshot2 {
    width: 300px;
    height: 350px;
    margin: 0;
    padding: 0;
}

.form{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center ;
    width: 400px;
    margin: 0;
    padding: 0 0 0 125px;
    font-family: "Lora", serif;
}

input{
    height: 22px;
    width: 300px;
    background-color: white;
    color: black;
    font-family: "Lora", serif;
    border: black 1px solid;
    font-size: 15px;
}

label{
    font-family: "Lora", serif;
    padding: 2px;
}

.fullName, .email{
    margin: 2px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.state{
    margin: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 55px;
}

.formSubmit{
    margin-top: 10px;
    width: 90px;
    height: 25px;
}

.formSubmit:hover{
    cursor: pointer;
    background-color: lightgray;
}

select{
    background-color: white;
}

textarea{
    background-color: white;
    height: 125px;
    width: 375px;
}

::placeholder{
    color: black;
}

.respond{
    margin: 25px 0 20px 0;
    text-align: center;
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
<template>
    <div class="contactPage">
        <div class="contact">
        <h1 class="contactMe">Contact Me</h1>
        <form class="form">
            <label for="fullName" class="fullName">Full Name: </label>
            <input type="text" name="fullName" placeholder="Full name..."><br>

            <label for="email" class="email">Email Address: </label>
            <input type="text" name="email" placeholder="example@something.com"><br>

            <label for="state" class="state">State: </label>
            <select type="text" name="state">
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

            <label for="subject">Message: </label>
            <textarea name="subject" id="subject" placeholder="Write something..."></textarea>
        </form>
    </div>
        <!-- <div class="resume">
            <h2 class="resTitle">Resume</h2>
            <img src="../documentPhotos/Barrett_Cahalen_Resume.png" class='resAdjust'>
            <a href="../../public/Barrett Cahalen Resume.pdf" download >
                <button>Download Resume</button>
            </a>
        </div> -->

    </div>
</template>

<script>
</script>

<style>

.contactPage{
    display: flex;
    justify-content: center;
}
.form{
    border: solid black 5px;
    background-color: aquamarine;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 600px;
    padding: 40px;
}

input{
    height: 20px;
    width: 200px;
    background-color: grey;
    color: white;
}

select{
    background-color: grey;
}

textarea{
    background-color: grey;
    height: 100px;
    width: 400px;
}

::placeholder{
    color: white;
}

.contactMe{
    text-align: center;
    margin: 40px 0;
    font-size: 50px;;
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
<template >
  <div class="home">
    <div class="introPart">
      <h1 class="introName">Hi, my name is Barrett Cahalen!</h1>
      <img src="../images/businessPhoto.jpg" class="headshot1">
      <p class="intro"> I want to start by thanking you for visiting my site and I hope you enjoy exploring it as much as I enjoyed creating it. While you're here you'll 
      get to learn all about my journey into the tech world from being a professional dancer. You'll see some projects I've had the pleasure of working on either solo or with a team. 
      And if you truly enjoy all that you see, you can download my resume by clicking the "Resume" button in the top right corner. I think that's about all that I've got to say, so without 
      further ado, I'd like to introduce myself a little more...
      </p>
    </div>
    <div>
      <p class="introPt2">Originally from a small town in Central California, I grew up performing and dancing for as long as I could remember. 
        I eventually went to Oklahoma City University where I attained my Bachelors Degree in Dance Performance. 
      </p>
    </div>
    <div class="certificates">
            <h2>Certifications</h2>
            <div class="certSlide">
                <div class="aws">
                    <h2 class="awsTitle">AWS Certification</h2>
                    <a href="../../public/AWS Certified Cloud Practitioner certificate.pdf" download >
                        <img src="../documentPhotos/AWS_Cert.png" class='awsAdjust'/>
                    </a>
                </div>
                <div class="te">
                    <h2 class="teTitle">Web Development Certification</h2>
                    <a href="../../public/Barrett-Cahalen-graduation-certificate.pdf" download >
                        <img src="../documentPhotos/TE_Cert.png" class='teAdjust'/>
                    </a>
                </div>
                <div class="it">
                    <h2 class="itTitle">Google IT Certification</h2>
                    <a href="../../public/Coursera LHS5B98WGRQG.pdf" download >
                        <img src="../documentPhotos/IT_Cert.png" class='itAdjust'/>
                    </a>
                </div>
            </div>
            <div class="certSlide">
                <div class="aws">
                    <h2 class="awsTitle">AWS Certification</h2>
                    <a href="../../public/AWS Certified Cloud Practitioner certificate.pdf" download >
                        <img src="../documentPhotos/AWS_Cert.png" class='awsAdjust'/>
                    </a>
                </div>
                <div class="te">
                    <h2 class="teTitle">Web Development Certification</h2>
                    <a href="../../public/Barrett-Cahalen-graduation-certificate.pdf" download >
                        <img src="../documentPhotos/TE_Cert.png" class='teAdjust'/>
                    </a>
                </div>
                <div class="it">
                    <h2 class="itTitle">Google IT Certification</h2>
                    <a href="../../public/Coursera LHS5B98WGRQG.pdf" download >
                        <img src="../documentPhotos/IT_Cert.png" class='itAdjust'/>
                    </a>
                </div>
            </div>
        </div>
  </div>
    
</template>

<script>

</script>

<style scoped>

.home{
  background-image: url("../images/tan3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
}

.introPart{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.intro{
  margin: 0;
  padding: 20px;
  font-size: larger;
  font-family: "Lora", serif;
  text-indent: 70px;
}

.introName{
  margin: 0;
  padding: 20px 0 0 0;
  color: black;
  font-family: "Lora", serif;
  font-size: 55px;
}

.headshot1{
  width: 300px;
  height: 300px;
}

@keyframes slide{
    from{
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
}

.certificates{
    white-space: nowrap;
    padding: 20px 0;
}

.certSlide{
    display: inline-flex;
    animation: 20s slide infinite linear;
}

.aws, .te, .it{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.awsTitle, .teTitle, .itTitle{
    font-size: 30px;
    margin: 20px 0 20px 0;
}

.awsAdjust, .teAdjust, .itAdjust{
    height: 200px;
    width: 320px;
    border: black solid 3px;
    margin: 0 100px 0 100px;
}


</style>
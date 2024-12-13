<template >
  <div class="home" >
    <div>
      <h1 class="introName">Hi, my name is Barrett Cahalen!</h1>
      <div class="introPart">
        <img src="../images/businessPhoto2.jpg" class="headshot1">
      <p class="introPt2">
        I'm a software developer with a background in entertainment. As a prior professional dancer, I bring a unique perspective to my work. 
        Years of performing and leading teams as a dance captain have honed my time management, communication, and collaboration skills, along with a deep understanding of the creative process. 
        My passion for problem-solving and a desire to make more of an impact led me to transition into tech, leading me to attend Tech Elevator's intensive 14-week full-stack development program. 
        During my time there, I gained expertise in Java, SQL, RESTful APIs, and modern web technologies like Vue.js. 
        After graduation, I further deepend my technical foundation by earning an AWS Cloud Practitioner certification, expanding my understanding of cloud computing and modern infrastructure.
        I approach every challenge as a puzzle, embracing the dedication and persistence needed to bring all the pieces together seamlessly. 
        Whether it's on the stage or in code, I thrive on delivering results that exceed expectations and reflect my commitment to hard work and precision.
      </p>
    </div>
    <div class="footNote">
      <p class="thankYou"> I want to thank you for visiting my site and I hope you enjoy exploring it as much as I enjoyed creating it.</p>
      <p class="skills">To see my full list of skills, you can download my resume by clikcing the download button in the top right corner of the page.</p>
  </div>
  </div>
    <h2 class="certTitle">Certifications</h2>
    <div class="certificates">
            <div class="certSlide">
                <div class="aws">
                    <h2 class="awsTitle">AWS Certification</h2>
                    <a href="../../AWS Certified Cloud Practitioner certificate.pdf" download >
                        <img src="../documentPhotos/AWS_Cert.png" class='awsAdjust'/>
                    </a>
                </div>
                <div class="te">
                    <h2 class="teTitle">Web Development Certification</h2>
                    <a href="../../Barrett-Cahalen-graduation-certificate.pdf" download >
                        <img src="../documentPhotos/TE_Cert.png" class='teAdjust'/>
                    </a>
                </div>
                <div class="it">
                    <h2 class="itTitle">Google IT Certification</h2>
                    <a href="../../Coursera LHS5B98WGRQG.pdf" download >
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
import AWS from '../../public/AWS Certified Cloud Practitioner certificate.pdf';
import TE from "../../public/Barrett-Cahalen-graduation-certificate.pdf";
import IT from "../../public/Coursera LHS5B98WGRQG.pdf";

</script>

<style scoped>

.home{
  background-image: url("../images/tan3.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  cursor: default;
}

.footNote{
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: larger;
  font-family: "Lora", serif;
}

.thankYou{
 margin: 0;
 font-size: 20px;
}

.skills{
  width: 2000px;
  text-align: center;
  line-height: 25px;
}

.introPt2{
  width: 66%;
  height: 350px;
  margin: 0;
}

.introName{
  margin: 0 0 10px 0;
  padding: 20px 0 0 0;
  color: black;
  font-family: "Lora", serif;
  font-size: 55px;
  text-align: center;
}

.introPart{
  margin: 0;
  padding: 20px 20px 40px 20px;
  font-size: larger;
  font-family: "Lora", serif;
  text-indent: 70px;
  display: flex;
  justify-content: space-evenly;
  line-height: 27px;
}

.headshot1{
  width: 300px;
  height: 350px;
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
    position: relative;
}

/* .certificates::before{
  position: absolute;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0), wheat);
  content: "";
  z-index: 2;
} */

/* .certificates:hover .certSlide{
  animation-play-state: paused;
} */

.certTitle{
  text-align: center;
  margin: 40px 0;
  text-decoration: underline black 3px;
}

.certSlide{
    display: inline-flex;
    animation: 35s slide infinite linear;
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
<template >
  <div class="home">
    <div class="introPart">
      <h1 class="introName">Hi, my name is Barrett Cahalen!</h1>
      <img src="../images/businessPhoto2.jpg" class="headshot1">
      <div class="intoTech">
      <p class="introPt2">
        Originally from California, I grew up being apart of the entertainment industry as a dancer, a passion that eventually led me to earn a Bachelor's degree in Dance Performance from Oklahoma City University. 
        After graduating, I joined Celebrity Cruise Line, where I eventually advanced to the role of dance captain/team lead, allowing me to hone my leadership, communication, and organizational skills in a fast-paced, dynamic environment.

        Following my time with Celebrity Cruises, I decided to relocate to New York City. 
        About a year into my time in the city, I realized I was seeking something more in life and began exploring new career paths. 
        That’s when I stumbled upon Google’s IT Support Specialist Course, which helped ignite my interest in technology. 
        This newfound passion motivated me to attend Tech Elevator's intensive 14-week full-stack development program. 
        Here I learned quintessential programming skills as Java, SQL, HTML, CSS, JS, and much more. 
        After finishing the program I wanted to further expand my skill set and continued learning independently which is when I earned my AWS Cloud Practitioner certification, solidifying my commitment to building a career in tech.
      </p>
    </div>
    <p class="intro"> I want to thank you for visiting my site and I hope you enjoy exploring it as much as I enjoyed creating it. 
        <br>To see my full skills list you can download my resume by clikcing the 'Resume' button at the top of the page.
      </p>
    </div>
    <h2 class="certTitle">Here You Can See All My Certifications From Google, Tech Elevator, and AWS</h2>
    <div class="certificates">
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
  text-align: center;
}

.introName{
  margin: 0 0 10px 0;
  padding: 20px 0 0 0;
  color: black;
  font-family: "Lora", serif;
  font-size: 55px;
}

.intoTech{
  margin: 0;
  padding: 20px 20px 0 20px;
  font-size: larger;
  font-family: "Lora", serif;
  text-indent: 70px;
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

.certificates:hover .certSlide{
  animation-play-state: paused;
}

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
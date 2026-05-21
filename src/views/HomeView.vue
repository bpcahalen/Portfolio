<template >
  <div class="home" >
    <div>
      <h1 class="introName">Hi, my name is <br class="mobile-break"> Barrett Cahalen!</h1>
      <div class="introPart">
        <img src="../images/businessPhoto2.jpg" class="headshot1">
      <p class="introPt2">
        Before I wrote a single line of code, I spent years on professional stages around the world as a dancer. In live performance, there are no retakes. A missed cue or broken prop doesn’t stop the show—you adapt instantly, without the audience ever noticing. That pressure became my training ground.

Eventually, I was leading a team of 20 performers, learning to solve urgent, high-stakes problems under the twin pressures of a ticking clock and the demand for a flawless final product. That experience didn’t just refine me as an artist—it gave me the calm, resilient, user-focused mindset I now apply to software engineering.

Today, I’m a full-stack developer with a performer’s instinct: clear-headed when production breaks, driven by empathy for the people using what I build, and able to turn creative ideas into practical, well-structured systems.

My move from dance to development was fueled by self-directed learning and persistence—a willingness to step into uncertainty and figure things out as I go. Whether I’m leading a team, fixing bugs against a tight deadline, or anticipating what users need next with the same intuition I once used to read a live audience, I do my best work where precision meets flexibility.

If you’re looking for a creative problem-solver who blends technical skill with a human-centered approach, let’s talk.
      </p>
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
    <div class="footNote">
      <p class="thankYou"> I want to thank you for visiting my site and I hope you enjoy exploring it as much as I enjoyed creating it!</p>
      <!-- <p class="skills">To see my full list of skills, you can download my resume by clikcing the download button in the top right corner of the page.</p> -->
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
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: larger;
  font-family: "Lora", serif;
}

.thankYou{
 margin: 0;
 font-size: 25px;
 padding: 40px 0;
 text-decoration: underline;
 font-weight: bolder;
 color: darkgrey;
 -webkit-text-stroke: .5px navy;
}

.skills{
  width: 2000px;
  text-align: center;
  line-height: 25px;
}

.introPt2{
  width: 100%;
  padding: 0 30px;
  margin: 0;
  line-height: 38px;
}

.introName{
  margin: 0 0 10px 0;
  padding: 30px 0;
  color: black;
  font-family: "Lora", serif;
  font-size: 55px;
  text-align: center;
}

.mobile-break{
  display: none;
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
  width: 325px;
  height: 450px;
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
  margin: 30px 0 30px 0;
  padding-top: 20px;
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
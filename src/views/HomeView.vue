<template >
  <div class="home">
    <h1>This is the home page</h1>
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
  /* background-color: black; */
  height:100%;
}

h1{
  margin: 0;
  color: black;
  font-family: "Lora", serif;
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
<template>
    <Transition>
        <a v-if="visible" href="#top" class="buttonScroll">
            <fa :icon="['fas', 'circle-chevron-up']"/>
        </a>
    </Transition>
</template>

<script>
export default{
    created(){
        window.addEventListener('scroll', this.handleScroll);
    },
    unmounted(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    data(){
        return{
            visible: false
        }
    },
    methods: {
        handleScroll(){
            if(window.scrollY > 600){
                this.visible = true;
            } else{
                this.visible = false;
            }
        }
    }
}
</script>

<style scoped>

.v-enter-active,
.v-leave-active{
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to{
    opacity: 0;
}


.buttonScroll{
    position: fixed;
    bottom: 20px;
    right: 40px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 40px;
    color: navy;
    background-color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
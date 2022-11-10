var modal = Vue.createApp({
    el : "#modal",
    components:{

    },
    data() {
        return {
            userId:'',
            userPw:'',
        }
    },
    method : {
        closeModal() {
            alert('sibal');
        }
    }
}).mount('#modal')
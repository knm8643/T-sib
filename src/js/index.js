function sibal(){
    alert('여기가 눌리면 안된다.');
}

var mainLogin = Vue.createApp({
    el: "#mainLogin",
    data() {
        return {
            loging: true,
            deviceType: '',
            userId:'',
            userPw:'',
        }
    },
    methods: {
        login(deviceType) {
            var $this = this;
            if(deviceType == 'app'){
                alert('app 미구현');
                return
            }
            $this.loging = false;
        },
        sendMemberInfo(){
            var $this = this;
            if($this.userId == '' || $this.userId == undefined){
                alert("아이디를 입력해주세요.");
                return
            }
            if($this.userPw == '' || $this.userPw == undefined) {
                alert("비밀번호를 입력해주세요.");
                return
            }
            console.log($this.userId, $this.userPw);
        },
        searchInfoModal(){
            $("#modal").show();

            async function fetchHtmlAsText(url) {
                return await (await fetch(url)).text();
            }

            async function importPage(target) {
                document.querySelector('#' + target).innerHTML = await fetchHtmlAsText('html/' + target + '.html');
            }

            importPage('modal');
        },

        closeModal() {
            alert('상식적으로 이게 작동해야지');
        }
    }
}).mount('#mainLogin')


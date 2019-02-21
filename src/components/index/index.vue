<template>
    <div class="home">
    </div>
</template>
<style lang="scss" scoped type=text/scss>
    .home {
        color: yellowgreen;
        font-weight: bolder;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .bg{
            width: 100px;
            height: 100px;
            background-image: url("./images/webpackSuccess.jpeg");
            background-size: 100% 100%;
        }
    }
</style>
<script type="es6">
  import async from 'async'
  console.log(async)
  export default {
    name: 'index',
    data () {
      return {
        user: 'teacher',
      }
    },
    sockets: {
      user: function () {
        return this.user
      },
      'student': {
        getName: function (name) {
          this.name = name + 'student'
          console.log('student')
        },
      },
      'teacher': {
        getName: function (name) {
          this.name = name + 'teacher'
          console.log('teacher')
        },
      }
    },
    methods: {
      sendMessage () {
        this.$socket.emit('sendName', {name: 'hujianwei'})
      },
      changeUser () {
        this.user = 'student'
      },
      gologin () {
        this.$router.push('/login')
      }
    },
    created () {
    }
  }
</script>
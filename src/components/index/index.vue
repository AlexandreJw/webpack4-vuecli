<template>
    <div class="home">
<<<<<<< HEAD
    </div>
</template>
<style lang="scss" scoped type=text/scss>
=======
        <button class='button'></button>
        <div class="bg"></div>
    </div>
</template>
<style lang="scss" scoped>
>>>>>>> 6c9db2ca3effab5c35c81415908f4e3e767288fc
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
<<<<<<< HEAD
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
=======
  export default {
    data () {
      return {
        name: 'tommy'
      }
    },
    created () {
      console.log(Object.assign({name: ''}, {age: 12}))
>>>>>>> 6c9db2ca3effab5c35c81415908f4e3e767288fc
    }
  }
</script>
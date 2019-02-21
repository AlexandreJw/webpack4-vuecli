<template>
    <div class="home">
        <button class='button' v-on:click="sendMessage">发送index页面的socket</button>
        <button v-on:click="()=>{changeUser('student')}">切换为学生</button>
        <button v-on:click="()=>{changeUser('teacher')}">切换为老师</button>
    </div>
</template>
<style lang="scss" scoped>
    .home {
        color: yellowgreen;
        font-weight: bolder;
        display: flex;
        align-items: center;
        justify-content: center;

    .bg {
        width: 100px;
        height: 100px;
        background-image: url("./images/webpackSuccess.jpeg");
        background-size: 100% 100%;
    }

    }
</style>
<script type="es6">
  export default {
    name: 'login',
    data () {
      return {
        user: 'teacher'
      }
    },
    sockets: {
      user: function () {
        return this.user
      },
      'student': {
        getName: function (name) {
          console.log(name + '学生')
        },
      },
      'teacher': {
        getName: function (name) {
          console.log(name + '老师')
        },
      }
    },
    methods: {
      sendMessage () {
        this.$socket.emit('sendName', {name: 'tubaoge'})
      },
      changeUser (user) {
        this.user = user
      }
    },
    created () {
    }
  }
</script>
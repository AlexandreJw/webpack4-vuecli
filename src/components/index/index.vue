<template>
    <div class="home">
        <button class='button'></button>
        <div class="bg"></div>
    </div>
</template>
<style lang="scss" scoped>
    .home {
        color: yellowgreen;
        font-weight: bolder;
        display: flex;
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
  export default {
    data () {
      return {
        name: 'tommy'
      }
    },
    created () {
      console.log(Object.assign({name: ''}, {age: 12}))
    }
  }
</script>
<template>
    <div class="home">index{{name}}</div>
</template>
<style lang="scss" scoped>
    .home{
        color: yellowgreen;
        font-weight: bolder;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
<script type="es6">
export default {
  data () {
    return{
      name: 'tommy'
    }
  },
  created () {
    console.log('a')
  }
}
</script>
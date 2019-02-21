<template>
    <div>
        <router-view/>
    </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    sockets: {
      /**
       * @desc 链接出错
       **/
      connect_error () {
        console.log('socket connect_error')
      },
      /**
       * @desc 链接超时
       **/
      connect_timeout () {
        console.log('socket connect_timeout')
      },
      /**
       * 断线重连
       **/
      connect: function () {
        console.log(' %c socket connected', 'color:#0000ff')
      },
      /**
       * @desc socket断开的提示
       */
      disconnect: function () {
        console.log('socket disconnect')
      },
      error () {
        console.log('socket erroe')
      }
    },
    created () {
    }
  }
</script>

<style lang="scss">

    a {
        break-inside: avoid;
        break-before: avoid-column;
        break-after: always;
    }
</style>
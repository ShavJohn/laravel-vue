<template>
  <div class="cust-cirquel" :style="{width: radius, height: radius, left: position.x, top: position.x, backgroundColor: bgColor}">

  </div>
</template>

<script>
  export default {
      props: {
        radius: {type: String, default: '50px'},
        bgColor: {type: String, default: 'orange'},
        position: {type: Object, default: () =>{return{  x:0, y:0 }}}
      }
  }
</script>

<style scoped>
    .cust-cirquel  {
      border-radius: 50%;
    }
</style>

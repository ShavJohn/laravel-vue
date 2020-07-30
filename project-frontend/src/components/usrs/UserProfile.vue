<template>
  <div>
        <headerCustom/>
        <h1>{{$route.params.first_name}}</h1>
        <h1>{{$route.params.first_name}}</h1>
  </div>
</template>

<script>
  import HeaderCustom from '../custom/Header-custom';
  export default {
    components: {HeaderCustom},
      data() {
        return {

        }
      },
      methods: {
          getUser(){
              this.axios.get(`https://reqres.in/api/users/${this.$route.params.id}`).then(res => {
                  console.log(res.data)
               })
          }
      },
      mounted() {
          this.getUser()
      },
  }
</script>

<style scoped>

</style>

<template>
  <div>
        <h1>{{$route.params.id}}</h1>
  </div>
</template>

<script>
  export default {
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

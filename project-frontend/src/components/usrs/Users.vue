<template>
  <div>
      <headerCustom/>
      <b-table class="container" :items="users" :fields="tabe_params.field">
          <template v-slot:cell(avatar)="data">
              <b-avatar :src="data.item.avatar"></b-avatar>
          </template>

          <template v-slot:cell(actions)="data">
              <router-link :to="{name: 'User-Profile', params: {id: data.item.id}}">Profile</router-link>
          </template>
      </b-table>
  </div>
</template>

<script>
  import HeaderCustom from '../custom/Header-custom';
  export default {
    components: {HeaderCustom},
      data() {
        return {
            users: [],
            tabe_params: {
              field: [
                {key: 'id'},
                {key: 'avatar'},
                {key: 'full_name', label: 'Name', formatter: (item, key, row,) => `${row.first_name} ${row.last_name}`},
                {key: 'actions'},
              ]
            }
        }
      },
      mounted() {
          this.getUsers()
      },
      methods: {
          getUsers(){
            this.axios.get('https://reqres.in/api/users').then(res => {
              this.users = res.data.data
            }).catch((err) => {
               console.log(err.response)
            })
          }
      },
  }
</script>

<style scoped>

</style>

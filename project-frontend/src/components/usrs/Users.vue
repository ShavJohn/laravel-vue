<template>
  <div>
      <headerCustom/>
      <myModal class="container"/>
      <b-table class="container" :items="users" :fields="tabe_params.field">
          <template v-slot:cell(avatar)="data">
              <b-avatar :src="data.item.avatar"></b-avatar>
          </template>

          <template v-slot:cell(actions)="data">
              <router-link :to="{name: 'User-Profile', params: {id: data.item.id}}"><b-icon-eye-fill class="showPage"></b-icon-eye-fill></router-link>
              <b-button @click="delUser(id)"><b-icon-trash style="color:red;"></b-icon-trash></b-button>
          </template>
      </b-table>
  </div>
</template>

<script>
  import HeaderCustom from '../custom/Header-custom';
  import myModal from '../usrs/components/myModal'
  export default {
    components: {HeaderCustom, myModal},
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
          },
          delUser(id){
              this.axios.delete(`https://reqres.in/api/users/${id}`).then(res => {
                  this.$bvModal.msgBoxOk('User has been deleted successfully', {
                      title: 'Delated',
                      size: 'sm',
                      buttonSize: 'sm',
                      okVariant: 'success',
                      headerClass: 'p-2 border-bottom-0',
                      footerClass: 'p-2 border-top-0',
                      centered: true
                  })
               })
          }
      },
  }
</script>

<style scoped>

</style>

<template>
  <div class="myModal">
      <b-button v-b-modal.modal-scoped variant="success">Add User</b-button>
      <b-modal id="modal-scoped" title="Registar">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
            description="We'll never share your email with anyone else."
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>
          <template  v-slot:modal-footer="{ submit, reset }">
              <b-button type="submit" variant="success" @click="submit()">Submit</b-button>
              <b-button type="reset" variant="danger" @click="reset()">Reset</b-button>
          </template>
        </b-form>
        <template  v-slot:modal-footer="{ submit, reset }">
              <b-button type="submit" variant="success" @click="submit()">Submit</b-button>
              <b-button type="reset" variant="danger" @click="reset()">Reset</b-button>
        </template>
      </b-modal>
  </div>
</template>

<script>
  export default {
      data() {
      return {
        form: {
          email: '',
          name: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      submit(){
          this.axios.get('https://reqres.in/api/users').then(res => {
              this.$bvModal.msgBoxOk('User has been created successfully', {
                      title: 'Created',
                      size: 'sm',
                      buttonSize: 'sm',
                      okVariant: 'success',
                      headerClass: 'p-2 border-bottom-0',
                      footerClass: 'p-2 border-top-0',
                      centered: true
                  })
            }).catch((err) => {
               console.log(err.response)
            })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped>

</style>

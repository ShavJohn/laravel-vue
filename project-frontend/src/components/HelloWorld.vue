<template>
  <div>
      <headerCustom/>
      <b-table class="container" striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  import HeaderCustom from './custom/Header-custom';
  export default {  
    components: {HeaderCustom},
    data() {
      return {
        // Note `isActive` is left out and will not appear in the rendered table
        fields: ['first_name', 'last_name', 'age'],
        items: [
          { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
          { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
        ]
      }
    }
  }
</script>

<style  scoped>

</style>

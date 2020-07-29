<template>
    <div>
        <headerCustom/>
        <form action="">
            <div class="mb-2">
                Choose color
                <input @change="changeColor" type="color">
            </div>
            <div>
                <span>{{ selectedColor.join(', ') }}</span>
            </div>
            <div class="w-25 h-25 border" ref="colorName">
                hi
            </div>
        </form>
    </div>
</template>
<script>
    import HeaderCustom from './custom/Header-custom';
    export default {
        components: {HeaderCustom},
        data() {
            return {
                selectedColor:[]
            }
        },
        watch: {
        },
        mounted() {
            this.axios.get('https://reqres.in/api/users').then(res => {
              console.log(res)
            })
        },
        methods: {
            changeColor(e){
               let colorname =  e.target.value;
               this.selectedColor.push(colorname);
               if(this.selectedColor.length === 3){
                   let i = 0;
                   setInterval( () => {
                       this.$refs.colorName.style.backgroundColor = this.selectedColor[i++]
                       if(i === 3)
                       i = 0
                   }, 500)
               }
            }
        },
    }
</script>
<style scoped>
</style>

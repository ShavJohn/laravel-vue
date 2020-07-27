<template>
    <div>
        <headerCustom/>
        <form action="" @change="calculate"  style="position:relative;top:30px;left:30px">
              <input type="number" ref="num1">
              <select name="oparaitor" ref="options">
                  <option value=""></option>
                  <option value="+">+</option>
                  <option value="-">-</option>
                  <option value="-">/</option>
                  <option value="*">*</option>
              </select>
              <input type="number" ref="num2">
              <span>=</span>
              <span ref="result"></span>
        </form>
    </div>
</template>

<script>
  import HeaderCustom from './custom/Header-custom';
  export default {
    components: {HeaderCustom},
    methods: {
      calculate(){

        let result;
        let options = this.$refs.options.value;
        let num1 = parseFloat(this.$refs.num1.value);
        let num2 = parseFloat(this.$refs.num2.value);


        switch(options)
        {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                return;
        }
        //console.log(result);
        this.$refs.result.innerHTML = result
      }
    }
  }
</script>

<style scoped>

</style>

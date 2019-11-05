<template>
  <div>
    <ul>
      <li
        v-for="(val, key) in availableSizes"
        :key="key"
      ><label>
        <input type="radio" v-model="selectedSize" :value="key" />
        {{ val }}
      </label></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedSize: 'xxl',
        availableSizes: {
          s: 'S',
          m: 'M',
          l: 'L',
          xl: 'XL',
          xxl: 'XXL'
        }
      }
    }
  }
</script>

<style scoped>

</style>

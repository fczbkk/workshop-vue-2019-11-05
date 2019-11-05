<template>
  <div>
    <ul>
      <li
        v-for="(val, key) in availableColors"
        :key="key"
      ><label>
        <input type="radio" v-model="selectedColor" :value="key" />
        {{ val }}
      </label></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        selectedColor: 'red',
        availableColors: {
          red: 'Red',
          blue: 'Blue',
          green: 'Green'
        }
      }
    }
  }
</script>

<style scoped>

</style>

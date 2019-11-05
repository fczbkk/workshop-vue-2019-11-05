<template>
  <div class="home">

    <products-list :list="productsList" />

  </div>
</template>

<script>

  import ProductsList from '../components/ProductsList'

  export default {
    components: {
      ProductsList
    },
    data () {
      return {
        productsList: []
      }
    },
    created () {
      fetch('http://localhost:3000/highlighted')
        .then((response) => response.json())
        .then((productsData) => this.productsList = productsData);
    }
  }

</script>


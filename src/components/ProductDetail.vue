<template>
  <div class="productDetail">

    <div class="details">

      <h2>{{ productData.title }}</h2>

      <div class="tabs">
        <button class="active">Description</button>
        <button>Colors</button>
        <button>Sizes</button>
      </div>
      <div class="tabContent">
        <p>{{ productData.description }}.</p>
      </div>

      <div class="price">
        {{ productData.price }},- Kč
      </div>

      <div class="addToCart">
        <button>🛒 Add to cart</button>
      </div>

    </div>

    <div class="image">
      <img :src="imageUrl" alt="">
    </div>

  </div>

</template>

<script>
  export default {
    props: {
      product_id: {
        type: String,
        required: true
      }
    },

    data () {
      return {
        productData: {}
      }
    },

    created () {
      fetch('http://localhost:3000/products/' + this.product_id)
        .then((response) => response.json())
        .then((data) => this.productData = data);
    },

    computed: {
      imageUrl () {
        return `http://localhost:3000/images/${this.productData.image}`
      }
    }
  }
</script>

<style scoped>

</style>

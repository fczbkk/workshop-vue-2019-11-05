<template>
  <div class="box">
    <div class="title">
      <h3>
        <router-link :to="{name: 'product', params: {product_id: id}}">{{ title }}</router-link>
      </h3>
    </div>
    <div class="content">
      <div class="productItem">
        <div class="productImage">
          <img :src="imageUrl" alt="" height="100">
        </div>
        <p>{{ description }}</p>
        <div class="price">
          {{ price | price('USD') }}
        </div>
        <div class="addToCart">
          <button>🛒 Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import priceMixin from './../mixins/price'

  export default {
    mixins: [
      priceMixin
    ],

    props: {
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }
    },

    computed: {
      imageUrl () {
        return `http://localhost:3000/images/${this.image}`
      }
    }
  }
</script>

<style scoped>

</style>

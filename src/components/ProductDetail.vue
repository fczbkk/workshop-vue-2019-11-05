<template>
  <div class="productDetail">

    <div class="details">

      <h2>{{ productData.title }}</h2>

      <div class="tabs">
        <button
          @click="selectedTab = 'description'"
          :class="{active: selectedTab === 'description'}"
        >Description</button>
        <button
          @click="selectedTab = 'color'"
          :class="{active: selectedTab === 'color'}"
        >Colors</button>
        <button
          @click="selectedTab = 'size'"
          :class="{active: selectedTab === 'size'}"
        >Sizes</button>
      </div>
      <div class="tabContent">
        <keep-alive>
          <component
            :is="activeComponent"
            :description="productData.description"
          />
        </keep-alive>
      </div>

      <div class="price">
        {{ productData.price | price }}
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
  import priceMixin from './../mixins/price'
  import SelectColor from './SelectColor'
  import SelectSize from './SelectSize'
  import ProductDescription from './ProductDescription'

  export default {
    components: {
      SelectColor,
      SelectSize,
      ProductDescription
    },
    props: {
      product_id: {
        type: String,
        required: true
      }
    },

    mixins: [
      priceMixin
    ],

    data () {
      return {
        productData: {},
        selectedTab: 'description'
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
      },
      activeComponent () {
        if (this.selectedTab === 'color') {
          return SelectColor
        }
        if (this.selectedTab === 'size') {
          return SelectSize
        }
        return ProductDescription
      }
    }
  }
</script>

<style scoped>

</style>

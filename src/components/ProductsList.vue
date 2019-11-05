<template>
  <div class="productsList">
    <product-item
      v-for="(product) in list"
      :key="product.id"
      :title="product.title"
      :description="product.description"
      :image="product.image"
      :price="product.price"
      :id="product.id"
    />
  </div>
</template>

<script>
  import ProductItem from '../components/ProductItem'

  export default {
    components: {
      ProductItem
    },
    props: {
      list: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style scoped>

</style>

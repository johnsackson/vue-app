<template>
  <div class="container mt-8 mx-auto px-4 sm:px-0">
    <ProductsList />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

import ProductsList from '../components/ProductsList.vue'
import ProductCard from '~/components/ProductCard.vue'

@Component({
  name: 'PageIndex',
  components: {
    ProductsList,
    ProductCard
  }
})
export default class PageIndex extends Vue { }
</script>

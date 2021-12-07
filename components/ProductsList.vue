<template>
  <div class="rounded-xl rounded-xl p-8 bg-blue-100">
    <h2 class="mb-6">
      <strong>List of Products</strong>
    </h2>

    <!-- search box -->
    <input 
      v-model="searchValue"
      type="text"
      placeholder="Search products..."
      class="border border-blue-200 bg-white mb-4 p-4 rounded-xl w-full" />

    <!-- filter box -->
    <div class="border border-gray-200 rounded-xl flex mb-4 list-none">
      <ul>
        <li 
          v-for="(item, index) in filterTypes"
          :key="index"
          class="leading-4">

          <label :for="item.name" class="text-xs inline-block align-middle">

            <input v-model="item.checked"
              :id="item.name"
              :value="item.value"
              type="checkbox"
              class="align-middle" />
            {{ item.name }}
          </label>
        </li>
      </ul>
    </div>

    <!-- search count box -->
    <div class="mb-4 text-blue-500 text-xs">
      Showing 
      <strong>{{ resultsCount }}</strong> 
      results. in categories
      <span v-for="(filter, index) in activeFilters" :key="index">
        <strong>
          <span v-if="index != 0">, </span>
          {{ filter }}
        </strong>
      </span>
    </div>

    <!-- result box -->
    <ul class="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.title"
        :productCard="product"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import { Product } from '~/types/Product'

@Component({
  name: 'ProductsList'
})
export default class ProductsList extends Vue {
  private searchValue!: string | '';
  private products!: Product[];
  private filterTypes:[] = [];
  resultsCount: number = 0;

  // getters, setters
  get filteredProducts () {
    return this.getFilteredProducts()
  }

  get activeFilters () {
    return this.getActiveFilters()
  }

  // data handling
  data () {
    return {
      searchValue: '',
      products: [],
      resCount: 0,
      filterTypes: [
        { name: 'electronics', value: 'electronics', checked: true },
        { name: 'jewelery', value: 'jewelery', checked: true },
        { name: 'men\'s clothing', value: 'mens-clothing', checked: true },
        { name: 'women\'s clothing', value: 'womens-clothing', checked: true }
      ]
    }
  }

  // fetch data asynchronously
  async fetch () {
    const apiUri = 'https://fakestoreapi.com/products?limit=20'

    this.products = await fetch(apiUri)
      .then(res => res.json())
      .catch((error) => {
        // error handling can be done here
      })
  }

  // gets active filter
  getActiveFilters () {
    return this.filterTypes.filter((item: any) => item.checked).map((name: any) => name.name)
  }

  // gets filter product list
  getFilteredProducts (): Product[] {
    let tempProducts: Product[] = this.products

    // process search input
    if (this.searchValue !== '' && this.searchValue) {
      tempProducts = tempProducts.filter((item: any) =>
        item.title.toUpperCase().includes(this.searchValue.toUpperCase()))
    }

    // tempProducts = tempProducts.filter(product => this.activeFilters.some(a => a === product.category))
    tempProducts = tempProducts.filter(product => this.activeFilters.includes(product.category))
    // gets result count instantaneously
    this.resultsCount = tempProducts.length

    return tempProducts
  }
}
</script>

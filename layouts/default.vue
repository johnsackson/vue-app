<template>
  <div id="myApp">
    <SiteHeader />
    <main role="main">
      <Nuxt />
    </main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
// import SiteHeader from '~/components/SiteHeader.vue';

@Component({
  name: 'LayoutsDefault'
})
export default class LayoutsDefault extends Vue {}
</script>

<style>
html,
body {
  @apply m-0 p-0;
}
</style>

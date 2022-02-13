<template>
  <div id="app">
    <Content></Content>
    <Map></Map>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Content from "./components/content/Content.vue";
import Map from "./components/map/Map.vue";


@Component({
  components: {
    Content,
    Map
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">

</style>

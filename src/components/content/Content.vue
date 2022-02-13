<template>
  <div id="content w-100 w-md-75 w-lg-50">
  <h1>test</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#content {
    position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 50%;
  background: #ffffff44
}
</style>

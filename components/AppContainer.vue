<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1151px;
  padding: 0 148px;
  margin: 0 auto;
  @include for-size(tablet) {
    padding: 0 30px;
  }
}
</style>

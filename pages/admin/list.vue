<template>
  <div>
    <h1>This is List page</h1>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
}
</script>

<style scoped></style>

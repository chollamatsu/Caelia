<template>
  <div class="container">
    <h1>Hello user name account</h1>
  </div>
</template>

<script>
export default {
  name: "DashBoard",
};
</script>

<style scoped>
.container {
  background-color: var(--dark-3);
  backdrop-filter: blur(20px); /* glass blur */
  -webkit-backdrop-filter: blur(20px);
  width: 100%;
  height: 100%;
}
</style>

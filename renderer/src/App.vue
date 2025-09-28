<template>
  <EditorPage/>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import EditorPage from "./pages/EditorPage.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    EditorPage
  },
};
</script>
<style src="@/styles/colors.css"></style>
<style>
html, body, #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-1);
  /* background-color: var(--white-1); */
  background-color: var(--green-001);
  height: 99%;
}
</style>

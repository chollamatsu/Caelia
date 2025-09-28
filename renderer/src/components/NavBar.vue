<template>
  <div class="container">
    <h1>Logo</h1>
    <div v-for="(item, idx) in menu" :key="idx">
      <button @click="onClick(item)">{{ item.name }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      menu: [
        {
          id: 0,
          name: "Home",
          desc: "go to dash board page",
          icon: "path",
        },
        {
          id: 1,
          name: "To do List",
          desc: "go to todo list page",
          icon: "path",
        },
        {
          id: 2,
          name: "All patient",
          desc: "go to patient list page",
          icon: "path",
        },
      ],
    };
  },
  methods: {
    onClick(item) {
      this.$emit("set-content-data", item);
    },
  },
};
</script>

<style scoped>
.container {
  /* background-color: var(--white-2); */
  background-color: var(--green-001);
  color: var(--dark-1);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

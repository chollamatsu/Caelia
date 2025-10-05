<template>
  <div class="container">
    <h1>Logo</h1>
    <div v-for="(item, idx) in menu" :key="idx">
      <div class="nav-menu-item" @click="onClick(item)">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      selectItem: '',
      menu: [
        {
          id: 0,
          name: "Home",
          desc: "go to dash board page",
          type: 'home-editor',
          icon: "path",
        },
        {
          id: 1,
          name: "To do List",
          desc: "go to todo list page",
          type: 'todo-editor',
          icon: "path",
        },
        {
          id: 2,
          name: "All patient",
          desc: "go to patient list page",
          type: 'patient-edior',
          icon: "path",
        },
      ],
    };
  },
  methods: {
    onClick(item) {
      this.selectItem = item;
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
.nav-menu-item {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--green-001);
  width: 100%;
  height: 5vh;
  cursor: pointer;
}

.nav-menu-item:hover {
  background-color: var(--background-navbar-item-hover);
}

.nav-menu-item:active {
  background-color: var(--background-navbar-item-hover);
}
</style>

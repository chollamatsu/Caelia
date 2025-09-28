<template>
  <div class="editor-content">
    <nav-bar id="nav-bar" @set-content-data="setContent" />
    <page-content id="page-content" :content-data="contentData" />
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import PageContent from "../components/PageContent.vue";
export default {
  name: "EditorPage",
  components: {
    NavBar,
    PageContent,
  },
  data() {
    return {
      contentData: {},
    };
  },
  methods: {
    setContent(obj) {
      this.contentData = { ...obj };
      console.log("set content:", this.contentData);
    },
    getContent() {
      return this.contentData;
    },
  },
};
</script>

<style scoped>
.editor-content {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 15% auto;
  background-color: var(--background-editor-page);
  gap: 20px;
}
</style>

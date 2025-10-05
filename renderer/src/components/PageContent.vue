<template>
  <div class="page-content-container">
    <div class="header-container">
      <h1>{{ contentData.name }}</h1>
    </div>
    <div class="body-container">
      <!-- <span>{{ contentData.desc }}</span> -->
      <dash-board v-if="isHomeEditor()" />
      <todo-list v-if="isTodoEditor()" />
      <patient-list v-if="isPatientEditor()" />
    </div>
  </div>
</template>

<script>
import { contentTypes } from "../constants";
import DashBoard from "../pages/DashBoard.vue";
import TodoList from "../pages/TodoList.vue";
import PatientList from "../pages/PatientList.vue";
export default {
  name: "PageContent",
  components: {
    DashBoard,
    TodoList,
    PatientList,
  },
  props: {
    contentData: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  methods: {
    isHomeEditor() {
      return this.contentData.type === contentTypes.HOME_EDITOR;
    },
    isTodoEditor() {
      return this.contentData.type === contentTypes.TODO_EDITOR;
    },
    isPatientEditor() {
      return this.contentData.type === contentTypes.PATIENTS_EDITOR;
    }
  }
};
</script>

<style scoped>
.page-content-container {
  display: grid;
  grid-template-rows: 20vh auto;
  background-color: var(--background-editor-page);
  width: 96%;
  height: 100%;
  padding-left: 5px;
}

.header-container {
  display: flex;
  flex-direction: row;
  margin: 0 10px;
}

.body-container {
  display: grid;
}
</style>

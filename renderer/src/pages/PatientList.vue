<template>
  <div class="patient-list-container">
    <div class="menu-bar">
      <div class="menu-item">
        <div
          v-for="(item, idx) in getPatientList()"
          :key="idx"
          class="button item"
          @click="onClickLeft(item)"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
      <div class="right-menu-item-container">
        <div class="button" @click="onClickView">
          <FullView :width="15" :height="15" />
        </div>
        <div class="button right-menu-item" @click="onAddNewPatient">
          <PlusIcon :width="20" :height="20" />
          <span>Add new Patient </span>
        </div>
      </div>
    </div>
    <div class="patient-comtainer">
      <div class="patient-item" v-for="(item, idx) in selectObject" :key="idx">
        <patient-card :patient-info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import PatientCard from "../components/PatientCard.vue";
import { patientList, rightMenuItem } from "../mockData/patientList";
import FullView from "../common/icons/FullView.vue";
import PlusIcon from "../common/icons/PlusIocn.vue";
export default {
  name: "PatientList",
  components: {
    PatientCard,
    FullView,
    PlusIcon,
  },
  data() {
    return {
      currentSelect: "All",
      selectObject: {},
    };
  },
  computed: {
    getRightMenuList() {
      return rightMenuItem;
    },
  },
  methods: {
    getPatientList() {
      return patientList;
    },
    onClickLeft(item) {
      this.currentSelect = item.name;
      this.selectObject = item.contents;
      console.log("item:", this.selectObject);
    },
    onClickView() {
      console.log("click view");
    },
    onAddNewPatient() {
      console.log("click add new patient");
    },
  },
};
</script>

<style scoped>
.patient-list-container {
  width: 100%;
  height: 100%;
  background-color: var(--background-editor-patient);
  display: grid;
  grid-template-rows: 5vh auto;
  padding-left: 10px;
  border-radius: 3px;
}

.menu-bar {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  width: 98%;
}

.menu-item {
  display: flex;
  flex-direction: row;
}

.item {
  background-color: var(--background-color-menu-item);
  color: var(--color-menu-item);
  width: 12vw;
}

.button:hover {
  background-color: var(--background-color-menu-item-hover);
}

.right-menu-item-container {
  display: flex;
  flex-direction: row;
}
.right-menu-item {
  background-color: var(--background-color-right-menu-item);
  color: var(--color-right-menu-item);
  width: auto;
  height: auto;
  padding: 0 5px 0 0;
}

.patient-content {
  background-color: var(--background-table-patient);
  width: 98%;
  height: 98%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.patient-item {
  background-color: var(--background-table-patient-item);
  width: 98%;
  border-radius: 6px;
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3vh;
  border-radius: 3px;
  cursor: pointer;
  margin: 2px;
}

.patient-comtainer {
  display: flex;
  flex-direction: column;
}
</style>

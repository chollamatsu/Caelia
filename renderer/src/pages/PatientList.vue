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
        <div
          class="button right-menu-item"
          v-for="(item, idx) in getRightMenuList"
          :key="idx"
        >
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>

    <div class="patient-content">
      <div class="patient-item" v-for="(item, idx) in selectObject" :key="idx">
        <span v-if="currentSelect === 'All'">{{ item.status }}</span>
        <span v-if="currentSelect !== 'Unassigned'">{{ item.assignedTo }}</span>
        <span>{{ item.firstName }}</span>
        <span>{{ item.assignedTo }}</span>
        <span>{{ item.referalNote }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { patientList, rightMenuItem } from "../mockData/patientList";
export default {
  name: "PatientList",
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
    // getPatientItem(item){
    //     const filterList = patientList.filter(i => {
    //         i.status ===
    //     })
    // }
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
}

.menu-bar {
  display: grid;
  grid-template-columns: auto 18vw;
  align-items: center;
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
  width: 15vw;
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
  /* height: 3vh; */
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
</style>

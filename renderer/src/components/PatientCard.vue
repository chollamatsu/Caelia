<template>
  <!-- <div class="patient-card active"> -->
  <div
    :class="{
      'patient-card': true,
      active: patientInfo.status === 'active',
      completed: patientInfo.status === 'completed',
      unassigned: patientInfo.status === 'unassigned',
    }"
  >
    <div class="card-info">
      <div class="card-header">
        <div class="patient-name">{{ patientInfo.firstName }}</div>
        <span :class="getStatusStlye()">{{ patientInfo.status }}</span>
      </div>

      <div class="card-body">
        <div class="patient-info">
          <div class="details">
            <p>
              <strong>MRN / Patient ID:</strong> {{ patientInfo.patientId }}
            </p>
            <p><strong>Case ID:</strong> {{ patientInfo.patientIcaseIdd }}</p>
            <p>
              <strong>Intake Timestamp:</strong>
              {{ patientInfo.intakeTimestamp }}
            </p>
          </div>
          <div class="refering-notes">
            <p style="margin: 0">Refering Notes</p>
            <div class="refering-details">
              {{ patientInfo.referalNote }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="card-footer">
      <div class="case-info">
        <div class="assigned">
          <span>Assigned to:</span>
          <div class="avatar" v-if="patientInfo.assignedTo">
            <div class="dot"></div>
            <span class="name">{{ patientInfo.assignedTo }}</span>
          </div>
          <div v-else>
            <button class="view-btn add">Add provider +</button>
          </div>
        </div>
        <div class="assigned">
          <span>Start Date:</span>
          <div class="avatar">
            <span class="name">{{ patientInfo.assignedTo }}</span>
          </div>
        </div>
        <div class="assigned">
          <span>Case Duration:</span>
          <div class="avatar">
            <span class="name">{{ patientInfo.assignedTo }}</span>
          </div>
        </div>
      </div>
      <button class="view-btn">View case</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PatientCard",
  props: {
    patientInfo: {
      type: Object,
      require: true,
      default: () => {},
    },
  },
  methods: {
    getStatusStlye() {
      switch (this.patientInfo.status) {
        case "active":
          return "status-active";
        case "completed":
          return "status-completed";
        default:
          return "status-unassigned";
      }
    },
  },
};
</script>

<style scoped>
.patient-card {
  background: var(--background-card-patient);
  border-radius: 5px;
  /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08); */
  padding: 20px;
  /* margin: 20px 0; */
  /* font-family: "Inter", sans-serif; */
  color: var(--color-card-patient);
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: 0.3s ease;
  width: 100%;
}

.patient-card.active {
  border-left: 5px solid var(--background-color-card-patient-active); /* blue for active */
}

.patient-card.completed {
  border-left: 5px solid var(--background-color-card-patient-completed); /* green for completed */
}

.patient-card.unassigned {
  border-left: 5px solid var(--background-color-card-patient-unassigned); /* green for completed */
}

.patient-info {
  display: grid;
  grid-template-columns: 50% auto;
}


.card-info {
  display: grid;
  grid-template-columns: 20% auto;
}
.card-header {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
}

.patient-name {
  font-size: 18px;
  font-weight: 600;
}

.status-active {
  background: var(--background-color-card-patient-active);
  color: var(--color-card-patient-active);
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.status-completed {
  background: var(--background-color-card-patient-completed);
  color: var(--color-card-patient-completed);
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.status-unassigned {
  background: var(--background-color-card-patient-unassigned);
  color: var(--color-card-patient-unassigned);
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 12px;
}

.details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.details p {
  margin: 3px 0;
  font-size: 14px;
}

.refering-details {
  font-size: 14px;
  background: var(--background-color-refring-detial);
  padding: 10px;
  border-radius: 6px;
  color: var(--color-refring-detial);
  width: 94%;
}

.refering-notes {
  display: grid;
  grid-template-rows: 25px auto;
  justify-items: start;
}

.case-info {
  display: grid;
  justify-items: start;
  grid-template-columns: 10rem 10rem 10rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.assigned {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.avatar {
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: white;
  border-radius: 10px;
  min-width: 6rem;
  min-height: 25px;
}

.avatar img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.meta {
  display: flex;
  gap: 20px;
  font-size: 13px;
}

.view-btn {
  background: var(--button-background-color-complete);
  color: var(--button-color-complete);
  border: none;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  transition: 0.3s;
  height: 3vh;
  display: flex;
  align-items: center;
}

.view-btn:hover {
  background: var(--button-background-color-complete-hover);
}

.add {
  background: var(--button-add-background-color-complete);
  color: var(--button-add-color-complete);
}

.add:hover {
  background-color: var(--button-add-background-color-complete-hover);
}

.dot {
  height: 25px;
  width: 25px;
  background-color: var(--Orage-002);
  border-radius: 50%;
  display: inline-block;
}

hr {
  border: 0;
  border-top: 1px solid var(--hr-line-color);
  margin: 1px 0;
}
</style>

<template>
  <div class="container">
    <div class="header-container">
      <h1>{{ contentData.name }}</h1>
    </div>
    <div class="body-container">
      <span>{{ contentData.desc }}</span>
    </div>
  </div>
</template>

<script>
//to do: do nav bar.
/* หน้านี้เอาไว้เป็นskeletonให้หน้าอื่นๆ 
รับ props จาก navbar-> ส่งข้อมูล title, api, อะไรพวกนี้มา จะได้เรียก component ถูก*/
export default {
  name: "PageContent",
  props: {
    contentData: {
      type: Object,
        require: true,
      default: () => {},
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.header-container {
  display: grid;
}

.body-container {
  display: grid;
}
</style>

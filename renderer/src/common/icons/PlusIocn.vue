<template>
  <svg
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 24 24"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 6L12 18" stroke="#222222" stroke-linecap="round" />
    <path d="M18 12L6 12" stroke="#222222" stroke-linecap="round" />
  </svg>
</template>

<script>
export default {
  name: "PlusIcon",
  props: {
    width: {
      type: Number,
      require: false,
      default: 10,
    },
    height: {
      type: Number,
      require: false,
      default: 10,
    },
    color: {
      type: String,
      require: false,
      default: "var(--dark-1)",
    },
  },
};
</script>

<style scoped></style>

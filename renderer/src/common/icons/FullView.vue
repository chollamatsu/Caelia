<template>
  <svg
    :width="`${width}px`"
    :height="`${height}px`"
    viewBox="0 0 24 24"
    :fill="color"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="4"
      width="6"
      height="7"
      rx="1"
      stroke="#222222"
      stroke-linejoin="round"
    />
    <rect
      x="4"
      y="15"
      width="6"
      height="5"
      rx="1"
      stroke="#222222"
      stroke-linejoin="round"
    />
    <rect
      x="14"
      y="4"
      width="6"
      height="5"
      rx="1"
      stroke="#222222"
      stroke-linejoin="round"
    />
    <rect
      x="14"
      y="13"
      width="6"
      height="7"
      rx="1"
      stroke="#222222"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: "FullView",
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

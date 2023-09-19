<template>
  <button class="btn btn--purple">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "ボタン" },
    borderRadius: { type: String, default: "10px" },
    paddingSize: { type: String, default: "12px 20px" },
    fontSize: { type: String, default: "16px" },
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.btn {
  color: #fff;
  padding: v-bind(paddingSize);
  border: none;
  font-size: v-bind(fontSize);
  cursor: pointer;
  border-radius: v-bind(borderRadius);
  width: 200px;
}

.btn--purple {
  background-color: #32006e;
}

.btn--purple:hover {
  background: #32006e;
}
</style>

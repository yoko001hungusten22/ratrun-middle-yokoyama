<template>
  <div>
    <button @click="toggleAccordion()">{{ title }}</button>
    <div v-show="isOpen">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: "アコーディオン" },
    description: { type: String, default: "説明" },
  },
  setup() {
    const isOpen = ref(false);
    const toggleAccordion = () => {
      // if (isOpen.value === true) {
      //   isOpen.value = false;
      //   console.log("trueです");
      // } else {
      //   isOpen.value = true;
      //   console.log("falseです");
      // }
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggleAccordion };
  },
};
</script>

<style lang="scss" scoped>
</style>


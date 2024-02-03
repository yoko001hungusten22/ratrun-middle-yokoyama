<!-- ratrun-middle-yokoyama/components/atoms/Accordions/BasicAccordion.vue -->

<template>
  <div class="accordion-container">
    <button @click="toggleAccordion()" class="accordion-button">
      {{ title }}<span class="plus-sign">+</span>
    </button>
    <div v-show="isOpen" class="accordion-content">
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
      isOpen.value = !isOpen.value;
    };
    return { isOpen, toggleAccordion };
  },
};
</script>

<style lang="scss" scoped>
.accordion-container {
  max-width: 900px;
  width: 100%;
  margin-bottom: 20px;
  margin: 0 auto;
}

.accordion-button {
  position: relative;
  width: 100%;
  padding: 10px;
  text-align: left;
  color: white;
  background-color: rgb(101, 99, 99);
  border: none;
  cursor: pointer;
  font-size: 1.3em;
  margin-bottom: 10px;
}

.plus-sign {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: white;
  font-size: 2em;
}

.accordion-content {
  width: calc(100% - 20px);
  padding: 10px;
  color: white;
  background-color: grey;
  margin-top: -10px;
}
</style>

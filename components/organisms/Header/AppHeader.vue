<template>
  <header>
    <nav>
      <ul id="top">
        <li v-for="(page, key) in pageList" :key="key">
          <nuxt-link :to="page.to">{{ page.title }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  setup() {
    const pageList = ref([
      { title: "ホーム", to: "/home" },
      { title: "経営理念", to: "/home" },
      { title: "事業理念", to: "/home" },
      { title: "事業目的", to: "/home" },
      { title: "お問い合わせ", to: "/home" },
    ]);
    return { pageList };
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  height: 84px;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0%;
  z-index: 1;
}

header h2 {
  padding: 25px;
  color: #fff;
}

header ul#top {
  display: flex;
  padding: 30px;
  text-decoration: none;
}

header nav ul li {
  margin-right: 20px;
  text-align: center;
  justify-content: space-around;
}

header nav ul li a {
  color: #fff;
  text-decoration: none;
}
</style>
<template>
  <Header />
  <Footer />
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
#body {
  // width: 100%;
  padding: 5px;
}
</style>

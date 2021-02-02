<template>
  <Layout>
    <p>Money.vue</p>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
export default {
  name: 'Money',
  components: {Layout},
};
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
p{
  color: $red;
}
</style>
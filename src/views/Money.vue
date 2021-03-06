<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types :xxx=" 333 "/>
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script lang="ts">
import Layout from '@/components/Layout.vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
export default {
  name: 'Money',
  components: {Layout,Tags, Notes, Types, NumberPad},
};
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
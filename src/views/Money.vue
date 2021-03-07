<template>
  <Layout class-prefix="layout">
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注"
                placeholder="在这里输入备注"
                @update:value="onUpdateNotes"
      />
    </div>
    <Tags/>
    {{count}}
    <button @click="add">1</button>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tags from '@/components/money/Tags.vue';
import {Component} from 'vue-property-decorator';
import store from '@/store/index2.ts';
import Button from '@/components/Button.vue';


@Component({
  components:{Button, Tags,Types,NumberPad,FormItem},
  computed:{
    count(){
      return store.count;
    },
    recordList(){
      return store.recordList;
    }
  }
})
export default class Money extends Vue {

  add(){
    store.addCount();
  }

  record: RecordItem = {
    tags: [], notes: '', type: '-', amount: 0
  };
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    store.createRecord(this.record);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.notes {
  padding: 12px 0;
}
</style>
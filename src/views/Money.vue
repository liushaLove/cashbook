<template>
  <Layout class-prefix="layout">
    {{record}}
    <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import {Component,Watch} from 'vue-property-decorator';
const recordList:Record[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number,
  createAt?:Date
}
@Component({
  components:{Tags,Types,NumberPad,Notes}
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '彩票'];
  recordList:Record[] = recordList;
  record: Record = {
    tags: [], notes: '', type: '-', amount: 0
  };
  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  saveRecord() {
    const record2:Record = JSON.parse(JSON.stringify(this.record));
    record2.createAt = new Date();
    this.recordList.push(record2);
  }
  @Watch('recordList')
  onRecordListChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
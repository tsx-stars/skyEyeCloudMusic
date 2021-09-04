<template>
  <div class="hello">
    <div class="t1">t1</div>
    <van-button type="primary">主要按钮</van-button>
    <van-search v-model="value" placeholder="请输入搜索关键词" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.t1 {
  width: 370px;
  height: 40px;
  background: blueviolet;
}
</style>

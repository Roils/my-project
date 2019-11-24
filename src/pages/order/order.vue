<template>
  <div class="order">
    <div class="order-main"></div>
    <van-tabs color="#0089dc" v-model="active">
      <van-tab title="全部订单">内容 1</van-tab>
      <van-tab title="已付款">内容 2</van-tab>
      <van-tab title="待付款">内容 3</van-tab>
      <van-tab title="已评价">内容 4</van-tab>
      <van-tab title="未评价">内容 5</van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 1
    };
  }
};
</script>

<style lang="stylus">
.order-main {
  background-color: #0089dc;
  height: 0.8rem;
}
</style>
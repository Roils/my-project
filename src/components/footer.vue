<template>
  <div class="footerguide">
    <van-tabbar active-color="#0089dc" inactive-color="#000" route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/order" icon="shop-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/person" icon="user-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "footerguide",
  data() {
    return {};
  }
};
</script>
<style>
</style>
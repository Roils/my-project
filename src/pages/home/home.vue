<template>
  <div class="home">
    <div class="head-guide">
      <van-search placeholder="请输入搜索关键词" />
    </div>
    <van-swipe :autoplay="3000" style="height:1.7rem">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" width="100%" height="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  }
};
</script>

<style lang="stylus">
.head-guide {
  background-color: #0089dc;
  height: 0.9rem;
}
</style>
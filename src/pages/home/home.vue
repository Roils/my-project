<template>
  <div class="home">
    <div class="head-guide">
      <van-search placeholder="请输入搜索关键词" />
      <!-- <input type="text"> -->
    </div>
    <van-swipe :autoplay="3000" style="height:1.2rem">
      <van-swipe-item v-for="(image, index) in images" :key="index" style="height:1.2rem">
        <img :src="image" style="width:100%;height:100%;overflow:hidden" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import {clas,swiperimg} from "@/data/homeclas.js"
export default {
  data() {
    return {
      images: [],
      clas: []
    };
  },
  mounted() {
    this.images = swiperimg
    this.clas = clas
    this.getclass()
    console.log(clas)
  },
  methods: {
    getclass(){
    }
  }
};
</script>

<style lang="stylus">
.head-guide {
  background-color: #0089dc;
  height: 0.9rem;
  position: relative;
}

.van-search {
  position: absolute;
  left: 0.18rem;
  top: 0.36rem;
  width: 90%;
  height: 0.4rem;
  border-radius: 0.3rem;
}

.van-search__content--square {
  border-radius: 0.5rem;
}
</style>
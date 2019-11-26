<template>
  <div class="home">
    <div class="head-guide">
      <!-- <van-icon name="award-o" class="location-icon" />
      <van-icon name="arrow-down" class="switch-icon" />-->
      <router-link to="/indexcity" class="location">{{ currentcity }}</router-link>
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
import { Dialog } from "vant";
import { clas, swiperimg } from "@/data/homeclas.js";
export default {
  data() {
    return {
      images: [],
      clas: [],
      currentcity: "未定位"
    };
  },
  mounted() {
    this.images = swiperimg;
    this.clas = clas;
    this.getclass();
    console.log(clas);
  },
  methods: {
    getclass() {
      Dialog.confirm({
        title: "温馨提示",
        message: "腾讯外卖试图开启地理定位"
      })
        .then(() => {
          this.currentcity = "北京"
        })
        .catch(() => {
          // on cancel
        });
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
  top: 0.4rem;
  width: 90%;
  height: 0.4rem;
  border-radius: 0.3rem;
}

.van-search__content--square {
  border-radius: 0.5rem;
}

.location {
  font-size: 0.2rem;
  color: white;
  position: absolute;
  top: 0.12rem;
  left: 0.2rem;
}

/* .location-icon {
  font-size: 0.18rem;
  color: white;
  position: absolute;
  top: 0.15rem;
  left: 0.14rem;
}
.switch-icon{
  font-size: 0.12rem;
  color: white;
  position: absolute;
  top: 0.15rem;
  left: 0.99rem;
} */
</style>
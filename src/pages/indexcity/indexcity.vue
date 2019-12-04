<template>
  <div class="indexcity">
    <van-nav-bar title="选择所在地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="citybar">
    </div>
    <van-search placeholder="请输入搜索关键词" v-model="inputcity" />
    
  </div>
</template>
<script>
import { citys } from "@/data/city.js";
export default {
  data() {
    return {
      citys: [],
      currentcity: "",
      inputcity: ""
    };
  },
  mounted() {
    this.citys = citys;
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>
<style lang="stylus"></style>
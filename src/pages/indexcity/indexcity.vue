<template>
  <div class="indexcity">
    <van-nav-bar title="选择所在地址" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="citybar" v-for="items in citys" :key="items.initial">
      <van-index-bar v-for="item in items" :key="item.code">
        <van-index-anchor :index="items.initial" />
        <van-cell title="城市"/>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import { citys } from "@/data/city.js";
export default {
  data() {
    return {
        citys:[],
        currentcity:""
    };
  },
  mounted(){
      this.citys = citys
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
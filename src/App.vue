<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="transitionBody">></router-view>
      </keep-alive>
    </transition>
    <footer-guide v-if="footShow"></footer-guide>
  </div>
</template>

<script>
import FooterGuide from "./components/footer.vue";
export default {
  name: "App",
  components: {
    FooterGuide
  },
  data() {
    return {
      transitionName: "transitionLeft",
      footShow: true
    };
  },
  watch: {
    $route(to, from) {
      const arr = ["/goods", "/ratings", "/seller"];
      const compare = arr.indexOf(to.path) > arr.indexOf(from.path);
      this.transitionName = compare ? "transitionLeft" : "transitionRight";
      if (
        this.$route.path == "/home" ||
        this.$route.path == "/order" ||
        this.$route.path == "/person"
      ) {
        this.footShow = true;
      } else {
        this.footShow = false;
      }
    }
  }
};
</script>

<style scoped>
.transitionBody {
  position: absolute;
  left: 0;
  top: 0rem;
  width: 100%;
  height: 100%;
  transition: all 0.15s ease; /*定义动画的时间和过渡效果*/
}

.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  /*当左滑进入右滑进入过渡动画*/
}

.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
</style>

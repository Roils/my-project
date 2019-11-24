<template>
  <div class="person">
    <div class="head-guide">
      <img
        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1574576082&di=9e791cca59369dd17744108a0dc6726d&src=http://hbimg.b0.upaiyun.com/47f36f0106ae720e1cfd7cffb3eaa54de462e341e93-DUt7wG_fw236"
        alt
        class="user-img"
      />
      <router-link to="/login" class="to-login">登录/注册</router-link>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="stylus" scoped>
.person {
  overflow: hidden;
}

.user-img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.8rem;
  position: absolute;
  left: 0.25rem;
  top: 0.3rem;
}

.head-guide {
  background-color: #0089dc;
  height: 1.4rem;
  position: relative;
}

.to-login {
  font-size: 0.25rem;
  position: absolute;
  top: 0.55rem;
  color: white;
  left: 1.25rem;
}
</style>
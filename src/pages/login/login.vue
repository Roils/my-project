<template>
  <div class="login">
    <div class="turn-back">
      <van-icon name="arrow-left" @click="goback()" />
      <p class="turn-p" @click="goback()">返回</p>
      <div class="login-mode">
        <h1 class="login-h1">登录腾讯外卖</h1>
        <van-tabs animated color="#0089dc">
          <van-tab :title="loginofphone">
            <van-cell-group>
              <van-field v-model="phone" label="手机号" placeholder="请输入手机号" />
              <van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
                <van-button
                  slot="button"
                  :disabled="disabled"
                  @click="sendcode"
                  size="small"
                  type="primary"
                >{{btntxt}}</van-button>
              </van-field>
            </van-cell-group>
          </van-tab>
          <van-tab :title="loginofpwd">
            <van-cell-group>
              <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
              <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
              />
            </van-cell-group>
          </van-tab>
        </van-tabs>
        <van-button round type="info" style="width:80%;margin-left:10%;margin-top:.2rem">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      loginofphone: "手机号登录",
      loginofpwd: "密码登录",
      phone: "",
      username: "",
      password: "",
      sms: "",
      disabled: false,
      time: 0,
      btntxt: "获取验证码"
    };
  },
  mounted() {},
  methods: {
    goback() {
      this.$router.push({ path: "/person" });
    },
    sendcode() {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
      //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
      if (this.phone == "") {
        Dialog.alert({
          message: "请输入手机号码"
        }).then(() => {
          // on close
        });
      } else if (!reg.test(this.phone)) {
        Dialog.alert({
          message: "手机号码格式不正确"
        }).then(() => {
          // on close
        });
      } else {
        this.time = 60;
        this.disabled = true;
        this.timer();
        /*axios.post(url).then(
                        res=>{
                        this.phonedata=res.data;
                    })*/
      }
    },
    timer() {
      if (this.time > 0) {
        this.time--;
        this.btntxt = this.time + "s后重新获取";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "获取验证码";
        this.disabled = false;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.turn-back {
  font-size: 0.3rem;
  width: 100%;
  position: relative;
}

.turn-p {
  position: absolute;
  font-size: 0.23rem;
  top: 0.13rem;
  left: 0.4rem;
}

.van-icon-arrow-left {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
}

.login-mode {
  position: absolute;
  width: 100%;
  top: 0.8rem;
}

.login-h1 {
  font-family: '楷体';
  text-align: center;
  margin-bottom: 0.3rem;
  color: #bbb;
}
</style>
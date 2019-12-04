<template>
  <div class="header-com">
    <div class="wrap">
      <div class="left-area">
        <img class="img" src="../../../public/images/logo.png" />
      </div>
      <div class="middle-area"></div>
      <div class="right-area">
        <!-- 中英文切换 -->
        <div class="toggle-lag">
          <i class="lag le" v-show="currentLanguage=='le'" @click.stop="toggleCountry('le')"></i>
          <i class="lag zh" v-show="currentLanguage=='zh'" @click.stop="toggleCountry('zh')"></i>
        </div>
        <!-- 导航-->
        <div class="menu-area" @click="toggleMenu">
          <div class="btn-wrap">
            <div class="btn"></div>
          </div>
          <ul class="list" :class="{active:selectFlag}">
            <router-link tag="li" class="item" to="/home">
              <i class="iconfont iconshouye1"></i>
              {{currentData[language][0]}}
            </router-link>
            <router-link tag="li" class="item" to="/solutions">
              <i class="iconfont iconwen-hao"></i>
              {{currentData[language][1]}}
            </router-link>
            <router-link tag="li" class="item" to="/about">
              <i class="iconfont iconlianxiwomen"></i>
              {{currentData[language][2]}}
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import minxinLocalStorage from "../../common/minxinLocalStorage.js";
export default {
  mixins: [minxinLocalStorage],
  data() {
    return {
      currentData: {
        zh: ["首页", "解决方案", "关于我们"],
        le: ["HOME", "SOLUTIONS", "COMPANY"]
      },
      selectFlag: false,
      currentLanguage: "le"
    };
  },
  created() {
    this.currentLanguage = localStorage.getItem("language");
  },
  methods: {
    toggleCountry(language) {
      let target = language == "zh" ? "le" : "zh";
      localStorage.setItem("language", target);
      this.currentLanguage = localStorage.getItem("language");
      this.$emit("changeLanguage", this.currentLanguage);
    },
    toggleMenu() {
      this.selectFlag = !this.selectFlag;
      console.log(this.selectFlag, "this.selectFlag ");
    }
  }
};
</script>

<style lang="scss" scoped>
.header-com {
  background: #1f1f1f;
  .wrap {
    display: flex;
    height: 56px;
    align-items: center;
    .left-area {
      margin-left: 16px;
      width: 100px;
      .img {
        width: 77.5px;
        height: 15px;
      }
    }
    .middle-area {
      flex: 1;
    }
    .right-area {
      width: 220px;
      display: flex;
      justify-content: flex-end;
      .toggle-lag {
        padding: 0 10px;
        height: 56px;
        display: flex;
        align-items: center;
        .lag {
          display: inline-block;
          width: 19px;
          height: 19px;
          &.le {
            background: url("../../../public/images/le.png");
            background-size: 19px 19px;
          }
          &.zh {
            background: url("../../../public/images/zh.png");
            background-size: 19px 19px;
          }
        }
      }
      .menu-area {
        position: relative;
        .btn-wrap {
          display: flex;
          align-items: center;
          .btn {
            padding: 0 15px;
            width: 20px;
            height: 56px;
            background: url("../../../public/images/menu.png");
            background-size: 20px 15px;
            background-repeat: no-repeat;
            background-position: center;
          }
        }
        .list {
          position: absolute;
          width: 130px;
          height: 161px;
          top: 56px;
          left: -81px;
          background: url("../../../public/images/menu-bg.png");
          background-size: 130px 161px;
          background-repeat: no-repeat;
          z-index: 3;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateX(100%);
          &.active {
            opacity: 1;
            transform: translateX(0);
          }
          .item {
            display: block;
            color: #fff;
            font-size: 12px;
            height: 44px;
            line-height: 44px;
            text-align: left;
            padding: 0 15px;
            .iconfont {
              margin-right: 6px;
              color: #fff;
            }
            .iconlianxiwomen {
              font-size: 10px;
            }
            &:first-child {
              margin-top: 16px;
            }
            &.router-link-active {
              color: #17daa3;
            }
          }
        }
      }
    }
  }
}
</style>
<template>
  <div class="home-page">
    <myHead @changeLanguage="changeLanguage"></myHead>
    <section class="time-section">
      <img class="img" src="../../public/images/home-1-bg.png" />
      <h3 class="title3">{{currentData[language].timeTitle}}</h3>
    </section>
    <section class="product-section">
      <h3 class="title-3">{{currentData[language].productTitle1}}</h3>
      <ul class="list clearfix">
        <li class="item" :key="index" v-for="(item, index) in currentData[language].productList">
          <div class="iconfont iconfont-item" :class="item.icon"></div>
          <h3 class="title-3">{{item.title}}</h3>
          <p class="text" :class="{active:moreFlat}">{{item.content}}</p>
        </li>
      </ul>
      <div class="more-text" v-if="!moreFlat" @click="ViewMore">
        <div class="more-btn btn">{{currentData[language].timeBtnText}}</div>
      </div>
    </section>

    <section class="contact-section">
      <h3 class="title-3">{{currentData[language].contactTitle}}</h3>
    </section>
    <section class="footer-section">
      <ul class="list">
        <li class="item" :key="index" v-for="(child, index) in currentData[language].contactList">
          <div class="left-area">
            <div class="iconfont iconfont-item left" :class="child.icon"></div>
          </div>
          <div class="right-area">
            <h3 class="title-5">{{child.title}}</h3>
            <p class="text">{{child.content}}</p>
            <address class="address">{{child.mail}}</address>
            <address class="address">{{child.phone}}</address>
          </div>
        </li>
      </ul>
      <div class="company-info">{{currentData[language].foootInfo}}</div>
    </section>
  </div>
</template>

<script>
import myHead from "@/components/header/header";
import minxinLocalStorage from "../common/minxinLocalStorage.js";
export default {
  mixins: [minxinLocalStorage],
  data() {
    return {
      currentData: {
        zh: {
          timeTitle: "运用大数据和人工智能技术，助力信用生活",
          timeBtnText: "查看更多",
          productTitle1: "我们的产品",
          productTitle3: "专业/高效/智能化的产品",
          productList: [
            {
              title: "AITIME数据",
              icon: "iconshujuzhongxin",
              content: "打通线上、线下高质量数据,数万 维度刻画信用风险画像。"
            },
            {
              title: "AITIME引擎",
              icon: "icon1huojian",
              content:
                "海量数据,实时处理,秒级决策,驱 动大数据智能化的信用风险决策。"
            },
            {
              title: "AITIME风控",
              icon: "iconwufengxian",
              content:
                "风控决策贯穿用户借贷的整个周期，深入贷前、贷中、贷后，构建全面有效的风控系统。"
            },
            {
              title: "AITIME卫士",
              icon: "iconxingzhuang",
              content:
                "为客户提供反欺诈服务，通过三重检测以验证申请人数据中的不匹配情况，从而降低欺诈性申请率。"
            }
          ],
          contactTitle: "联系我们",
          contactList: [
            {
              title: "市场合作",
              icon: "iconmianxinggouwuche left",
              content: "媒体采访、品牌合作、市场合作,想了解AITIME,欢迎联系我们",
              mail: "邮箱：chenfang@aitime.credit ",
              phone: "电话：+86 17155944982"
            },
            {
              title: "商务合作",
              icon: "iconbangongshenling right",
              content: "商务合作，我们渴望创新，期盼合作。",
              mail: "邮箱：chenfang@aitime.credit ",
              phone: "电话：+86 17155944982"
            }
          ],
          foootInfo: "有关 AITIME 的服务，请参阅服务条款、隐私和安全声明"
        },
        le: {
          timeTitle:
            "Next-generation big data and artificial intelligence technology to empower and transform your lifestyle",
          timeBtnText: "Learn more",
          productTitle1: "PRODUCTS",
          productTitle3:
            "Deep domain expertise | Speed for execution | Commitment to intelligence",
          productList: [
            {
              title: "AITIME DATA",
              icon: "iconshujuzhongxin",
              content:
                "Through online,offline high-value data,thousands of dimensions to poytray credit risk portraits."
            },
            {
              title: "AITIME ENGINE",
              icon: "icon1huojian",
              content:
                "Credit Decision Engine.Massive data,real-time processing,second-level decision-making;driving credit risk decision-making for big data intelligence."
            },
            {
              title: "AITIME RISK CONTROL",
              icon: "iconwufengxian",
              content:
                "The risk control decision runs through the entire cycle of user lending.building a comprehensive and effective risk control system on the whole loan process."
            },
            {
              title: "AITIME GUARDIAN",
              icon: "iconxingzhuang",
              content:
                "Guardian provides anti-fraud detection services to be used . The trifecta of identity verification, employment data validation, and credit history are used to detect mismatches in the applicant's data, thus lowering the fraudulent application rate."
            }
          ],
          contactTitle: "CONTACT US",
          contactList: [
            {
              title: "Market Cooperation",
              icon: "iconmianxinggouwuche",
              content:
                "Media interviews,brand cooperation, market cooperation, want to know about AITIME, welcome to contact us. ",
              mail: "mailbox：chenfang@aitime.credit ",
              phone: "Tel：+86 17155944982"
            },
            {
              title: "Business Cooperation",
              icon: "iconbangongshenling right",
              content:
                "Business cooperation, we are eager to innovate and look forward to cooperate.",
              mail: "mailbox：chenfang@aitime.credit ",
              phone: "Tel：+86 17155944982"
            }
          ],
          foootInfo:
            "© AITIME Please find the Terms of Service and Privacy and Security Statement regarding AITIME's service"
        }
      },
      moreFlat: false
    };
  },
  created() {
    console.log(this.language);
  },
  methods: {
    changeLanguage(lang) {
      this.language = lang;
    },
    ViewMore() {
      this.moreFlat = true;
    }
  },
  components: {
    myHead
  }
};
</script>

<style lang="scss" scoped>
.home-page {
  position: relative;
  .time-section {
    position: relative;
    .img {
      display: block;
      max-width: 100%;
      border: none;
      outline: none;
    }
    .title3 {
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      width: 300px;
      margin: 0 auto;
      line-height: 22px;
      font-weight: 100;
      font-size: 12px;
      color: #fff;
    }
  }

  .product-section {
    > .title-3 {
      margin-top: 26px;
      position: relative;
      font-size: 18px;
      color: #576671;
      text-align: center;
      font-weight: 100;
      padding-bottom: 9px;

      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
    .list {
      display: flex;
      padding-top: 18px;
      flex-wrap: wrap;
      justify-content: center;
      .item {
        width: 48%;
        box-sizing: border-box;
        margin-bottom: 36px;
        padding: 0 15px;
        .iconfont-item {
          display: block;
          transition: all 0.3s ease;
          width: 53px;
          height: 53px;
          margin: 0 auto;
          line-height: 53px;
          border-radius: 50%;
          color: #87949e;
          background: rgba(135, 145, 158, 0.15);
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: #17daa3;
          &:hover {
            color: #fff;
            background: #17daa3;
          }
        }
        .title-3 {
          font-size: 14px;
          color: #000000;
          padding: 24px 0 16px;
          text-align: center;
          font-weight: 500;
          margin: 0 -15px;
        }
        .text {
          font-size: 12px;
          color: #87949e;
          margin: 0 auto;
          line-height: 22px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //行数
          -webkit-box-orient: vertical;
          &.active {
            display: initial;
            overflow: initial;
            text-overflow: initial;
            -webkit-line-clamp: initial;
            -webkit-box-orient: initial;
          }
        }
      }
    }
    .more-text {
      text-align: center;
      padding-bottom: 42px;
      .more-btn {
        display: inline-block;
        width: 80px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #36ddaa;
        font-size: 12px;
        text-align: center;
        color: #17daa3;
        border-radius: 15px;
        text-decoration: none;
        margin: 0 autp;
      }
    }
  }
  .contact-section {
    padding-bottom: 30px;
    > .title-3 {
      position: relative;
      font-size: 18px;
      color: #576671;
      text-align: center;
      padding-bottom: 10px;
      font-weight: 100;
      &::before {
        content: " ";
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 1px;
        background: #17daa3;
      }
    }
  }
  .footer-section {
    background: #edeff1;
    .list {
      padding-top: 36px;
      .item {
        margin-bottom: 70px;
        .iconfont-item {
          width: 47px;
          height: 47px;
          line-height: 47px;
          text-align: center;
          font-size: 19px;
          border: 1px solid #17daa3;
          color: #17daa3;
          background: #fff;
          border-radius: 50%;
        }
        .left-area {
          .iconfont-item.left {
            box-sizing: border-box;
            padding-right: 6px;
            margin: 0 auto;
          }
          .iconfont-item.right {
            box-sizing: border-box;
            padding-left: 10px;
          }
        }
        .right-area {
          .title-5 {
            font-size: 18px;
            padding-top: 22px;
            padding-bottom: 25px;
            color: #576671;
            text-align: center;
            font-weight: 500;
            text-align: center;
          }
          .text {
            font-size: 12px;
            color: #87949e;
            font-weight: 100;
            width: 250px;
            line-height: 22px;
            margin: 0 auto;
            text-align: center;
            padding-bottom: 22px;
          }
          .address {
            font-size: 12px;
            color: #87949e;
            line-height: 25px;
            font-style: inherit;
            font-weight: 100;
            text-align: center;
          }
        }
      }
    }
    .company-info {
      height: 30px;
      line-height: 30px;
      background: #15c492;
      color: #fff;
      font-size: 8px;
      text-align: center;
    }
  }
}
</style>

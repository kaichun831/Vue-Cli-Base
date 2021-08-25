<template>
  <!-- <ul>
      <li>訂閱電子報</li>
      <li>關注我們</li>
      <li>聯絡我們</li>
      <li>廣告查詢</li>
      <li>版權說明</li>
    </ul> -->
  <div class="header">
    <div class="left">
      <!-- <img src="../assets/logo/final.png" /> -->
      <!-- <span class="span2">胡鬧時請注意音量!</span> -->
    </div>
    <div class="right">
      <!-- <button @click="routerToLogin">登入</button> -->
      <ul class="link-area1">
        <li class="link-li">
          <a
            href="#"
            @mouseover="hover[0] = true"
            @mouseleave="hover[0] = false"
            >{{ home }}</a
          >
        </li>
        <li class="link-li">
          <a
            href="#"
            @mouseover="hover[1] = true"
            @mouseleave="hover[1] = false"
            >{{ news }}</a
          >
        </li>
        <li class="link-li">
          <a
            href="#"
            @mouseover="hover[2] = true"
            @mouseleave="hover[2] = false"
            >{{ practise }}</a
          >
        </li>
        <li class="link-li">
          <a
            href="#"
            @mouseover="hover[3] = true"
            @mouseleave="hover[3] = false"
            >{{ shop }}</a
          >
        </li>
        <li class="link-li">
          <img src="https://image.flaticon.com/icons/png/512/482/482631.png" />
        </li>
        <!-- <li><a href="#" @mouseover="hover = true" @mouseleave="hover = false">{{聯絡我們}}</a></li> -->
        <!-- <li>
            <a href="#">
              <img
                src="https://image.flaticon.com/icons/png/512/1384/1384015.png"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://image.flaticon.com/icons/png/512/1384/1384015.png"
              />
            </a>
          </li>
          <li>
            <a href="#">
              <img
                src="https://image.flaticon.com/icons/png/512/1384/1384015.png"
              />
            </a>
          </li> -->
      </ul>
    </div>
  </div>
  <!-- <hr /> -->
</template>

<script>
export default {
  methods: {
    routerToLogin() {
      this.$router.push("/login");
    },
  },
  data() {
    return {
      hover: [false, false, false, false],
    };
  },
  computed: {
    home() {
      if (this.hover[0]) {
        return "回到首頁";
      } else {
        return "Home";
      }
    },
    news() {
      if (this.hover[1]) {
        return "最新消息";
      } else {
        return "News";
      }
    },
    practise() {
      if (this.hover[2]) {
        return "嘗試練習";
      } else {
        return "Practise";
      }
    },
    shop() {
      if (this.hover[3]) {
        return "Gill選物";
      } else {
        return "Shop";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  margin: 5px 0px;
  // display: flex;
  display: inline-flex;
  align-items: center;
  align-content: space-between;
  .left {
    // width: 40%;
    img {
      padding-left: 5px;
      width: 300px;
    }
    // span {
    //   height: 100%;
    //   margin-left: 10px;
    // }
  }
  .right {
    position: relative;
    width: 100%;
    button {
      position: absolute;
      right: 0;
    }
    .link-area1 {
      text-align: end;
      list-style: none;
      .link-li {
        display: inline;
        margin: 0 20px;
        a {
          font-family: Arial, Helvetica, sans-serif;
          // font-weight: bold;
          // letter-spacing: 5px;
          color: black;
          text-decoration: none;
          &:link {
            color: green;
            background-color: transparent;
            text-decoration: none;
          }
          &:visited {
            color: black;
            background-color: transparent;
            text-decoration: none;
          }

          &:hover {
            color: blue;
            background-color: transparent;
            text-decoration: none;
          }

          &:active {
            color: yellow;
            background-color: transparent;
            text-decoration: underline;
          }
        }
      }
      img {
        width: 15px;
        height: 15px;
      }
    }
  }
}
hr {
  border: 1px solid gray;
}

@media only screen and (min-width: 321px) and (max-width: 768px) {
  .header {
    width: 100%;
    margin: 5px 0px;
    // display: flex;
    display: block;
    align-items: center;
    text-align: center;
    // align-content: space-between;
  }
}
</style>

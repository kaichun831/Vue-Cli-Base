<template>
  <div class="footer-container">
    <div class="left">
      <h3>請注意 ! News</h3>
      <p>馬上訂閱 不錯過任何即時訊息！</p>
      <h3>聯絡我們 合作邀約</h3>
      <p>tajilida2020@gmail.com</p>
    </div>
    <div class="right">
      <div class="rigt-content">
        <img
          src="https://image.flaticon.com/icons/png/512/3022/3022251.png"
          width="30"
          height="30"
        />
        <input type="text" placeholder="請輸入您的電子郵件" />
        <button>訂閱</button>
      </div>
      <div>
        <ul>
          <li>
            <img
              src="https://image.flaticon.com/icons/png/512/3616/3616288.png"
              width="30"
              height="30"
            />
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/png/512/3616/3616288.png"
              width="30"
              height="30"
            />
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/png/512/3616/3616288.png"
              width="30"
              height="30"
            />
          </li>
          <li>
            <img
              src="https://image.flaticon.com/icons/png/512/3616/3616288.png"
              width="30"
              height="30"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
}
.footer-container {
  margin-top: 30px;
  width: 100%;
  height: 180px;
  background: #f3f3f3;
  justify-content: center;
  align-items: center;
  display: flex;
  ul {
    margin-top: 15px;
    list-style: none;
    li {
      display: inline;
      padding: 5px;
    }
  }
  .left {
    padding: 15px;
  }
  .right {
    padding: 15px;
    .rigt-content {
      display: flex;
      align-items: center;
      input {
        border: 0;
        background: #f3f3f3;
        border-bottom: 1px solid #ccc;
        &:focus {
          outline: none;
        }
      }
      img {
        margin: 5px;
      }
      button {
        margin: 5px;
      }
    }
  }
  h3 {
    padding: 5px 0 5px 0;
    font-size: 15px;
  }
  p {
    padding: 2px 0 2px 0;
    font-size: 12px;
  }
}
</style>

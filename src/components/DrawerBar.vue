<template>
  <div
    class="drawer-container"
    :style="{ width: containerWidth + '%', minWidth: minWidthSize + 'px' }"
  >
    <div class="drawer-top" :style="{ textAlign: menuPosition }">
      <svg class="drawer-menu" @click="hideView">
        <use
          :xlink:href="
            require('remixicon/fonts/remixicon.symbol.svg') + `#ri-menu-line`
          "
        />
      </svg>
    </div>
    <div
      @click="routerView(backStageItems.router[index])"
      class="drawer-item"
      v-show="!isHide"
      v-for="(item, index) in backStageItems.title"
      :key="item.id"
    >
      <svg class="svg">
        <use
          :xlink:href="
            require('remixicon/fonts/remixicon.symbol.svg') +
            `#ri-${backStageItems.icon[index]}`
          "
        />
      </svg>
      <p>{{ backStageItems.title[index] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHide: true,
      containerWidth: 3,
      menuPosition: "center",
      minWidthSize: 50,
      backStageItems: {
        icon: [
          "home-7-line",
          "article-line",
          "eye-fill",
          "eye-fill",
          "eye-fill",
        ],
        title: ["首頁", "新增文章", "發佈中文章", "編輯中文章", "刪除中文章"],
        router: [
          "/index2",
          "/backStage",
          "/backStage/realease",
          "/backStage/preview",
          "/backStage/trash",
        ],
      },
    };
  },
  methods: {
    hideView() {
      this.isHide = !this.isHide;
      if (this.isHide) {
        this.containerWidth = 3;
        this.menuPosition = "center";
        this.minWidthSize = 50;
      } else {
        this.containerWidth = 20;
        this.menuPosition = "end";
        this.minWidthSize = 180;
      }
    },
    routerView(value) {
      this.$router.push(value);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.drawer-container {
  height: 100%;
  //   position: fixed;
  box-shadow: black 1px 1px;
  .drawer-top {
    width: 100%;
    text-align: end;
    .drawer-menu {
      width: 25px;
      height: 25px;
      padding: 5px;
    }
  }

  .drawer-item {
    width: 100%;
    display: flex;
    align-items: center;
    min-width: 100px;
    .svg {
      width: 25px;
      height: 25px;
      padding-top: 3px;
      padding-bottom: 3px;
      margin-left: 15px;
    }
    p {
      width: 100%;
      padding: 5px;
    }
    &:hover {
      background: rgb(175, 197, 238);
    }
  }
}
</style>

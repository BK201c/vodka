<template>
  <i v-if="isExternal" class="v-icon" :class="iconName" v-on="$listeners"></i>
  <svg v-else aria-hidden="true" class="icon v-icon" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
import "@/icons/iconfont.js";
export default {
  name: "v-icon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
  },
  computed: {
    isExternal() {
      return this.iconClass.startsWith("el-icon");
    },

    iconName() {
      return `${this.isExternal ? "" : "#"}${this.iconClass}`;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.v-icon {
  font-size: 22px;
  color: #4c4c4c;
  &:hover {
    cursor: pointer;
  }
}
</style>

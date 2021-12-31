<template>
  <div class="nav">
    <div class="container">
      <a href="#" @click.prevent="deliverClassHanhle('mytasks')">My Tasks</a>
      <a href="#" @click.prevent="deliverClassHanhle('inprogress')"
        >In Progress</a
      >
      <a href="#" @click.prevent="deliverClassHanhle('completed')">Completed</a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'navarea',
  methods: {
    deliverClassHanhle (cls) {
      this.$emit('pdeliverClassHanhle', cls)
    }
  }
}
</script>
<style lang="scss">
@import '../scss/base';
.nav {
  background-color: $main_light;
  .container {
    display: flex;
    a {
      width: 33.3%;
      text-align: center;
      font-weight: 500;
      color: $main;
      padding: 24px 0;
      font-size: 24px;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        width: 72%;
        height: 5px;
        bottom: 0;
        background-color: $main;
        opacity: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      &.router-link-active {
        color: #fff;
        &::after {
          opacity: 1;
        }
      }
    }
  }
}
</style>

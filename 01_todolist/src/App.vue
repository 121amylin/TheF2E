<template>
  <div id="app">
    <div class="nav">
      <div class="container">
        <router-link to="/mytasks">My Tasks</router-link>
        <router-link to="/inprogress">In Progress</router-link>
        <router-link to="/completed">Completed</router-link>
      </div>
    </div>
    <div class="wrap">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

@import './scss/base';
#app {
  font-family: 'Roboto', sans-serif;
  background-color: $grey_light;
  min-height: 100vh;
}
.wrap {
  padding: 24px 20px;
}
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

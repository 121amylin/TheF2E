<template>
  <div class="container">
    <div class="add_item">
      <label for="add">
        <span>+</span>
        <input id="add" type="text" placeholder="Add Task" />
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../scss/base';
.add_item {
  position: relative;
  width: 100%;
  font-size: 24px;
  color: $grey;
  margin-bottom: 24px;
  span {
    position: absolute;
    left: 28px;
    transform: translateY(-50%);
    top: 46%;
    font-size: 36px;
    font-weight: 300;
  }
  input {
    width: 100%;
    padding:8px 20px 10px 56px;
    border:2px solid $grey;
    border-radius: 5px;
    box-shadow: none;
    &::placeholder {
      color: $grey;
    }
  }
}
</style>

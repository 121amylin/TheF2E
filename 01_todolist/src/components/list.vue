<template>
  <div class="container">
    <ul class="list">
      <li v-for="item in list" :key="item.id">
        <input class="check" type="checkbox" />
        <div class="content">
          <h3>{{ item.title }}</h3>
          <p class="into">
            <span v-if="item.time"
              ><i class="far fa-calendar-alt"></i
              ><span class="item">{{ item.time }}</span></span
            >

            <span v-if="item.file"><i class="far fa-sticky-note"></i></span
            ><span v-if="item.msg"><i class="far fa-comment-dots"></i></span>
          </p>
        </div>
        <div class="note">
          <div class="icon star">
            <i v-if="item.sart" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
          </div>
          <div class="icon edit">
            <i class="far fa-pen"></i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          id: 0,
          title: 'Type Something Here…',
          time: '2021-05-06',
          file: '',
          msg: '123',
          sart: false,
          end: false
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/base';
.list {
  padding-left: 0;
  list-style: none;
  li {
    background-color: $grey_white;
    display: flex;
    padding: 20px 24px;
    border-radius: 5px;
    font-size: 24px;
    .check {
      width: 24px;
      height: 24px;
      margin-top: 4px;
      margin-right: 16px;
      background-color: $light;
    }
    .content {
      flex: 1 1 0;
      h3 {
        margin: 0;
      }
    }
    .into {
      margin-top: 14px;
      margin-bottom: 0;
      font-size: 18px;
      color: $grey_dark;
      span {
        display: inline-block;
        padding: 0 8px;
        .item {
          padding-right: 4px;
        }
      }
    }
    .note {
      display: flex;
      .icon {
        + .icon {
          padding-left: 32px;
        }
      }
    }
  }
}
</style>

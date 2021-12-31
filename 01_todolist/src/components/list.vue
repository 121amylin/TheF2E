<template>
  <div class="container">
    <ul class="list">
      <li v-for="item in pdate" :key="item.id">
        <div v-if="item.id !== presivedID" class="main">
          <input
            class="check"
            type="checkbox"
            :checked="item.complete"
            @click="chechHandle(item.id)"
          />
          <div class="content">
            <h3 :class="{ complete_del: item.complete }">{{ item.title }}</h3>
            <p class="into">
              <span v-if="item.endtime"
                ><i class="far fa-calendar-alt"></i
                ><span class="item">{{ item.endtime }}</span></span
              >
              <br />
              <span v-if="item.file"
                ><i class="far fa-sticky-note"></i
                ><span class="item">{{ item.file }}</span></span
              >
              <br />
              <span v-if="item.msg"
                ><i class="far fa-comment-dots"> </i
                ><span class="item">{{ item.msg }}</span></span
              >
            </p>
          </div>
          <div class="note">
            <div class="icon star" @click="starHandle(item.id)">
              <i v-if="item.star" class="fas fa-star"></i>
              <i v-else class="far fa-star canclick"></i>
            </div>
            <div
              class="icon edit"
              @click="editHandle({ ID: item.id, tit: item.title })"
            >
              <i class="far fa-pen canclick"></i>
            </div>
          </div>
        </div>
        <edit v-else></edit>
      </li>
    </ul>
  </div>
</template>
<script>
import edit from '@/components/edit.vue'

export default {
  props: ['pdate', 'presivedID', 'paddValue'],
  components: { edit },
  data () {
    return {}
  },
  methods: {
    editHandle (value) {
      this.$emit('peditHandle', value)
    },
    chechHandle (id) {
      this.$store.commit('complete_item', id)
    },
    starHandle (id) {
      console.log(id)
      this.$store.commit('star_item', id)
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
    margin-bottom: 24px;
    .main {
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
          &.complete_del {
            text-decoration: line-through;
          }
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
}
</style>

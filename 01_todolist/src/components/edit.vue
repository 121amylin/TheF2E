<template>
  <div class="edit_component">
    <div class="edit_titlearea">
      <div class="container">
        <input class="check" type="checkbox" />
        <div class="edit_content">
          <h3>
            <input
              v-focus
              class="msgtit"
              type="text"
              name="tit"
              id="tit"
              @input="tit_handle($event)"
            />
          </h3>
        </div>
        <div class="note">
          <div class="icon star" @click="toggleDefaultStar">
            <i v-if="defaultStar" class="fas fa-star"></i>
            <i v-else class="far fa-star"></i>
          </div>
          <div class="icon edit">
            <i class="far fa-pen"></i>
          </div>
        </div>
      </div>
    </div>

    <div class="edit_content">
      <div class="container">
        <div class="row">
          <div class="tit"><i class="far fa-calendar-alt"></i>Deadline</div>
          <input
            type="date"
            name="end_time"
            id="end_time"
            @input="end_time_handle($event)"
          />
        </div>
        <div class="row">
          <div class="tit"><i class="far fa-sticky-note"></i>File</div>
          <input type="file" name="" id="" @input="file_url_handle($event)" />
        </div>
        <div class="row">
          <div class="tit"><i class="far fa-comment-dots"></i>Comment</div>
          <textarea
            name="comment"
            id="comment"
            cols="30"
            rows="10"
            @input="msg_text_handle($event)"
          ></textarea>
        </div>
      </div>
    </div>
    <div class=" fillrow">
      <div class="container">
        <a class="btn cancelbtn" href="javascript:;"><span>+</span>Cancel</a>
        <a class="btn addbtn" href="javascript:;" @click="revisedList"
          ><span>+</span>Add Task</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

export default {
  props: [],
  data () {
    return {
      defaultStar: false,
      tit: '',
      end_time: '',
      file_url: '',
      msg_text: ''
    }
  },
  methods: {
    toggleDefaultStar () {
      this.defaultStar = !this.defaultStar
    },
    tit_handle ($event) {
      this.tit = event.currentTarget.value
    },
    end_time_handle ($event) {
      this.end_time = event.currentTarget.value
    },
    file_url_handle ($event) {
      this.file_url = event.currentTarget.value
    },
    msg_text_handle ($event) {
      this.msg_text = event.currentTarget.value
    },

    revisedList () {
      const obj = {
        id: new Date().getTime(),
        title: this.tit,
        endtime: this.end_time,
        file: this.file_url,
        msg: this.msg_text,
        star: this.defaultStar,
        complete: false
      }
      this.$store.commit('change_temObj', obj)
      this.$store.commit('add_list')
      this.$store.commit('toggle_isEdit', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/base';
.container {
  background-color: $grey_white;
}

.edit_component {
  border-radius: 5px;
}
.row {
  padding: 12px 72px 12px 100px;
  .tit {
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 8px;
    margin-left: -28px;
    i {
      margin-right: 8px;
    }
  }
}
input {
  border: none;
  padding: 8px;
  + input {
    margin-left: 10px;
  }
}
.msgtit {
  background-color: transparent;
  box-shadow: none;
  outline: none;
  padding: 0;
}
textarea {
  width: 100%;
  border: none;
}
.fillrow {
  .container {
    display: flex;
    padding: 0;
  }
  a {
    font-size: 24px;
    display: block;
    padding: 8px;
  }
  .btn {
    width: 50%;
    text-align: center;
    span {
      font-size: 38px;
      font-weight: 300;
      vertical-align: -4px;
      display: inline-block;
      margin-right: 8px;
    }
  }
  .cancelbtn {
    background-color: $light;
    color: $sec;
    span {
      transform: rotate(45deg);
    }
  }
  .addbtn {
    background-color: $main_light;
    color: $light;
  }
}
.edit_content {
  flex: 1 1 0;
  .container {
    border-top: 2px solid $grey;
    padding: 12px 0;
  }
  h3 {
    margin: 0;
  }
}

.edit_titlearea {
  .container {
    display: flex;
    padding: 20px 24px;
    border-radius: 5px;
    font-size: 24px;
  }

  .check {
    width: 24px;
    height: 24px;
    margin-top: 4px;
    margin-right: 16px;
    background-color: $light;
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
</style>

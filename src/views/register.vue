<template>
<div>
  <mt-field ref="nick" label="昵称" v-model="nickname" placeholder="请输入昵称"></mt-field>
  <mt-field label="生日" v-model="birthday" placeholder="请输入生日" type="date"></mt-field>
  <mt-field readonly label="性别" v-model="sex" placeholder="请输入性别" @click.native="chooseGender()">
  </mt-field>
  <mt-popup v-model="genderPopup" position="bottom" class="mint-popup-4">
    <mt-picker :slots="sexSlot" @change="onGenderChange"></mt-picker>
  </mt-popup>
</div>
</template>

<script type="application/ecmascript">
export default {
  name: 'register',
  data() {
    return {
      nickname: '',
      sex: '',
      birthday: '1998-01-01',
      genderPopup: false,
      sexSlot: [{
        flex: 1,
        values: ['男', '女'],
        className: 'slot1'
      }]
    };
  },
  methods: {
    chooseGender() {
      this.genderPopup = true;
    },
    onGenderChange(picker, values) {
      this.sex = values[0];
    }
  }
};
</script>
<style scoped lang='scss' rel="stylesheet/scss" type="text/css">
.mint-popup-4 {
    width: 100%;
    .picker-item,
    .picker-slot-wrapper {
        backface-visibility: hidden;
    }
}
</style>

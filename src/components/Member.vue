<style lang="less">
  @import '../css/main.less';

    .member{
      .add-btn{
        margin-top: .5rem;
        margin-bottom: .5rem;
      }
    }
</style>

<template>
  <div>
  <div v-transfer-dom>
    <popup v-model="isShowAdd" height="360px" is-transparent>
      <div style="width: 95%;background-color:#fff;height:340px;margin:0 auto;border-radius:5px;padding-top:10px;">
        <group title="添加成员">
          <x-input title="手机" placeholder="请输入手机" class="input-item" required v-model="phone">
          </x-input>
          <x-input title="名称" placeholder="请输入名称" class="input-item" required v-model="name">
          </x-input>
          <x-input title="密码" placeholder="请输入密码" class="input-item" required v-model="password">
          </x-input>
        </group>
        <div style="padding:20px 15px;">
          <x-button type="primary" class="pupup-btn" @click.native="save">确认</x-button>
          <x-button @click.native="isShowAdd = false">取消</x-button>
        </div>
      </div>
    </popup>
  </div>

  <div class="member">
    <x-button @click.native="openAdd" class="add-btn">添加成员</x-button>
    <group title="成员列表">
        <cell :title="el.name"  v-for="(el,index) in members" :key="el.phone">
          <span slot="inline-desc">手机:{{el.phone}}</span>
          <span class="vux-close" @click="delMember(index)"></span>
        </cell>
      </group>
  </div>
  </div>
</template>
<script>
  import {Group, Cell, XButton, XInput, Popup, TransferDom} from 'vux'
  import { MemberApi } from '../api'
  import { mapState } from 'vuex'
  import {AuthUtil, CommonUtil} from '../utils'
  export default {
    activated () {
      this.getMembers()
      this.$store.commit('updateHeader', {title: '成员管理', isShowBack: true})
    },
    directives: {
      TransferDom
    },
    components: {
      Group, Cell, XButton, XInput, Popup
    },
    methods: {
      delMember (index) {
        const el = this.members[index]
        const ctx = this
        // prompt形式调用
        this.$vux.confirm.show({
          // 组件除show外的属性
          async onCancel () {},
          async onConfirm () {
            CommonUtil.openLoading()
            await MemberApi.del({home_id: ctx.userInfo.home_id, phone: el.phone})
            CommonUtil.closeLoading()
            ctx.$store.commit('delMember', index)
            CommonUtil.sucToast(ctx, '删除成功', 500)
          },
          title: '操作提示',
          content: '是否确定操作？'
        })
      },
      async save () {
        if (this.phone === '') {
          CommonUtil.warnToast(this, '请输入号码')
          return
        }
        if (this.password === '') {
          CommonUtil.warnToast(this, '请输入密码')
          return
        }
        if (this.name === '') {
          CommonUtil.warnToast(this, '请输入名称')
          return
        }
        const postData = {phone: this.phone, password: this.password, name: this.name, home_id: this.userInfo.home_id}
        CommonUtil.openLoading()
        await MemberApi.add(postData)
        this.$store.commit('addMember', postData)
        this.isShowAdd = false
        CommonUtil.closeLoading()
        CommonUtil.sucToast(this, '添加成功', 500)
      },
      async getMembers () {
        CommonUtil.openLoading()
        const res = await MemberApi.list({home_id: this.userInfo.home_id})
        CommonUtil.closeLoading()
        this.$store.commit('updateMember', res.members)
      },
      resetParam () {
        this.phone = ''
        this.password = ''
        this.name = ''
      },
      openAdd () {
        this.resetParam()
        this.isShowAdd = true
      }
    },
    computed: {
      userInfo: () => AuthUtil.getUserInfo(),
      ...mapState({
        members: state => state.member.items
      })
    },
    data () {
      return {
        phone: '',
        password: '',
        name: '',
        isShowAdd: false
      }
    }
  }
</script>


<template>
  <section class="divShell">
    <dv-border-box-12 :color="['transparent', '#89FFE7']">
      <div class="title">
        <div></div>
        <p>{{viewTitle}}</p>
      </div>
      <div class="con">
        <slot></slot>
      </div>
    </dv-border-box-12>
  </section>
</template>

<script>
export default {
  name:'divShell',
  props:{
     viewTitle:{
      type: String,
      default: '默认标题'
     },
  },
  data() {
    return {
      
    }
  },
  created(){
    
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<style scoped lang="less">
  .divShell {
    // width: 250px;
    width: 100%;
    height: 100%;
    position: relative;
    background:rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    &::before{
      content: '';
      position: absolute;
      top: 1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: url('../assets/img/title-line.png') no-repeat center center;
    }
    &::after{
      content: '';
      position: absolute;
      bottom: 1px;
      left: 0;
      width: 100%;
      height: 1px;
      background: url('../assets/img/title-line.png') no-repeat center center;
    }
    & .title{
      width: 100%;
      height: 48px;
      font-size:16px;
      font-weight:bold;
      color:#B5EFFE;
      line-height: 48px;
      position: relative;
      padding: 0 20px;
      box-sizing: border-box;
      background:url("../assets/img/title-bg.png") no-repeat center center ;
      background-size: cover;
      display: flex;
      align-items: center;
      &>div{
        width: 12px;
        height: 12px;
        border-radius: 50%;
        margin-right: 14px;
        background-color: #C2D9F7;
        box-shadow:0px 0px 7px 0px rgba(185,239,255,0.61), 0px 2px 0px 0px rgba(250,251,255,0.68);
      }
    }
    & .con{
      height: ~'calc(100% - 48px)';
      padding: 0 20px;
      box-sizing: border-box;
      overflow: hidden;
    }
  }
</style>
<style>
.dv-border-box-12 .border-box-content{
  
}
</style>


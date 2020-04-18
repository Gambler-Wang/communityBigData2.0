<template>
  <section id="headerLogin">
    <div>
      <div class="left">
        <img src="../assets/img/logo.png" alt="">
        <h3>智慧社区大数据看板</h3>
      </div>
      <div class="right">
        <div class="community-btn">
           <el-select @change="changeCommunity"  v-model="communityCode"
                  placeholder="请选择社区">
              <el-option v-for="item of communityData" :key="item.keyValue" 
                :label="item.keyValue"
                :value="item.keyCode">
              </el-option>
            </el-select>
        </div>
        <div class="full-btn" @click="handleFullScreen">
          <i :class="(isFullScreen)?'el-icon-small':'el-icon-full'"></i>
          <span>{{(isFullScreen)?'退出全屏':'全屏'}}</span>
        </div>
        <div class="exit-btn" @click="exit">
          <i class="el-icon-switch-button"></i>
          退出
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name:'headerLogin',
  props:{
     
  },
  inject:['reload'],
  data() {
    return {
      communityCode:'YT-A2',
      communityData:[
        {
          keyCode: "YT-A2",
          keyValue: "元泰未来城",
        }
      ],
      isFullScreen:false,
    }
  },
  created(){
    
  },
  mounted() {

  },
  methods: {
    changeCommunity(){

    },
    handleFullScreen(){
      if(this.isFullScreen){
        this.$exitFullScreen();
        this.isFullScreen=false;
      }else{
        this.$fullScreen();
        this.isFullScreen=true;
      }
    },
    exit(){
      this.$exitFullScreen();
      window.location.href='https://www.xhuachina.com:8443/smartcommunity/index.html';
    }
  }
}
</script>

<style scoped lang="less">
  #headerLogin {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 30px;
    &>div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      &>div{
        display: flex;
        align-items: center;
        &.left{
          img{
            width: 84px;
            height: 31px;
            margin-right: 16px;
          }
          h3{
            color: #B5EFFE;
            font-size: 22px;
            font-weight: normal;
          }
        }
        &.right{
          color: #B5EFFE;
          &>div{
            margin-right: 40px;
            cursor: pointer;
            &:nth-last-of-type(1){
              margin-right: 0;
            }
            &.full-btn{
              &:hover{
                opacity: 0.8; 
                transition: all .2s;
              }
            }
            &.exit-btn{
              &:hover{
                opacity: 0.8; 
                transition: all .2s;
              }
            }
          }
        }
      }
    }
  }
</style>
<style>
#headerLogin .community-btn .el-input__inner{
  background: transparent;
  border-color: transparent;
  width: 168px;
  height: 43px;
  color: #B5EFFE;
}
#headerLogin .community-btn .el-select__caret.el-input__icon{
  color: #B5EFFE;
}
</style>


<template>
  <section id="checkStatic">
    <divShell viewTitle="巡检统计">
      <div class="info">
        <div>
          <div>
            <p>当前系统</p>
            <p>巡检线路</p>
          </div>
          <p>
            <animated-number 
              :value="loadInsTotal.lineTotal" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
        <div>                       
          <div>
            <p>当前系统</p>
            <p>巡检计划</p>
          </div>
          <p>
            <animated-number 
              :value="loadInsTotal.planTotal" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
      </div>
      <div class="static">
        <div class="complate-box">
          <div>
            <!-- 满状态76px -->
            <div class="unfinished" :style="'height:'+(1-loadInsTotal.dateUncheckSpot/loadInsTotal.dateAllSpot)*76+'px'"></div>
            <div class="finished" :style="'height:'+(loadInsTotal.dateUncheckSpot/loadInsTotal.dateAllSpot)*76+'px'"></div>
          </div>
          <div>
            <p>每日任务</p>
            <div>{{'已检'+loadInsTotal.dateCheckSpot}}</div>
            <div>{{'未检'+loadInsTotal.dateUncheckSpot}}</div>
            <div>{{'全部'+loadInsTotal.dateAllSpot}}</div>
          </div>
        </div>
        <div class="abnormal-box">
          <div>
            <!-- 满状态76px -->
            <div class="normal" :style="'height:'+(1-loadInsTotal.spotAbnormal/loadInsTotal.spotAll)*76+'px'"></div>
            <div class="abnormal" :style="'height:'+(loadInsTotal.spotAbnormal/loadInsTotal.spotAll)*76+'px'"></div>
          </div>
          <div>
            <p>点位状态</p>
            <div>{{'异常'+loadInsTotal.spotAbnormal}}</div>
            <div>{{'正常'+loadInsTotal.spotNormal}}</div>
            <div>{{'全部'+loadInsTotal.spotAll}}</div>
          </div>
        </div>
      </div>
      <div class="list">
        <scroll  v-if="listData.length>=3" :data="listData" :class-option="optionSingleHeight">
            <ul>
                <li v-for="(item,index) in listData" :key="index">
                  <span>{{item.recordTime}}</span>
                  <span>{{item.userName}}</span>
                  <span>{{item.placeName}}</span>
                </li>
            </ul>
        </scroll>
        <ul v-if="listData.length<3">
            <li v-for="(item,index) in listData" :key="index">
              <span>{{item.recordTime}}</span>
              <span>{{item.userName}}</span>
              <span>{{item.placeName}}</span>
            </li>
            <li v-if="listData.length==0">
              <span>今日暂无巡检</span>
            </li>
        </ul>
      </div>
    </divShell>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
import scroll from 'vue-seamless-scroll'
import divShell from './divShell.vue';
export default {
  name:'checkStatic',
  components:{
    divShell,
    AnimatedNumber,
    scroll
  },
  props:['loadInsTotal'],
  data() {
    return {
     listData:[
      //  {
      //    time:'01-14 12:23:41',
      //    name:'周小琪',
      //    area:'4号巡检点'
      //  },
     ]
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          singleHeight: 28,
          limitMoveNum: this.listData.length,
          waitTime: 1500
        }
    }
  },
  watch:{
    loadInsTotal(){
      this.listData=this.loadInsTotal.insRecordList ;
    }

  },
  created(){
    this.listData=this.loadInsTotal.insRecordList ;
  },
  mounted() {
    this.$nextTick(()=>{
      
    })
  },
  methods: {
    
  }
}
</script>

<style scoped lang="less">
  #checkStatic {
    width: 100%;
    height: 100%;
    position: relative;
    & .info{
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      &>div{
        width: 50%;
        display: flex;
        // margin-right: 74px;
        &>div{
          margin-right: 14px;
          &>p{
            color: #B5EFFE;
            font-size: 14px;
            text-align: right;
          }
        }
        &>p{
          color: #B5EFFE;
          font-size: 28px;
        }
      }
    }
    & .static{
      width: 100%;
      height: 100px;
      display: flex;
      align-items: center;
      & .complate-box{
        height: 80px;
        display: flex;
        margin-right: 52px;
        &>div{
          &:nth-of-type(1){
            width: 52px;
            height: 80px;
            margin-right: 16px;
            background: url('../assets/img/cylinder-bg.png') center center no-repeat;
            &>.unfinished{
              height: 76px;
              width: 100%;
            }
            &>.finished{
              height: 0;
              width: 100%;
              background: url('../assets/img/cylinder-complate-bg.png') center bottom no-repeat;
              position: relative;
              &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 10px;
                width: 52px;
                top: -4px;
                left: 0;
                background: url('../assets/img/cylinder-complate-top.png');
              }
            }
          }
          &:nth-of-type(2){
            color: #B5EFFE;
            p{
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              margin-bottom: 9px;
            }
            div{
              line-height: 18px;
            }
          }
        }
      }
      & .abnormal-box{
        height: 80px;
        display: flex;
        &>div{
          &:nth-of-type(1){
            width: 52px;
            height: 80px;
            margin-right: 16px;
            background: url('../assets/img/cylinder-bg.png') center center no-repeat;
            &>.normal{
              height: 76px;
              width: 100%;
            }
            &>.abnormal{
              height: 0;
              width: 100%;
              background: url('../assets/img/cylinder-abnormal-bg.png') center bottom no-repeat;
              position: relative;
              &::before{
                content: '';
                position: absolute;
                width: 100%;
                height: 10px;
                width: 52px;
                top: -4px;
                left: 0;
                background: url('../assets/img/cylinder-abnormal-top.png');
              }
            }
          }
          &:nth-of-type(2){
            color: #B5EFFE;
            p{
              height: 14px;
              line-height: 14px;
              font-size: 14px;
              margin-bottom: 9px;
            }
            div{
              line-height: 18px;
            }
          }
        }
      }
    }
    & .list{
      height: 80px;
      width: 85%;
      overflow: hidden;
      & li{
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        color: #B5EFFE;
        display: flex;
        &>span{
          flex: 1;
          text-align: center;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          &:nth-last-of-type(1){
            text-align: left;
          }
        }
      }
    }
  }
</style>
<style>

</style>


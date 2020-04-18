<template>
  <section id="repairStatic">
    <divShell viewTitle="报事报修统计">
      <div class="info">
        <div>
          <div>
            <p>本月累计</p>
            <p>处理任务</p>
          </div>
          <p>
            <animated-number 
              :value="loadRepairTotal.monthDealNumber" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
        <div>                       
          <div>
            <p>今日上报</p>
            <p>任务</p>
          </div>
          <p>
            <animated-number 
              :value="loadRepairTotal.todayNewNumber" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
      </div>
      <div class="static">
        <template v-for="(item,index) in repairCountList" >
            <div class="li" :key="index">
              <label>{{item.showname}}</label>
              <div>
                <el-progress :percentage="(item.count)?(item.currentValue/item.count)*100:0" :stroke-width="12" :color="(index==repairCountList.length-1)?'#FF9C9E':'#89FFE7'"></el-progress>
                <div class="item-value">{{item.currentValue+'/'+item.count}}</div>
              </div>
            </div>
          </template>
      </div>
      <div class="list">
        <scroll v-if="listData.length>=3" :data="listData" :class-option="optionSingleHeight">
            <ul>
                <li v-for="(item,index) in listData" :key="index">
                  <span>{{item.recordTime}}</span>
                  <span>{{item.userName}}</span>
                  <span>{{item.repairType}}</span>
                </li>
            </ul>
        </scroll>
        <ul v-if="listData.length<3">
            <li v-for="(item,index) in listData" :key="index">
              <span>{{item.recordTime}}</span>
              <span>{{item.userName}}</span>
              <span>{{item.repairType}}</span>
            </li>
            <li v-if="listData.length==0">
              <span>今日暂无处理任务</span>
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
  name:'repairStatic',
  components:{
    divShell,
    AnimatedNumber,
    scroll
  },
  props:['loadRepairTotal'],
  data() {
    return {
     listData:[
      //  {
      //    time:'01-14 12:23:41',
      //    name:'张晓婷',
      //    content:'家庭报修'
      //  },
     ],
     repairCountList:[
      //  {
      //    showname:'家庭区域',
      //    currentValue:23,
      //    count:45,
      //  },
      //  {
      //    showname:'公共区域',
      //    currentValue:153,
      //    count:161,
      //  },
      //  {
      //    showname:'报事',
      //    currentValue:20,
      //    count:100,
      //  },
     ]
    }
  },
  computed: {
    optionSingleHeight () {
        return {
          limitMoveNum: this.listData.length,
          singleHeight: 28,
          waitTime: 1500
        }
    }
  },
  created(){
    
  },
  watch:{
    loadRepairTotal(){
      this.repairCountList=[
       {
         showname:'家庭区域',
         currentValue:this.loadRepairTotal.homeDeal,
         count:this.loadRepairTotal.homeTotal,
       },
       {
         showname:'公共区域',
         currentValue:this.loadRepairTotal.commonDeal,
         count:this.loadRepairTotal.commonTotal,
       },
       {
         showname:'报事',
         currentValue:this.loadRepairTotal.report,
         count:this.loadRepairTotal.reportTotal,
       },
     ]
      this.listData=this.loadRepairTotal.repairRecordList;
    }

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
  #repairStatic {
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
      // display: flex;
      // flex-direction: column;
      // align-items: center;
      & .li{
        height: 30px;
        line-height: 30px;
        display: flex;
        & label{
          color: #A1D6EC;
          flex: 1;
          margin-right: 20px;
          text-align: right;
        }
        &>div{
          width: 246px;
          position: relative;
          &>.item-value{
            position: absolute;
            top:0;
            right: 0;
            width: 46px;
            height: 30px;
            line-height: 30px;
            text-align: left;
            color: #A1D6EC;
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
<style lang="less">
  #repairStatic {
    & .li{
      &:nth-of-type(even){
        & .el-progress-bar__inner{
          background-color: #549AF2!important;
        }
      }
      & .el-progress{
        top: 5px;
        & .el-progress-bar__outer{
          background-color: transparent;
          border:1px solid rgba(35,65,112,1);
          border-radius:6px;
          padding: 0 3px;
          box-sizing: border-box;
        }
        & .el-progress-bar__inner{
          height: 50%;
          top: 50%;
          margin-top: -3px;
        }
        & .el-progress__text{
          visibility: hidden;
        }
      }
    }
  }
</style>


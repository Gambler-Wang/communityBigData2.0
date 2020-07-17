<template>
  <section id="deviceStatic">
    <divShell viewTitle="设备统计">
      <div class="info">
        <div>
          <div>
            <p>物联设备</p>
            <p>总数</p>
          </div>
          <p>
            <animated-number 
              :value="loadEquipTotal.equipTotal" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
        <div>                       
          <div>
            <p>设备保养</p>
            <p>次数</p>
          </div>
          <p>
            <animated-number 
              :value="loadEquipTotal.equipPlanTotal" 
              :formatValue="formatToCount"
              :duration="1200"
            ></animated-number>  
          </p>
        </div>
      </div>
      <div class="static">
        <div id="device-bar-echart">

        </div>
      </div>
    </divShell>
  </section>
</template>

<script>
import divShell from './divShell.vue';
import AnimatedNumber from "animated-number-vue";
const echarts = require('echarts');
export default {
  name:'deviceStatic',
  components:{
    divShell,
    AnimatedNumber
  },
  props:['loadEquipTotal'],
  data() {
    return {
     barChartObj:null,
     x:[],
     y:[]
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
  created(){
    
  },
  watch:{
    loadEquipTotal(){
      this.changeData();
      this.renderBarEcharts();
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.barChartObj = echarts.init(document.getElementById('device-bar-echart'));
      this.renderBarEcharts();
    })
  },
  methods: {
    changeData(){
      if(this.loadEquipTotal.equipType.length>0){
        this.loadEquipTotal.equipType.forEach(el => {
          this.x.push(el);
        });
      }else{
        this.x=[];
      }
      if(this.loadEquipTotal.equipData.length>0){
        this.loadEquipTotal.equipData.forEach(el => {
          this.y.push(el);
        });
      }else{
        this.y=[];
      }
    },
    renderBarEcharts(){
      var option={
          grid: {
              left: '30',
              right: '5',
              bottom: '25',
              top:'10'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {           
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              },
          },
          xAxis: {
              type: 'category',
              data: this.x,
              nameTextStyle:{
                color:'#4D5470',
              },
              axisTick:{
                show:false
              },
              splitLine:{
                show:false
              },
              axisLine:{
                lineStyle:{
                  color:'#4D5470',
                  type:'solid',
                  opacity:0.8
                }
              },
          },
          yAxis: {
              type: 'value',
              nameTextStyle:{
                color:'#4D5470',
              },
              axisLabel:{
                color:'#4D5470',
              },
              axisTick:{
                show:false
              },
              splitLine:{
                show:false,
                lineStyle:{
                  color:'#4D5470',
                  type:'dashed',
                  opacity:0.8
                }
              },
              axisLine:{
                show:false
              }
          },
          series: [{
              type: 'bar',
              barWidth:'20',
              itemStyle: {   
                //通常情况下：
                normal:{  
　　　　　　　　　　　　//每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                  color: function (params){
                      var colorList = ['#FF9C9E','#89FFE7','#549AF2','#89FFE7','#549AF2','#FF9C9E'];
                      return colorList[params.dataIndex];
                  }
                },
                //鼠标悬停时：
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
              },
              data: this.y,
          }]
          
        }
      this.barChartObj.setOption(option,true);
    },
  }
}
</script>

<style scoped lang="less">
  #deviceStatic {
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
      height: 186px;
      display: flex;
      align-items: center;
      &>div{
        height: 100%;
        width: 100%;
      }
    }
  }
</style>
<style>

</style>


<template>
  <section id="basicCard">
    <div>
      <h5>
        <i class="iconfont el-icon-building"></i>
        楼栋数量
      </h5>
      <p>
        <span>
          <animated-number 
            :value="basicCardData.pavilionData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>栋
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newPavilionData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-building"></i>
        总户数
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.houseData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>户
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newhouseData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-building"></i>
        入住户数
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.moveInto" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        户
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newMoveInto" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-building"></i>
        今日迁入户数
      </h5>
      <p>
        <span>
          <animated-number 
            :value="basicCardData.newMoveIn" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </span>户
      </p>
      <p>
        累计：
        <b>
          <animated-number 
            :value="basicCardData.moveIn" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-building"></i>
        今日迁出户数
      </h5>
      <p>
        <span>
          <animated-number 
            :value="basicCardData.newMoveOut" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </span>户
      </p>
      <p>
        累计：
        <b>
          <animated-number 
            :value="basicCardData.moveOut" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-user"></i>
        业主人员
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.ownerData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        人
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newOwnerData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-user"></i>
        家属人员
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.familyData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        人
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newFamilyData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-user"></i>
        租客人员
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.tenant" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        人
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newTenant" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-user"></i>
        商户人员
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.business" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        人
      </p>
      <p>
        今日新增：
        <b>
          <animated-number 
            :value="basicCardData.newBusiness" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
    <div>
      <h5>
        <i class="iconfont el-icon-user"></i>
        每日访客
      </h5>
      <p>
        <span>
           <animated-number 
            :value="basicCardData.newVisitorData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number>  
        </span>
        人
      </p>
      <p>
        累计：
        <b>
          <animated-number 
            :value="basicCardData.visitorData" 
            :formatValue="formatToCount"
            :duration="1200"
          ></animated-number> 
        </b>
      </p>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  name:'basicCard',
  components:{
    AnimatedNumber,
  },
  props:['basicCardData'],
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
  #basicCard {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-content: flex-start;
    &>div{
      width: 177px;
      height: 90px;
      margin-right: 12px;
      margin-bottom: 15px;
      background-color:rgba(255,255,255,0.05);
      border-radius: 5px;
      padding: 14px 18px;
      box-sizing: border-box;
      color: #91D5FB;
      &:nth-of-type(5n){
        margin-right: 0;
      }
      &>h5{
        color: #91D5FB;
        font-size: 14px;
        font-weight: normal;
        height: 14px;
        line-height: 14px;
      }
      &>p{
        height: 20px;
        line-height: 20px;
        margin: 9px 0;
        &>span{
          color: #fff;
          font-size: 24px;
          margin-right: 14px;
        }
        &:nth-of-type(2){
          margin: 0;
          height: 14px;
          line-height: 14px;
          &>b{
            font-weight: normal;
          }
        }
      }
    }
  }
</style>
<style>

</style>


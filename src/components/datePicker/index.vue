<template>
  <div class="datepicker">
    <div class="header">
      <div class="header-left">
        <span @click="dateChange(-1,'year')">&lt;&lt;</span>
        <span @click="dateChange(-1,'month')">&lt;</span>
      </div>
      <div class="header-mid">
        <span>{{year}}年</span>
        <span @click="type='month'">{{month+1}}月</span>
      </div>
      <div class="header-right">
        <span @click="dateChange(1,'month')">&gt;</span>
        <span @click="dateChange(1,'year')">&gt;&gt;</span>
      </div>
    </div>
    <template v-if="type==='date'">
      <div class="date-row weeks">
        <span v-for="week in weeks"
              :key="week">{{week}}</span>
      </div>
      <div class="date-row dates"
           v-for="(row,index) in dates"
           :key="index">
        <template v-for="(item, idx) in row">
          <span v-if="item"
                @click="selectDate(item)"
                :class="{select:year==currDate[0] && month==currDate[1] && item==currDate[2] }"
                :key="idx">{{item}}</span>
          <span v-else
                :key="idx"></span>
        </template>
      </div>
    </template>
    <template v-else-if="type==='month'">
      <div class="months">
        <span v-for="(item, idx) in months"
              :class="{select:year==currDate[0] && idx==currDate[1] }"
              @click="selectMonth(idx)"
              :key="item">
          {{item}}月
        </span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      type: 'date',// month/year
      year: 2019,
      month: 3,
      years: [],
      months: [],
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      dates: [],
      currDate: [2019, 3, 1]
    }
  },
  methods: {
    computDate () {
      this.dates = []
      let date = new Date(this.year, this.month)
      let oneWeek = []
      for (let i = 1; i <= 31; i++) {
        let week = date.getDay()
        if (week === 0 && oneWeek.length > 0) {
          this.dates.push(oneWeek)
          oneWeek = []
        }
        oneWeek[week] = i
        date.setDate(i + 1)
        if (date.getMonth() !== this.month) {
          break;
        }
      }
      if (oneWeek.length > 0) {
        oneWeek.length = 7
        this.dates.push(oneWeek)
      }
    },
    dateChange (step, type) {
      if (type === 'year') {
        this.year += step
      } else if (type === 'month') {
        let date = new Date(this.year, this.month + step)
        this.year = date.getFullYear()
        this.month = date.getMonth()
      }
      this.computDate()
    },
    selectDate (item) {
      console.log(item)
      if (!item) return
      this.currDate = [this.year, this.month, item]
    },
    selectMonth(month){
      this.month = month
      this.computDate()
      this.type="date"
    }
  },
  mounted () {
    this.computDate()
  }
}
</script>
<style lang="scss" scoped>
.datepicker {
  box-sizing: border-box;
  width: 6.86rem;
  background-color: #ffffff;
  box-shadow: 0rem 0.04rem 0.08rem 0rem rgba(0, 0, 0, 0.1);
  border-radius: 0.08rem;
  padding: 0.4rem 0.32rem;
  font-size: 0.32rem;
  line-height: 0.4rem;
  color: #1e2128;
  .header {
    display: flex;
    justify-content: space-between;
  }
  .date-row {
    display: flex;
    line-height: 0.88rem;
    // margin: 0.4rem 0;
    span {
      display: inline-block;
      width: 0.88rem;
      height: 0.88rem;
      flex-grow: 1;
      text-align: center;
      &.select {
        background: #2095f2;
        color: #fff;
        border-radius: 100%;
      }
      .weeks & {
        font-size: 0.24rem;
        color: #5b5b69;
      }
      .dates & {
        font-size: 0.28rem;
        color: #1e2128;
      }
    }
  }
  .months {
    display: flex;
    flex-wrap: wrap;
    span {
      display: block;
      text-align: center;
      width: 1.5rem;
      flex-grow: 1;
      box-sizing: border-box;
      margin: 0.12rem;

      line-height: 0.8rem;
      background-color: rgba(191, 191, 191, 0.3);
      border-radius: 0.08rem;

      &.select {
        background: #2095f2;
        color: #fff;
      }
    }
  }
}
</style>



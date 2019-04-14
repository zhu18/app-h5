<template>
  <div class="datepicker">
    <div class="header">
      <div class="header-left">
        <span @click="prev('year')"
              :disabled="prevYearDisabled"
              v-show="type!='month'">
          <i class="mintui mintui-back"></i>
          <i class="mintui mintui-back"></i>
        </span>
        <span @click="prev('month')"
              v-show="type=='date'">
          <i class="mintui mintui-back"></i>
        </span>
      </div>
      <div class="header-mid">
        <span @click="type='year'">{{year}}年</span>
        <span @click="type='month'">{{month+1}}月</span>
      </div>
      <div class="header-right">
        <span @click="next('month')"
              v-show="type=='date'">
          <i class="mintui mintui-back"></i>
        </span>
        <span @click="next('year')"
              v-show="type!='month'">
          <i class="mintui mintui-back"></i>
          <i class="mintui mintui-back"></i>
        </span>
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
      <div class="select-panel months">
        <span v-for="(item, idx) in months"
              :class="{select:year==currDate[0] && idx==currDate[1] }"
              @click="selectMonth(idx)"
              :key="item">
          {{item}}月
        </span>
      </div>
    </template>
    <template v-else-if="type==='year'">
      <div class="select-panel years">
        <span v-for="(item) in years"
              :class="{select:item==currDate[0] }"
              @click="selectYear(item)"
              :key="item">
          {{item}}
        </span>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  data () {
    return {
      year:2019,
      month:3,
      type: 'date',// month/year
      weeks: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      months: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
      years: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      dates: [],
      currDate: [2019, 3],
      minYear: 1900
    }
  },
  computed: {
    prevYearDisabled (){
      //return true
      return this.type === 'year' && this.years[0] === this.minYear || this.type === 'date' && this.year === this.minYear
    }
  },
  methods: {
    init () {
      let now = new Date()
      this.year = now.getFullYear()
      this.month = now.getMonth()
      this.currDate = [this.year, this.month, now.getDate()]
      this.computYears(this.year)
      this.computDate()
    },
    computYears (year) {
      let start = year - (year - this.minYear) % 16
      this.years = []
      for (let i = 0; i < 16; i++) {
        this.years[i] = start + i
      }
    },
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
    prev (flag) {
      if (this.type === 'date') {
        if (flag === 'year') {
          this.dateChange(this.year - 1, this.month)
        } else {
          this.dateChange(this.year, this.month - 1)
        }
      } else if (this.type === 'year' && flag === 'year') {
        this.computYears(this.years[0] - 1)
      }
    },
    next (flag) {
      if (this.type === 'date') {
        if (flag === 'year') {
          this.dateChange(this.year + 1, this.month)
        } else {
          this.dateChange(this.year, this.month + 1)
        }
      } else if (this.type === 'year' && flag === 'year') {
        this.computYears(this.years.pop() + 1)
      }
    },
    dateChange (year, month) {
      let date = new Date(year, month)
      this.year = date.getFullYear()
      this.month = date.getMonth()
      this.computDate()
    },
    selectDate (item) {
      if (!item) return
      this.currDate = [this.year, this.month, item]
    },
    selectMonth (month) {
      this.month = month
      this.computDate()
      this.type = "date"
    },
    selectYear (year) {
      this.year = year
      //this.computDate()
      this.type = "month"
    }
  },
  mounted () {
    this.init()
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
    .header-left {
      .mintui-back:not(:first-child) {
        margin-left: -0.2rem;
      }
      span {
        margin-right: 0.1rem;
      }
    }
    .header-right {
      .mintui-back {
        display: inline-block;
        transform: rotate(180deg);
        &:not(:first-child) {
          margin-left: -0.2rem;
        }
      }
      span {
        margin-left: 0.1rem;
      }
    }
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
  .select-panel {
    display: flex;
    flex-wrap: wrap;
    &.years {
      span {
        width: 1.2rem;
      }
    }
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



<template>
  <div ref="zhu" class="zhu"></div>
</template>

<script type="text/javascript">
import echarts from 'echarts'
  export default {
    name: 'zhu',
    props: {
      echartsData: {
        type: Object,
        default: () => {}
      },
    },
    data() {
      return {
      }
    },
    mounted() {
    },
    watch: {
     echartsData: {
         handler: function (val, oldVal) {
             setTimeout(_=>{ this.initOption();},500)

         },
        deep: true  //增加deep 观察对象的子对象变化
      }
    },
    methods: {
      initOption() {
         this.chart =echarts.init(this.$refs.zhu);
        // 指定图表的配置项和数据
        var option = {
            backgroundColor: '#fff',
            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(0,0,0,0.4)',
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                padding: 10
            },
            legend: {
                show: true,
                data: ['去年同期数量', '今年趋势'],
                y: 'bottom',
                x:'center',
                padding: [0, 0, 0, 0],
                textStyle: {
                    color: '#5b5b69',
                    fontSize: 12
                },
                itemWidth: 20,
                itemHeight: 10,
            },
            grid: {
                bottom: '10%',
                top:'5%',
                left:'5%',
                right:'5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: this.echartsData.data1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#275eb5',
                        width: 1,
                    }
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: "#5b5b69",
                        fontSize: 12
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#5b5b69',
                        fontSize: 12
                    },
                    formatter: '{value}%',
                },
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#275eb5',
                        width: 2,
                    }
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: ['#ececec'],
                        type: 'dashed',
                    }
                },
                max: 100,
                interval: 20,
            }],
            series: [{
                    name: '去年同期数量',
                    type: 'bar',
                    stack: '总量',
                    barMaxWidth: 20,
                    itemStyle: {
                        emphasis: {
                            color: "#2095f2",
                            barBorderRadius:[3, 3, 0, 0],
                        },
                        normal: {
                            barBorderRadius:[3, 3, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                        offset: 0,
                                        color: '#bcdffb'
                                    },
                                    {
                                        offset: 1,
                                        color: '#bcdffb'
                                    }
                                ]
                            )
                        }
                    },
                    data: this.echartsData.data2
                },
                {
                    name: '今年趋势',
                    type: 'line',
                    lineStyle: {
                        normal: {
                            color: '#fea71a'
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fea71a',
                            borderWidth: '3',
                        },
                    },
                    data:this.echartsData.data3,
                    symbolSize: 10
                }
            ]
        };
        // 使用刚指定的配置项和数据显示图表。
        this.chart.setOption(option);
        window.addEventListener("resize", function () {
            setTimeout(function () {
                searchWordChart.resize();
            }, 500)
        });
      },
      // echats 图表自适应
      _resizeHanlder() {
        this.chart.resize()
      },
      // 销毁echats图表方法
      _destroyHandler() {
        this.chart.dispose()
      }
    },
    components: {
    },
  }
</script>

<style lang="scss" scoped>
  .zhu {
    width: 100%;
    height: 90%;
  }
</style>
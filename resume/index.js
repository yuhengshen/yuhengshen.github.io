var charts = document.querySelector('.charts')

var myChart = echarts.init(charts, null, {});

// 指定图表的配置项和数据
var option = {
    radar: {
        shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            {name: 'HTML', max: 100, nameTextStyle: {fontSize: 8}},
            {name: 'CSS', max: 100, nameTextStyle: {fontSize: 8}},
            {name: 'JS', max: 100, nameTextStyle: {fontSize: 8}},
            {name: 'VUE', max: 100, nameTextStyle: {fontSize: 8}},
            {name: 'REACT', max: 100, nameTextStyle: {fontSize: 8}},
            {name: 'WEBPACK', max: 100, nameTextStyle: {fontSize: 8}}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        areaStyle: {normal: {}},
        data: [
            {
                value: [80, 82, 87, 90, 70, 75],
                name: '技能概览'
            }
        ]
    }]
};

myChart.setOption(option);

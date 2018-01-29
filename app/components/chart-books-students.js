import Component from '@ember/component';

export default Component.extend({
  chartOptions: {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      allowDecimals: false,
      title: {
        text: 'Fruit eaten'
      }
    }
  },

  chartData: [
    {
      name: 'Jane',
      data: [5, 0, 20]
    },
    {
      name: 'John',
      data: [25, 30, 15]
    }
  ]
});
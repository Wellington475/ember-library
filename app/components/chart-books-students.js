import Component from '@ember/component';
import { get, set } from '@ember/object';
export default Component.extend({
  
  chartOptions: {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Gráfico Quantitativo'
    },
    xAxis: {
      categories: ['Books', 'Students']
    },
    yAxis: {
      title: {
        text: 'Quantidade'
      }
    }
  },
  chartData: [],
  didReceiveAttrs(){
    this._super(...arguments);
    
    let model = get(this,'model');
    if(model){
      set(this,'chartData', [
        {
          data: [model.students.content.length, model.books.content.length]
        }
      ])
    }
  },
});
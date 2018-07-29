import * as d3 from 'd3'


const data = [
      { start_date: '2014-01-01', end_date: '2015-01-01', name: 'Project 1' },
      { start_date: '2014-02-01', end_date: '2016-01-01', name: 'Project 2' },
      { start_date: '2014-03-01', end_date: '2014-09-01', name: 'Project 3' },
      { start_date: '2014-04-01', end_date: '2017-01-01', name: 'Project X' }
    ];

//Selects the root element (the highest element in this chart)
const svg = d3.select('.gantt')
  .append('svg')

//This creates a linear scale from the min value of my data to the max
//  value of my data so that d3 knows where every data point is relative
//  to the number of pixels that I'm allotting to the graph.
const x_scale = d3.scaleLinear()
  .domain([d3.min(data, d => d.start_date), d3.max(data, d => d.end_date)])
  .range([0, 400])

const x_axis = d3.axisBottom(x_scale)
  .ticks(4)

svg.append('g')
  .call(x_axis)

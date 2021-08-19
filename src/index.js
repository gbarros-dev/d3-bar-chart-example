import ReactDOM from 'react-dom'
import { scaleBand, scaleLinear, max, format } from 'd3'

import './index.css'

import { AxisBottom } from './AxisBottom'
import { AxisLeft } from './AxisLeft'
import { Marks } from './Marks'
import { useData } from './useData'

const width = 960
const height = 500
const margin = { top: 20, right: 30, bottom: 65, left: 220 }
const xAxisLabelOffset = 50

const App = () => {
  const data = useData()

  if (!data) {
    return <pre>Loading...</pre>
  }

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.left - margin.right

  const yValue = (d) => d.Country
  const xValue = (d) => d.Population

  const siFormat = format('.2s')
  const xAxisTickFormat = (tickValue) => siFormat(tickValue).replace('G', 'B')

  const yScale = scaleBand().domain(data.map(yValue)).range([0, innerHeight]).paddingInner(0.15)

  const xScale = scaleLinear()
    .domain([0, max(data, xValue)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight} tickFormat={xAxisTickFormat} />
        <AxisLeft yScale={yScale} />
        <text className='axis-label' x={innerWidth / 2} y={innerHeight + xAxisLabelOffset} textAnchor='middle'>
          Population
        </text>
        <Marks data={data} yScale={yScale} xScale={xScale} yValue={yValue} xValue={xValue} tooltipFormat={xAxisTickFormat} />
      </g>
    </svg>
  )
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

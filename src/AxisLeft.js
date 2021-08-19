export const AxisLeft = ({ yScale }) =>
  yScale.domain().map((domainValue) => (
    <g key={domainValue} className='tick'>
      <text style={{ textAnchor: 'end' }} x={-3} dy='.32em' y={yScale(domainValue) + yScale.bandwidth() / 2}>
        {domainValue}
      </text>
    </g>
  ))

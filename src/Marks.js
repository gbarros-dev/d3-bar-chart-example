export const Marks = ({ data, yScale, xScale, yValue, xValue, tooltipFormat }) =>
  data.map((d) => (
    <rect key={yValue(d)} className='mark' x={0} y={yScale(yValue(d))} width={xScale(xValue(d))} height={yScale.bandwidth()}>
      <title>{tooltipFormat(xValue(d))}</title>
    </rect>
  ))

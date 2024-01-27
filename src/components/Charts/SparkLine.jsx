import { Inject, SparklineComponent, SparklineTooltip } from '@syncfusion/ej2-react-charts';
import React from 'react';
const SparkLine = ({id,height,width,color,data,type,currentColor}) => {
  return (
   
    <SparklineComponent  id='sparkline' height={height} width={width}  xName='xval' yName='yval' dataSource={data} tooltipSettings={{visible: true, format: '${xval} : ${yval}'}} >
      
      <Inject services={[ SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine

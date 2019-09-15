import React from 'react';

import ContextA from './ContextA';
import ContextB from './ContextB';

function ConsumerInternal({ contextA, contextB }) {
  return (
    <>
      <p>A: {contextA}</p>
      <p>B: {contextB}</p>
    </>
  );
}

export default props => (
  <ContextA.Consumer>
    {contextA => (
      <ContextB.Consumer>
        {contextB => (
          <ConsumerInternal contextA={contextA} contextB={contextB} {...props} />
        )}
      </ContextB.Consumer>
    )}
  </ContextA.Consumer>
);

import React from 'react';

import ContextA from './ContextA';
import ContextB from './ContextB';
import Consumer from './Consumer';

export default function Provider() {
  return (
    <ContextA.Provider value="Value A">
      <ContextB.Provider value="Value B">
        <h1>parcel file merge bug</h1>
        <Consumer />
      </ContextB.Provider>
    </ContextA.Provider>
  )
}
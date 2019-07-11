import { Spinner } from '@blueprintjs/core';
import * as React from 'react';
import './Loading.scss';

export const Loading = () => (
  <div className='loading-spinner'>
    <Spinner />
  </div>
);

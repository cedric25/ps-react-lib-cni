import React from 'react';
import ProgressBar from 'ps-react-lib-cni/ProgressBar'

/** 100% progress and height of 20px */
export default function Example10Percent() {
  return <ProgressBar percent={100} width={150} height={20} />
}
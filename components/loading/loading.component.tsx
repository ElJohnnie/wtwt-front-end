import React from 'react';
import Lottie from 'lottie-react';
import loadingLottie from '../../assets/loading-lottie.json';

const LoadingComponent = ({ width = 450, height = 450 }) => {
  return (
    <div style={{ width: width, height: height }}>
      <Lottie animationData={loadingLottie} loop={true} />
    </div>
  );
};

export default LoadingComponent;

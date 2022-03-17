import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie/loader';

const Loading = () => {
 const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
  
  return (
    <div>
      <h2 id='loader'>Loading...</h2>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        speed={6}
      />
    </div>
  );
}

export default Loading

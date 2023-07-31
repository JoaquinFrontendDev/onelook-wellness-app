import React from 'react';
import { View } from 'react-native';

const Stepper = ({ currentStep }) => {
  const steps = [1, 2, 3];

  return (
    <View className='flex-row justify-between absolute bottom-4 space-x-3'>
      {steps.map((step, index) => (
        <View
          key={index}
          className={`h-2 rounded-full w-20 ${ index < currentStep ? 'bg-primary-purple' : 'bg-white border-[1.25px] border-primary-purple'} `}
        />
      ))}
    </View>
  );
};

export default Stepper;

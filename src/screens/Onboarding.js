import { View, Text, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { ArrowLongRightIcon } from 'react-native-heroicons/solid'
import Stepper from '@components/Stepper/Stepper'

const Onboarding = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-1 px-6'>
        <TouchableOpacity activeOpacity={0.9} className='border border-primary-purple rounded-[20px] py-2 px-4 absolute top-5 right-6 z-50'>
          <Text className='text-primary-purple text-xs font-semibold'>Skip intro</Text>
        </TouchableOpacity>
        <View className='items-center justify-center flex-1'>
          <Image source={require('@assets/images/calm.jpg')} className='w-[300px] h-[300px]' />
          <Text className='text-[30px] text-deep-blue font-bold mt-10 text-center px-8 leading-2'>Keep calm and stay in control</Text>
          <Text className='text-base text-cold-gray mt-5 px-6 text-center leading-3'>You can check your health with just one look.</Text>
          <TouchableOpacity activeOpacity={0.9} className='p-6 bg-primary-purple mt-[60px] rounded-[20px]'>
            <ArrowLongRightIcon size={24} color='white' />
          </TouchableOpacity>
          <Stepper currentStep={1}/>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

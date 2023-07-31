import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ArrowLongRightIcon } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <View className='flex-1 items-center justify-center bg-white px-8'>
      <Image source={require('@assets/icons/brand-icon-big.jpg')} className='w-[104px] h-[104px]' />
      <Text className='text-[30px] text-deep-blue font-bold mt-5'>Welcome to OneLook</Text>
      <Text className='text-base text-cold-gray'>Just take a look and take action!</Text>
      <TouchableOpacity
        className='bg-primary-purple py-4 px-5 w-full absolute bottom-10 rounded-[20px] flex-row items-center justify-center'
        onPress={() => navigation.navigate('Onboarding')}
        activeOpacity={0.9}
      >
        <Text className='text-white font-semibold text-base text-center flex-1'>Let's start</Text>
        <ArrowLongRightIcon size={24} color='white' />
      </TouchableOpacity>
    </View>
  )
}

export default Welcome

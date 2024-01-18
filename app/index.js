import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Stack, useRouter } from 'expo-router'

import { COLORS, SIZES, images, icons } from '../constants'
import {
  Nearbyjobs,
  Popularjobs,
  ScreenHeaderBtn, Welcome
} from '../components'
const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: COLORS.lightWhite,
          },
          headerShadowVisible: false,
          headerLeft: ({ onPress }) => (
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimensions="60%"
            />
          ),
          headerRight: ({ onPress }) => (
            <ScreenHeaderBtn
              iconUrl={images.profile}
              dimensions="100%"
            />
          ),
          headerTitle: "",
        }}
        
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}>
        <View style={{ flex: 1, padding:SIZES.medium }}>
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handlePress={() => {
              if (searchTerm.length > 0) {
                router.push(`/search/${searchTerm}`);
              }
            } }
          />
          <Popularjobs />
          <Nearbyjobs />
        </View>
    
        </ScrollView>
    </SafeAreaView>
  )
}

export default Home
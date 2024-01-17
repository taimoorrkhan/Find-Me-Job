import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./welcome.style";
import { SIZES, icons } from "../../../constants";


const JobTypes = [
  "Full Time",
  "Part Time",
  "Internship",
  "Contract",
  "Temporary",
  "Volunteer",
  "Commission",
  "New-Grad",
  "Freelance",
  "Other",
]
const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState("Full Time");
	return (
	
			<View style={styles.container}>
				<Text style={styles.userName}>Welcome Taimoor</Text>
				<Text style={styles.welcomeMessage}>
					Find your perfect job match
				</Text>
				<View style={styles.searchContainer}>
					<View style={styles.searchWrapper}>
						<TextInput
							placeholder="what are you looking for?"
              style={styles.searchInput}
              value=""
              onChange={() => { }}
              
						/>
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={() => router.push("/search")}>
          <Image
            source={icons.search}
            style={styles.searchBtnImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.tabsContainer}>
        <FlatList
          data={JobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType,item)}>{item}</Text>
            </TouchableOpacity>
          )} 
          keyExtractor={(item) => item}
          contentContainerStyle={{
            columnGap:SIZES.small,
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

        
      </View>
			</View>
		
	);
};

export default Welcome;

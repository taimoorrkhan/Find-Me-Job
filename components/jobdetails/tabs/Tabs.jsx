import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from "react-native";

import styles from './tabs.style'
import { SIZES } from "../../../constants";


const TabButton = ({ name, activeTab, onHandleSearch }) => {
	return (
		<TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearch}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
};
const Tabs = ({ tabs, activeTab, setActiveTab }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearch={() => setActiveTab(item)}
					/>
				)}
				keyExtractor={(item) => item}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{
					columnGap: SIZES.small / 2,
				}}
			/>
		</View>
	);
};

export default Tabs
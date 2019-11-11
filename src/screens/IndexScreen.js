import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context as BlogContext } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = () => {
	const { state, addBlogPost } = useContext(BlogContext);

	return (
		<View>
			<Text>The Index Screen</Text>
			<Button title="Add Post" onPress={addBlogPost} />
			<FlatList
				keyExtractor={blogPost => blogPost.title}
				data={state}
				renderItem={({ item }) => {
					return (
						<View style={styles.row}>
							<Text style={styles.title}>{item.title}</Text>
							<Feather style={styles.icon} name="trash" />
						</View>
					);
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingHorizontal: 10,
		borderTopWidth: 1,
		borderColor: 'gray'
	},
	title: {
		fontSize: 18
	},
	icon: {
		fontSize: 24
	}
});

export default IndexScreen;
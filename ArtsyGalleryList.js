import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const artsyGalleryListItem = ({ item }) => (
<View style={styles.artsy_gallery_list_item}>
<Image
    style={styles.pic}
    source={{uri: item.pic}}
    />
<Text style={styles.pic_name}>{item.pic_name}</Text>
<Text style={styles.company_name}>{item.company_name}</Text>
<Text style={styles.date}>{item.date}</Text>
</View>
  );

const ArtsyGalleryList = ({ item }) => (
<FlatList
    style={styles.artsy_gallery_list}
    data={item}
    renderItem={artsyGalleryListItem}
    keyExtractor={item => item.id}
    showsVerticalScrollIndicator={false}
    />
);

export default ArtsyGalleryList;

const styles = StyleSheet.create({
    'pic': {
        'width': '18vw',
        'height': '18vw'
    },
    'pic_name': {
        'fontSize': 12,
        'fontWeight': '250',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'company_name': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'date': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});
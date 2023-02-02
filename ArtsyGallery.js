import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ArtsyGalleryList from './ArtsyGalleryList'

const ArtsyGallery = () => (
<ScrollView style={styles.artsy_gallery} showsVerticalScrollIndicator={false}>
<ArtsyGalleryList item={item.artsy_gallery_list}/>
</ScrollView>
)

export default ArtsyGallery;

const styles = StyleSheet.create({
    
});
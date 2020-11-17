import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles';

const ImageGrid = () => {
    return (
        <View
            style={styles.container}>
            <Image style={styles.img} source={{ uri: item.thumbnailUrl }} />

        </View>
    )
}

export default ImageGrid

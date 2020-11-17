import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Store } from '../../context/store';

export default () => {
    const globalState = useContext(Store);
    const { mapLoaderState } = globalState;
    const { loading } = mapLoaderState;

    return loading ? (
        <View style={styles.container}>
            <ActivityIndicator size="large" color={'rgb(11, 89, 173)'} />
        </View>
    ) : null;
};

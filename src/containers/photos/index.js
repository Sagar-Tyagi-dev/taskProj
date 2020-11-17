import React, { useEffect, useContext, useState, Fragment } from 'react'
import { View, FlatList, Image } from 'react-native'
import { LOADING_START } from '../../context/action/type';
import { Store } from '../../context/store'
import { sendGetRequest } from '../../network';
import { Album } from '../../components'


const Photos = ({ route }) => {
    const globalState = useContext(Store);
    const {
        dispatchLoaderAction,
    } = globalState;

    const [photos, setPhotos] = useState([]);


    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START
        })
        const { params } = route;

        async function fetchPhotos() {
            const albumPhotos = await sendGetRequest(`albums/${params.albumId}/photos`, {}, dispatchLoaderAction);
            setPhotos(albumPhotos);
        }
        fetchPhotos();

    }, []);
    return (
        <Fragment>
            <FlatList
                data={photos}
                keyExtractor={(_, index) => index.toString()}
                numColumns={3}
                renderItem={({ item }) => (

                    <View
                        style={{
                            marginHorizontal: 5,
                            marginVertical: 5
                        }}>
                        <Image style={{ height: 120, width: 120 }} source={{ uri: item.thumbnailUrl }} />

                    </View>
                )
                }
            >

            </FlatList>
        </Fragment>
    )
}

export default Photos

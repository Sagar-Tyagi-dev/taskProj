import React, { useEffect, useContext, useState, Fragment } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Store } from '../../context/store'
import { Album } from '../../components'
import { sendGetRequest } from '../../network';
import apiConstant from '../../network/Endpoint';
import { LOADING_START } from '../../context/action/type';

const Albums = ({ route, navigation }) => {
    const globalState = useContext(Store);
    const {
        dispatchLoaderAction,
    } = globalState;

    const [albums, setAlbums] = useState([]);


    useEffect(() => {
        dispatchLoaderAction({
            type: LOADING_START
        })
        const { params } = route;

        async function fetchAlbums() {
            const authorAlbum = await sendGetRequest(`${apiConstant.getAuthor}/${params.id}/albums`, {}, dispatchLoaderAction);
            setAlbums(authorAlbum);
        }
        fetchAlbums();
    }, []);


    return (
        <Fragment>
            <FlatList
                data={albums}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Photos', { albumId: item.id })}>
                        <Album
                            title={item.title}
                        />
                    </TouchableOpacity>
                )
                }
            >

            </FlatList>
        </Fragment>
    )
}

export default Albums

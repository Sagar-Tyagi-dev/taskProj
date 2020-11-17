import React, { useContext, useEffect, useState, Fragment } from 'react'
import { FlatList } from 'react-native'
import { AuthorModel, Post } from '../../components'
import { LOADING_START } from '../../context/action/type'
import { Store } from '../../context/store'
import { sendGetRequest } from '../../network'
import apiConstant from '../../network/Endpoint'

const Posts = ({ navigation }) => {


    const globalState = useContext(Store);
    const {
        dispatchLoaderAction,
    } = globalState;

    const [posts, setPosts] = useState([]);
    const [author, setAuthor] = useState({});
    const [modelVisible, setModelVisible] = useState(false);



    useEffect(() => {
        dispatchLoaderAction({ type: LOADING_START });
        async function fetchPosts() {
            const posts = await sendGetRequest(apiConstant.allPosts, {}, dispatchLoaderAction);
            setPosts(posts);
        }
        fetchPosts();
    }, []);

    const getAuthor = async (id) => {
        dispatchLoaderAction({ type: LOADING_START });
        const user = await sendGetRequest(`${apiConstant.getAuthor}/${id}`, {}, dispatchLoaderAction);
        setAuthor(user);
        setModelVisible(true);

    }


    const closeModel = () => {
        setAuthor({});
        setModelVisible(false);
    }

    const checkAlbums = () => {
        setModelVisible(false);
        navigation.navigate('Albums', { id: author.id });
    }
    return (
        <Fragment>
            <FlatList
                data={posts}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <Post
                        title={item.title}
                        text={item.body}
                        checkAuthor={() => getAuthor(item.userId)}
                        getComments={() => navigation.navigate('Comments', { id: item.userId })}
                    />
                )
                }
            />


            <AuthorModel
                visible={modelVisible}
                onRequestClose={closeModel}
                author={author}
                checkAlbums={checkAlbums}
            />
        </Fragment>
    )
}

export default Posts

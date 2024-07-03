import { useState, useEffect } from 'react'

import './Post.css'

import Image from '../../components/core/Image'
import Heading from '../../components/core/Heading'
import Button from '../../components/core/Button'
import Text from '../../components/core/Text'
import Time from '../../components/core/Time'
import View from '../../components/library/View'

import logic from '../../logic/index'

function Post({ post, onPostDeleted, onPostLikeToggled }) {

    const handleDeletePost = () => {
        if (confirm('Delete post?'))
            try {
                logic.deletePost(post.id, error => {
                    if (error) {
                        console.error(error)

                        alert(error.message)

                        return
                    }

                    onPostDeleted()
                })
            } catch (error) {
                console.error(error)

                alert(error.message)
            }
    }

    const userHasLiked = post.likes.includes(logic.getUserUsername());

    const handleToggleLikePost = () => {
        try {
            logic.toggleLikePost(post.id, error => {
                if (error) {
                    console.error(error)

                    alert(error.message)

                    return
                }

                onPostLikeToggled()
            })

        } catch (error) {
            console.error(error)

            alert(error.message)

        }
    }

    const handleCreatePostComment = () => {
        try {
            logic.createComment(postId, description, error => {
                if (error) {
                    console.error(error)

                    alert(error.message)

                    return
                }
            })
        } catch (error) {
            console.error(error)

            alert(error.message)
        }
    }


    return <View tag="article" className='Post' align="">
        <View>
            <Text>{post.author}</Text>

            <Heading level="2" >{post.title}</Heading>
        </View>

        <Image src={post.image} />

        <Text>{post.description}</Text>

        <View className='PostFooter' direction='row'>
            <Time>{post.date}</Time>

            {post.author === logic.getUserUsername() && <Button onClick={handleDeletePost}>Delete</Button>}
        </View>

        <View direction='row' className='IconBox'>
            <Button className='IconButton' onClick={handleCreatePostComment}>
                <Image className='IconImage' src={'../../../public/IconComment.png'} />
            </Button>

            <Button onClick={handleToggleLikePost} className='IconButton'>
                <Image className='IconImage' src={userHasLiked ? '../../../public/IconHeartF.png' : '../../../public/IconHeart.png'} />
            </Button>

            <Button className='IconButton'>
                <Image className='IconImage' src={'../../../public/IconEdit.png'} />
            </Button>
        </View>

        <Button className='CommentText' >View comments...</Button>


    </View >
}

export default Post
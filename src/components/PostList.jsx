import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/posts-list-store";
const PostList = () =>{
    const {PostList} = useContext(PostListData);
    return (
        <>
        {PostList.map((Post)=>(
            <Post key={Post.id} Post={Post} />))}
    
    </>

    );
     

}
export default PostList;
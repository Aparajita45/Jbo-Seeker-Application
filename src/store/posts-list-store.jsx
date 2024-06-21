import { createContext, useReducer } from "react";

 export const PostList = createContext({
    PostList : [],
    addPost : ()=>{},
    deletePost : ()=>{},
});

const PostListReducer =(currPostList, action) =>{
    return currPostList;
};

const PostListProvider = ({children})=>{
    const [PostList,dispatchPostList] = useReducer(PostListReducer,DEFAULT_POST_LIST);

    const addPost = () =>{};
    const deletePost = () =>{};

    return (<PostList.Provider value = {{PostList, addPost, deletePost}}>{children}</PostList.Provider>

);};

const DEFAULT_POST_LIST = [
    {
    id: "1",
    title:"Going to mumbai",
    body:"hii friends i am going to mumbai",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation","mumbai","enjoyig"],
},
{
    id: "2",
    title:"Going to DELHI",
    body:"hii friends i am going to mumbai",
    reactions: 15,
    userId: "user-12",
    tags: ["vacation","mumbai","enjoyig"],
},
];

export default PostListProvider;
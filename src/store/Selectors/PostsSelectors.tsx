
import { createSelector } from "reselect";

const PostsSelector = createSelector(
    (state:any) => state.posts,
    (posts:any) => {
        return posts.posts
    }
   
  )

  export default PostsSelector;

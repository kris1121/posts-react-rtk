import { useSelector } from "react-redux";

import PostsExcerpt from "./PostsExcerpt";
import { getPostsStatus, getPostsError, selectPostIds } from "./postsSlice";


const PostsList = () => {

    const orderedPosts = useSelector(selectPostIds);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    let content;
    if (postsStatus === 'loading') {
        content = <p>"Loading..."</p>
    } else if (postsStatus === 'succeeded') {
        content = orderedPosts.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    } else if (postsStatus === 'failed') {
        content = <p>{error}</p>
    }

  return (
      <section>
          {content}
    </section>
  )
}

export default PostsList
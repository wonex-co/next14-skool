import { Doc } from '@/convex/_generated/dataModel';

import { CommentList } from './comment-list';
import { PostCard } from './post-card';


interface PostProps {
    post: Doc<"posts"> & {
        likes: Doc<"likes">[];
        comments: Doc<"comments">[];
        author: Doc<"users">;
    };
};

export const Post = ({
    post,
}: PostProps) => {

    return (
        <div>
            <PostCard
                post={post}
                className="hover:shadow-[1px_1px_2px_2px_rgba(0,0,0,0.3)] space-y-4 p-4 rounded-xl"
            />
            <CommentList post={post} />
        </div>
    );
};
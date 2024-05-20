import { ScrollArea } from '@/components/ui/scroll-area';
import { api } from '@/convex/_generated/api';
import { Doc } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';
import { useEffect, useRef } from 'react';

import { CommentCard } from './comment-card';
import { CommentInput } from './comment-input';

interface CommentListProps {
    post: Doc<"posts"> & {
        likes: Doc<"likes">[];
        comments: Doc<"comments">[];
        author: Doc<"users">;
    };
}

export const CommentList = ({ post }: CommentListProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const comments = useQuery(api.comments.list, { postId: post._id }) || [];
    useEffect(() => {
        scrollToBottom();
    }, [comments])

    const scrollToBottom = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="flex flex-col gap-y-8">
            <CommentInput postId={post._id} />
            <ScrollArea className="max-h-[250px] border px-2">
                <div className="flex flex-col space-y-8">
                    {comments.map((comment) => (
                        <CommentCard key={comment._id} comment={comment} author={post.author} />
                    ))}
                    <div ref={scrollRef} />
                </div>
            </ScrollArea>
        </div>
    );
};
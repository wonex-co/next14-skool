"use client";

import { Id } from "@/convex/_generated/dataModel";
import { CourseList } from "./_components/course-list";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface ClassroomProps {
    params: {
        groupId: Id<"groups">;
    }
};

const ClassroomPage = ({ params }: ClassroomProps) => {
    const group = useQuery(api.groups.get, { id: params.groupId })

    return (
        <div className="py-6">
            <CourseList groupId={params.groupId} />
        </div>
    )
};

export default ClassroomPage;
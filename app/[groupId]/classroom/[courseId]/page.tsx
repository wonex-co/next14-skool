"use client";

import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useQuery } from 'convex/react';

import { Curriculum } from './_components/curriculum';


interface CourseProps {
    params: {
        groupId: Id<"groups">;
        courseId: Id<"courses">;
    }
};

const CoursePage = ({ params }: CourseProps) => {
    const course = useQuery(api.courses.get, { id: params.courseId });
    if (!course || Array.isArray(course)) return <div>Loading...</div>;
    return (
        <Curriculum course={course} groupId={params.groupId} />
    )
};

export default CoursePage;
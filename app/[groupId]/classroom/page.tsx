import { Id } from '@/convex/_generated/dataModel';

import { CourseList } from './_components/course-list';


interface ClassroomProps {
    params: {
        groupId: Id<"groups">;
    }
};

const ClassroomPage = ({ params }: ClassroomProps) => {

    return (
        <div className="py-6">
            <CourseList groupId={params.groupId} />
        </div>
    )
};

export default ClassroomPage;
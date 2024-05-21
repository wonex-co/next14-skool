import { Loading } from '@/components/auth/loading';
import { Button } from '@/components/ui/button';
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import { useRouter } from 'next/navigation';

import { GroupCard } from './group-card';

export const GroupList = () => {
    const groups = useQuery(api.groups.listAll, {});
    const router = useRouter();

    const handleCreate = () => {
        router.push("/create");
    }

    if (groups === undefined) {
        return <Loading />;
    }

    if (groups.length === 0) {
        return <div className="h-full flex items-cente justify-center">
            <Button onClick={handleCreate}>Crie uma comunidade</Button>
        </div>;
    }

    return (
        <div className="grid grid-cols-3 gap-10">
            {groups.map((group) => (
                <GroupCard key={group._id} group={group} />
            ))}
        </div>
    );
};
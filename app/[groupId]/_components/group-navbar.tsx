"use client";
import { Button } from '@/components/ui/button';
import { useParams, useRouter } from 'next/navigation';

export const GroupNavbar = () => {
    const router = useRouter();
    const { groupId } = useParams();

    if (groupId.length === 0 || groupId === undefined) {
        router.push("/");
    }

    return (
        <div className="flex w-full h-[50px] items-center justify-start bg-neutral-100 px-96">
            <Button variant={"ghost"} onClick={() => router.push(`/${groupId}`)}>Comunidade</Button>
            <Button variant={"ghost"} onClick={() => router.push(`/${groupId}/classroom`)}>Classroom</Button>
            <Button variant={"ghost"} onClick={() => router.push(`/${groupId}/members`)}>Membros</Button>
            <Button variant={"ghost"} onClick={() => router.push(`/${groupId}/about`)}>Sobre</Button>
        </div>
    )
}
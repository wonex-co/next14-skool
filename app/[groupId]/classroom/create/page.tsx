"use client"
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface CreateCourseProps {
    params: {
        groupId: Id<"groups">;
    }
}

const CreateCourse = ({ params }: CreateCourseProps) => {
    const router = useRouter();
    const {
        mutate: create,
        pending
    } = useApiMutation(api.courses.create);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = async () => {
        const courseId = await create({
            title,
            description,
            groupId: params.groupId
        });
        setTitle("");
        setDescription("");
        router.push(`/${params.groupId}/classroom/${courseId}`);
    }


    return (
        <div className="flex h-full items-center justify-center text-xl">
            <div className="flex flex-col max-w-[550px] h-[450px] justify-between">
                <Logo />
                <p className="font-bold">🎓 Crie e compartilhe seu conhecimento com o mundo por meio de um curso on-line envolvente.</p>
                <p>🚀 Gere resultados de aprendizagem excepcionais</p>
                <p>💖 Configure sua comunidade perfeitamente</p>
                <p>😄 Desfrute de uma experiência de aprendizagem deliciosa</p>
                <p>💸 Monetize através da inscrição na comunidade</p>
                <p>📱 Acessível através de aplicativos iOS e Android</p>
                <p>🌍 Conecte-se com alunos em todo o mundo</p>
            </div>


            <div className="flex flex-col rounded-lg shadow-xl max-w-[550px] h-[450px] p-16 justify-between">
                <h2 className="font-bold">Crie uma comunidade</h2>
                <p className="text-sm">Crie sua comunidade hoje e compartilhe seu conhecimento com o mundo.</p>

                <Input placeholder="Nome da comunidade" value={title} onChange={(e) => setTitle(e.target.value)} />
                <Input placeholder="Descrição da comunidade" value={description} onChange={(e) => setDescription(e.target.value)} />
                <Button onClick={handleCreate} disabled={pending}>Criar</Button>
            </div>
        </div>
    );
}

export default CreateCourse;
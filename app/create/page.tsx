"use client";

import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { api } from '@/convex/_generated/api';
import { useAction } from 'convex/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Create = () => {
    const pay = useAction(api.stripe.pay);
    const router = useRouter();

    const [name, setName] = useState("");

    const handleCreate = async () => {
        const url = await pay({ name });
        router.push(url);
    }
    return (
        <div className="flex h-full items-center justify-center text-xl">
            <div className="flex flex-col max-w-[550px] h-[450px] justify-between">
                <Logo />
                <p className="font-bold">🌟 Capacite sua comunidade e gere renda online sem esforço.</p>
                <p>🚀 Promova um envolvimento excepcional</p>
                <p>💖 Configure perfeitamente</p>
                <p>😄 Desfrute de uma experiência de usuário agradável</p>
                <p>💸 Monetize por meio de taxas de adesão</p>
                <p>📱 Acessível através de aplicativos iOS e Android</p>
                <p>🌍 Conecte-se com milhões de usuários diários em todo o mundo</p>
            </div>

            <div className="flex flex-col rounded-lg shadow-xl max-w-[550px] h-[450px] p-16 justify-between">
                <h2 className="font-bold">
                    Criar uma comunidade
                </h2>
                <p className=" text-sm">
                    R$19,99/mês. Cancele a qualquer momento sem complicações.
                    Acesse todos os recursos com uso ilimitado e absolutamente sem custos ocultos.
                </p>
                <Input
                    placeholder="Nome da comunidade"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Button onClick={handleCreate}>
                    Criar
                </Button>
            </div>
        </div>
    );
}

export default Create;
"use client";

import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface LogoProps {
    className?: string;
}

export const Logo = ({
    className
}: LogoProps) => {
    return (
        <div className={cn("cursor-pointer font-bold text-5xl" && className)}>
            <Image width={150} height={60} src="/logo.svg" alt="REKREIO" objectFit="cover" />
        </div>
    );
}
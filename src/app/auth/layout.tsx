import { currentUser } from "@clerk/nextjs"
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const AuthLayout = async({ children }: { children: React.ReactNode }) => {
    const user = await currentUser();
    if(user) {
        redirect('/')
    }
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
                {children}
            </div>
            <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
                <h2 className="text-gravel md:text-4xl font-bold">
                    Welcome to Flatmates
                </h2>
                <p className="text-iridium md:text-sm mb-10">
                    Flatmates is a platform that helps you find a flatmate.
                </p>
            </div>
        </div>
    )
}

export default AuthLayout
'use client'

import { useState } from "react";
import { Card, CardHeader, CardDescription, CardTitle, CardContent  } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, useFormField } from "@/components/ui/form";
import { useForm } from "react-hook-form";


export const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8),
})
const SignInForm = () => {
    const form = useForm<z.infer<typeof signInSchema>> ({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })
}

function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values)
}

const SignUpForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Card>
            <CardHeader>
                <CardTitle>Welcome back!</CardTitle>
                <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <Form   {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2"></form>
                </Form>
            </CardContent>
        </Card>
    )
}

export default SignUpForm; 
'use server'

import { revalidatePath } from 'next/cache'

export async function testAction() {
    revalidatePath('/test')
}
export async function testBackendAction() {
    const response = await fetch('https://flatbuddy-dev.vercel.app/api/test')
    const data = await response.json()
    return data
}
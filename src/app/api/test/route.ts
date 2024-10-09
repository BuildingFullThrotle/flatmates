export async function GET(req: Request, res: Response) {
    try {
        const response = await fetch('https://flatbuddy-backend.vercel.app/api/health')
        const data = await response.json()
        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response('Down', { status: 500 })
    }
}
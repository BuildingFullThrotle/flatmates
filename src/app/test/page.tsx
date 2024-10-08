'use client'
import { Button } from "@/components/ui/button"
import { CheckCircle2, Loader2, X } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { testBackendAction } from "./test.action"

const TestPage = () => {
    const [testingFlatbuddyBackend, setTestingFlatbuddyBackend] = useState<boolean>(false)
    const [testingFlatbuddyBackendResult, setTestingFlatbuddyBackendResult] = useState<boolean>(false)
    const testFlatbuddyBackend = async () => {
        setTestingFlatbuddyBackend(true)
        try {
            const data = await testBackendAction();
            if(data.status === 'Up and Running') {
                toast.success('Flatbuddy-backend is running')
                setTestingFlatbuddyBackendResult(true)
            }
        } catch (error) {
            toast.error('Flatbuddy-backend is not running')
            setTestingFlatbuddyBackendResult(false)
        }
        setTestingFlatbuddyBackend(false)
    }
    return (
        <div className="h-screen w-full flex  m-14">
            <div className="m-10 flex flex-col items-start justify-start">
                <div className="flex flex-row items-start justify-start w-full px-10 bg-slate-200 rounded-md p-4 shadow-xl">
                    <Button variant="outline" disabled={testingFlatbuddyBackend} onClick={testFlatbuddyBackend}>
                        Test Flatbuddy-backend
                    </Button>
                    <div className="flex flex-row items-center justify-center my-auto">
                        {
                            testingFlatbuddyBackend ? <Loader2 className="animate-spin size-4 ml-2" /> : testingFlatbuddyBackendResult ? <CheckCircle2 className="size-4 ml-2" /> : <X className="size-4 ml-2" />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage
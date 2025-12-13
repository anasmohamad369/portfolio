"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export function ActiveVisitors() {
    const [count, setCount] = useState<number | null>(null)

    useEffect(() => {
        // Generate or retrieve session ID
        let sessionId = typeof window !== 'undefined' ? sessionStorage.getItem('visitorSessionId') : null

        if (!sessionId && typeof window !== 'undefined') {
            sessionId = Math.random().toString(36).substring(2) + Date.now().toString(36)
            sessionStorage.setItem('visitorSessionId', sessionId)
        }

        const ping = async () => {
            if (!sessionId) return

            try {
                const res = await fetch('/api/visitors', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ sessionId }),
                })
                if (res.ok) {
                    const data = await res.json()
                    setCount(data.count)
                }
            } catch (e) {
                console.error("Failed to ping visitor API", e)
            }
        }

        // Initial ping
        ping()

        // Poll every 5 seconds
        const interval = setInterval(ping, 5000)

        return () => clearInterval(interval)
    }, [])

    if (count === null) return null

    return (
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-4 py-1.5 rounded-full border border-border/50 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-medium">{count} {count === 1 ? 'person' : 'people'} viewing</span>
        </div>
    )
}

import { NextResponse } from 'next/server';

// Use globalThis to persist store across hot reloads in development
const globalForVisitors = globalThis as unknown as {
  visitorStore: Map<string, number>
}

// Initialize store if it doesn't exist
if (!globalForVisitors.visitorStore) {
  globalForVisitors.visitorStore = new Map()
}

const STORE = globalForVisitors.visitorStore
const TIMEOUT = 15 * 1000 // 15 seconds timeout

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}))
    const sessionId = body?.sessionId
    const now = Date.now()

    if (sessionId) {
      STORE.set(sessionId, now)
    }

    // Clean up old sessions
    for (const [id, lastSeen] of STORE.entries()) {
      if (now - lastSeen > TIMEOUT) {
        STORE.delete(id)
      }
    }

    return NextResponse.json({ count: STORE.size })
  } catch (error) {
    console.error('Error in visitors API:', error)
    return NextResponse.json({ count: 1 })
  }
}

// middleware.ts
import { NextRequest, NextResponse } from 'next/server'

// Define which paths should be public
const PUBLIC_PATHS = ['/login', '/register', '/_next', '/favicon.ico']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl

  // Skip public paths
  if (PUBLIC_PATHS.some(path => pathname.startsWith(path))) {
    return NextResponse.next()
  }

  const token = req.cookies.get('token')?.value

  if (!token) {
    // Redirect to login if token is missing
    const loginUrl = new URL('/login', req.url)
    return NextResponse.redirect(loginUrl)
  }

  // (Optional) Validate JWT token structure here (e.g., decode and check expiry)
  // You can also verify it using a secret if needed

  return NextResponse.next()
}

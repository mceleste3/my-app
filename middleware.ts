import { NextRequest, NextResponse } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; //crear un middlewareClient 

export async function middleware(req:NextRequest) {
    console.log("Middleware")
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({req, res}); // npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
    await supabase.auth.getSession();
    return res;
}

export const config = {
    matcher: ["/"] //el middleware se aplica a la ruta de home 
}
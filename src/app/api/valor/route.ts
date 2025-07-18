// app/api/valor/route.ts
import { Redis } from '@upstash/redis'
import { NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function GET() {
  try {
    const valor = await redis.get<number>('valor')
    return NextResponse.json({ valor: valor ?? 0 })
  } catch(err) {
    console.log(err);
    return NextResponse.json({ valor: 0})
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const novoValor = body.novoValor
    await redis.set('valor', novoValor)
    return NextResponse.json({ valor: novoValor })
  } catch(err) {
    console.log(err)
    return NextResponse.json({ valor: 0})
  }
}

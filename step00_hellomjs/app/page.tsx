import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <div>
            <br />
            <Link href = '/name'>Get Name</Link>
            <h1>Hello MJS</h1>
            <br />
            <Link href='/futurefest'>Check FutureFest 2023</Link>
            <br />
            <Link href='/meetups'>Check Meetups in 2023</Link>
            <br />
            <Link href='/fun'>Check Funfairs 2023</Link>
            </div>
  )
}
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Link from 'next/link'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <div>
            <Link href = '/'>Home</Link>
            <Link href = '/name'>Get Name</Link>
            <h1>Hello MJS</h1>
            </div>
  )
}
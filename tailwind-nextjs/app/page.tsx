import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello, Next.js!
  </h1>
    
    <h1 className="font-sans">
    font-san
    </h1>
    <h1 className='font-serif'>
    font-serif
    </h1>
    <h1 className='font-mono'>
    font-mono
    </h1>

    </>
  )
}

import Intro from '@/components/Intro'
import SectionDevider from '@/components/SectionDevider'
import Image from 'next/image'
export default function Home() {
  return (
    <main className="pt-[150px] z-20 flex flex-col items-center px-4">
        <Intro />
        <SectionDevider />
    </main>
  )
}

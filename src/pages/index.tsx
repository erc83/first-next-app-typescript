// import Image from 'next/image'
// import Navbar from '@/components/Navbar'
//import Link from 'next/link'
import { MainLayout } from '@/components/layouts/MainLayouts';




export default function HomePage() {
  return (
    <MainLayout>
       <div className="description">
          <div>
            <h1>Hola Home</h1>
          </div>
          <div>
            Get started by editing&nbsp;
            <code className="code">src/app/page.js</code>
          </div>
       
        </div>
    </MainLayout>
  )
}

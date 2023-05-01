import { DarkLayout } from "@/components/layouts/DarkLayout";
import { MainLayout } from "@/components/layouts/MainLayouts";


export default function About() {
  return (
    <MainLayout>
      <DarkLayout>
       <div className="description">
          <div>
            <h1>Hola About</h1>
          </div>
          <div>
            Get started by editing&nbsp;
            <code className="code">src/app/about/page.jsx</code>
          </div>
        </div>
      </DarkLayout>
    </MainLayout> 

  )
}

/**
 *    en version inferior a 13 funciona y se tiene que agregar en el _app.js
About.getLayout = function getLayout( page ){
  return(
    <MainLayout>
    <DarkLayout>
    
    { page }
    
    </DarkLayout>
    </MainLayout>
    )
  }
*/
  

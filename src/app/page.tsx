import Image from 'next/image'
import Calculator from '../Componentes/calculator'
import "../Styles/estilos.css"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Calculator/>

      
    </main>
  )
}

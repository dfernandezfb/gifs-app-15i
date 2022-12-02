import { useEffect, useState } from "react"

function App() {
  const [state1,setState1] = useState('hola1')
  const [state2,setState2] = useState('hola2')
  const [state3,setState3] = useState('hola3')
  //! ESCUCHA CUANDO SE MONTA, Y TODAS LAS ACTUALIZACIONES DE ESTADO - USO 1
  // useEffect(()=>{
  //   console.log('uso 1, el componente se montó o se actualizó')
  // })
  //! ESCUCHA CUANDO SE MONTA, Y LAS ACTUALIZACIONES DE LOS ESTADOS DEL ARRAY - USO 2
  // useEffect(()=>{
  //   console.log('uso 2, el componente se montó o se actualizó uno de los estados del array de dependencias')
  // },[state1, state2])
  //! ESCUCHA CUANDO SE MONTA
  // useEffect(()=>{
  //   console.log('uso 3, el componente se montó')
  // },[])
  //! ESCUCHA CUANDO SE MONTA Y CUANDO SE DESMONTA
  // useEffect(()=>{
  //   console.log('uso 4, el componente se montó')
  //   return ()=>{
  //     console.log('uso 4, el componente se desmontó')
  //   }
  // },[state2])

  return (
    <div className="App">
      {state1}
      {state2}
      {state3}
      <div>
        <button onClick={()=>setState1('chau1')}>Cambiar estado 1</button>
        <button onClick={()=>setState2('chau2')}>Cambiar estado 2</button>
        <button onClick={()=>setState3('chau3')}>Cambiar estado 3</button>
      </div>
      
    </div>
  )
}

export default App

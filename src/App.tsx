import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Make from './Create'

import Previews from './Previews'
import { useState } from 'react';
function App() {

interface Field {
  id: string;
  type: string;
  label:string
  placeholder?: string;
  options?: object[]; // only for select
}

const [data , setData] = useState<Field[]>([])
 const [Title , setTilte] = useState('')



  return (
    <>

       <BrowserRouter>
       <Routes>
        <Route path='/create' element={<Make setData = {setData} data = {data} setTilte={setTilte} Title={Title}/>}></Route>
        <Route path='/preview' element={<Previews field={data} Title={Title}/>}></Route>
       </Routes>
       </BrowserRouter>
        
    </>
  )
}

export default App

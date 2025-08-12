import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Make from './Create'

import Previews from './Previews'
import { useState } from 'react';
import MyForms from './MyForms';
function App() {

interface Field {
  id: string;
  type: string;
  label:string
  placeholder?: string;
  options?: object[]; // only for select
}

const [data , setData] = useState<Field[]>([])
 const [Title , setTitle] = useState('')



  return (
    <div className='h-full w-full'>
      
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Make setData = {setData} data = {data} setTitle={setTitle} Title={Title}/>}></Route>
        <Route path='/preview' element={<Previews field={data} Title={Title}/>}></Route>
        <Route path='/myforms' element={<MyForms/>}></Route>
       </Routes>
       </BrowserRouter>
        
    </div>
  )
}

export default App

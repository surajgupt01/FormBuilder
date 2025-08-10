import { useEffect, useState  } from 'react'
import { nanoid } from "nanoid";
import { useNavigate } from 'react-router-dom';
import './App.css'
import Logo from './svgs/Logo'
import FormLogo from './svgs/Formlogo';
import Create from './svgs/Create';
import Close from './svgs/Close';
import Preview from './svgs/Preview';
import Save from './svgs/Save';


export default function Make({setData , data , setTilte , Title} : any) {



interface Field {
  id: string;
  type: string;
  label:string
  placeholder?: string;
  options?: object[]; // only for select
}

 
  const [fields, setFields] = useState<Field[]>([]);
  const [section , setSection] = useState(false)
  const [choose , setChoose] = useState<string[]>([])
  const [statement , setStatement] = useState();
  const[input , setInput]  = useState<object[]>([])
  const [Prev , setPreview] = useState(false)
  const navigate = useNavigate()
 

  function chooseField(type:string){

    setChoose([...choose , type])
    
  }


  function handleChange(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> , statement : string){

      console.log(statement ,"---",e.currentTarget?.value)

  }


  interface Forms{

    Title : string
    forms : Field[]

  }




  function createSection(details : any){


  setFields([...fields , details])
  setData([...data , details])

    


  }

 

  useEffect(()=>{

  },[fields])


  return (
    <>
        <div className={`bg-white w-full h-screen flex justify-around items-center p-2 relative `}>


         {Prev &&  <div className={`w-full h-full absolute ${Prev ? 'bg-gray-500' : ''}`}>
            <button onClick={()=>setPreview(e=>!e)}><Close/></button>
          </div>
}
          {/* {Prev && <Previews field = {fields}/>} */}



          <div className='w-80 h-full border-r-1  border-gray-300 '>
            <div className='font-semibold text-lg text-neutral-600 p-4 '>
              
              <div className='flex items-center'><Logo/> Form-Builder</div>

              <div className='mt-20 p-2 h-50  text-sm flex flex-col  font-medium text-gray-600 '>
                <div className='flex flex-col justify-between h-full'>
                  <span className='cursor-pointer '>Add --</span>
                  <div className='cursor-pointer mt-4   w-30 relative rounded-sm flex flex-col group transition-all duration-300 ease-in-out '>
                  
                    <span className='hover:bg-gray-300  w-30 p-1 rounded-sm'>Input Box</span>
                    <div className='opacity-0 overflow-hidden max-h-0 group-hover:max-h-20 -translate-y-4  group-hover:opacity-100  transition-all duration-300 ease-in-out group-hover:translate-y-0 ml-4 '>
                      
                    <div className='text-xs font-light'>type :</div>
                    <div className='text-sm text-gray-800 font-normal hover:scale-110 duration-300 ml-4' onClick={()=>chooseField('text')}>text/number</div>
                    <div className='text-sm text-gray-800 font-normal duration-300 hover:scale-110 ml-4' onClick={()=>chooseField('email')}>email</div>
                  </div>
                  </div>

                  <div className='cursor-pointer hover:bg-gray-300 w-30 p-1 rounded-sm mt-2 ' onClick={()=>chooseField('textarea')}>Textarea</div>
                  <div className='cursor-pointer hover:bg-gray-300 w-30 p-1 rounded-sm mt-2 '>Select fields</div>
                  <div className='cursor-pointer  w-30 relative rounded-sm flex flex-col group transition-all duration-300 ease-in-out '>
                  
                    <span className='hover:bg-gray-300  w-30 p-1 rounded-sm mt-2'>Buttons</span>
                    <div className='opacity-0 overflow-hidden max-h-0 group-hover:max-h-20 -translate-y-4  group-hover:opacity-100  transition-all duration-300 ease-in-out group-hover:translate-y-0 ml-4 '>
                      
                    <div className='text-xs font-light'>type :</div>
                    <div className='text-sm text-gray-800 font-normal hover:scale-110 duration-300 ml-4' onClick={()=>chooseField('radio')}>radio</div>
                    <div className='text-sm text-gray-800 font-normal duration-300 hover:scale-110 ml-4' onClick={()=>chooseField('checkbox')}>checkbox</div>
                  </div>
                  </div>
                  <div className='cursor-pointer hover:bg-gray-300 w-30 p-1 rounded-sm mt-2 ' onClick={()=>chooseField('date')}>Date</div>
                </div>



                <div className='border-1 w-30 mt-85 font-semibold border-gray-600 bg-gray-700 rounded-lg p-2 flex justify-center items-center text-white scale-80 hover:bg-gray-800 cursor-pointer mt- text-sm ' onClick={()=>navigate('/myforms')}>My-Forms</div>

              </div>
            
            
            
            </div>
          </div>
          <div className={`w-[65%] h-full relative   bg-white/50 flex flex-col items-center p-4 overflow-auto scroll-smooth custom-scrollbar } `}>


          <div className={`absolute top-15 right-20 border-1 border-gray-200 hover:border-gray-400 scale-150 w-8 rounded-xs h-8 cursor-pointer flex justify-center items-center `}  onClick={()=>setSection(e=>!e)}><Create/></div>
             
             
             
             <form className='flex flex-col w-full h-auto mt-30 border-1 border-gray-300 p-4 rounded-sm' > 
             
              <div className='bg-neutral-900 w-full rounded-md h-40 mt-4 mb-4 flex justify-between items-end p-4'>
                <input placeholder='Form Title' className='border-b-1 border-gray-300 text-2xl font-semibold text-gray-400 outline-0' value={Title}  onChange={(e:any)=>setTilte(e.currentTarget.value)}></input>
                <span className='font-semibold text-gray-400 text-xs flex items-center '>Created by Form-Builder <Logo/></span>
              </div>
              {data.length==0 && <div className='text-3xl text-gray-400 mx-auto  flex mt-20 flex-col items-center'>Create you form <br></br> <FormLogo/></div>}
             
{data.map((field: any , fieldIdx : number) => (

  <div key={field.id} className='border-1 border-gray-300 rounded-md bg-gray-100 p-2 my-2 '>
    {fieldIdx+1+". " }<label htmlFor=''>{field.label}</label>

    <div>
      {field.options.map((opt: any, idx: number) => (
        <div key={idx} className=''>
          {Object.entries(opt).map(([key, value]:any) => (
            <div key={key} className='flex items-center gap-x-2  p-1'>
              {(key == 'checkbox' || key =='radio') && <input  id={field.label + fieldIdx + value}  type={key} name={field.label+fieldIdx} value={value} className='ml-2 ' onChange={(e)=>handleChange(e , field.label)}></input>}
              {(key == 'text' || key == 'number' || key == 'email') && <input placeholder={value} type='text' className='w-100 border-b-1 border-gray-500 h-10 p-1  outline-0 'onChange={(e)=>handleChange(e , field.label)}></input> }
              {(key == 'date' ) && <input placeholder={value} type='date' className='w-100 border-b-1 border-gray-500 h-10 p-1  outline-0 'onChange={(e)=>handleChange(e,field.label)}></input> }
              {(key == 'textarea') && <textarea placeholder={value} className='w-90 h-40 p-1 rounded-md resize-none border-1 border-gray-500 outline-0'onChange={(e)=>handleChange(e , field.label)}></textarea> }
              {(key=='checkbox' || key == 'radio') &&<label htmlFor={field.label+fieldIdx+value} className='text-gray-600 text-sm cursor-pointer '>{value}</label>}
            </div>
          ))}

        </div>
      ))}


    </div>
  </div>
))}


                    
         <button type='submit' className='bg-black text-white font-semibold text-shadow-xs text-shadow-gray-700 p-1 w-30 rounded-sm mt-4 cursor-pointer hover:bg-neutral-900'>Submit</button>


             </form>

             {section &&
             <div className={`border-1 border-gray-300 rounded-md w-130 min-h-50 h-auto fixed top-20  p-4 flex flex-col items-center backdrop-blur-xl bg-gray-300 delay-700 ease-in-out transition-all ${section ? 'scale-100' : 'scale-0'} `}>
              <div className='cursor-pointer text-gray-500 scale-90  w-full flex justify-end hover:text-gray-900' onClick={()=>setSection(e=>!e)}><Close/></div>
              <span className='text-xl text-gray-500 font-semibold'>Create section</span>
              <input className='border-b-1 border-gray-400 w-full text-sm p-1 outline-0 '  placeholder='Enter the statement' onChange={(e:any)=>setStatement(e.currentTarget.value)}></input>
              <label className='text-sm text-gray-700 mt-2  w-full'>Choose input field type from sidebar :- </label>
              <div className='grid grid-cols-1  w-[80%] mt-2'>
              {choose.map((e,index)=>(
                <div className='flex items-end justify-between' key={index}>
                  {e}: <input placeholder='Enter Option/placehoder ' className='border-b-1 border-gray-400 w-60 p-1 text-sm'
                   onChange={(x:React.ChangeEvent<HTMLInputElement>)=>{
                        const newInput = [...input];
                        newInput[index] = {[e] : x.currentTarget.value }; 
                        setInput(newInput)
                   }}
                  
                  ></input>
                  <div className='cursor-pointer scale-80 hover:text-gray-700' onClick={()=>{
                    setChoose(choose.filter((_,idx)=>idx!=index))
                  }}><Close/></div>
                 
                </div>
              ))}
              </div>
            
             
              <button className='bg-black text-white font-semibold text-shadow-xs text-shadow-gray-700 p-1 w-30 rounded-sm mt-4 cursor-pointer hover:bg-neutral-900' onClick={()=>{

                 const temp =  {
                     
                  id: nanoid(),
                  type: 'radio',
                  label : statement,
                  options : input

                 }
                 console.log(temp)
                 createSection(temp)

              }}>submit</button>
             </div>
              } 

          </div>
          <div className='w-60 h-full border-l-1  border-gray-200 p-4   '>
            

            <div className='flex  '>

           <div className=' w-10  hover:cursor-pointer group flex flex-col justify-center items-center' onClick={()=>navigate('/preview')}>  
            
            <Preview/>
            <div className='border-1 border-gray-300 rounded-sm p-1 text-xs text-gray-900 group-hover:opacity-100 opacity-0 -translate-y-5 group-hover:translate-y-0 ease-in-out duration-300'>Preview</div>
           
             </div>

            <div className=' w-10  hover:cursor-pointer group flex flex-col justify-center items-center' onClick={()=>{
              
                  const formData: Forms = { Title: Title, forms: data };


    const savedForms = localStorage.getItem("forms-data");
    let formDataArray: Forms[] = savedForms ? JSON.parse(savedForms) : [];

  
    formDataArray.push(formData);

    // Store updated array
    localStorage.setItem("forms-data", JSON.stringify(formDataArray));

    alert("Form saved");
  }}
            >  
            
            <Save/>
            <div className='border-1 border-gray-300 rounded-sm p-1 text-xs text-gray-900 group-hover:opacity-100 opacity-0 -translate-y-5 group-hover:translate-y-0 ease-in-out duration-300'>Save</div>
           
             </div>


              {/* <div className='bg-blue-500 text-white font-semibold p-2 rounded-full text-sm w-8 h-8 flex justify-center items-center ml-15'><span className=''>S</span></div> */}


             </div>


            
     

          </div>


          

        </div>
    </>
  )
}


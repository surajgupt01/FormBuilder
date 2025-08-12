import { useState } from "react"
import Previews from "./Previews"

export default function MyForms(){
    let formsData = localStorage.getItem('forms-data')
    console.log(typeof(formsData))
    let data : any = []
    formsData ? data = JSON.parse(formsData) as [] : null



    data && data.map((e : any)=>{

        console.log(e)
                
             })



interface Field {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: object[]; // only for select
}

type PreviewsProps = {
  forms: Field[];
  Title : string
};        

      const [Prev , setPrev] = useState<PreviewsProps>()    
      
      

      function ChangePrev(e:PreviewsProps){
        setPrev(e)
      }
    
    return(
        <div className="p-4 w-full h-full   ">
            <div className="text-black font-bold text-xl mt-4 mb-4">My Forms</div>
            <div className="w-full h-[1px] bg-black mb-4"></div>

            <div className=" w-full p-4 grid grid-cols-2 h-[90%]">
            <div className="grid grid-cols-3 w-full ">
            {data && data.map((e:any)=>(
                <div className="flex flex-col items-center h-62" onClick={()=>ChangePrev(e)}>

                <div className="border-1 border-gray-300 rounded-sm  w-40 h-50 m-2 hover:border-gray-500 cursor-pointer">
                 
                 

                </div>
                {e.Title}

                </div>

            ))}

            </div>

            

            <div className="border-1  border-gray-300 rounded-xs w-full h-full p-4 flex flex-col items-center overflow-auto custom-scrollbar scroll-smooth">
                <div>Preview</div>
               { (Prev) && <Previews Title={Prev?.Title} field={Prev?.forms} ></Previews>}
            </div>
             
            </div>
             

        </div>
    )
}
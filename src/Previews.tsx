import Logo from "./svgs/Logo";

interface Field {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  options?: object[]; // only for select
}

type PreviewsProps = {
  field: Field[];
  Title : string
};


export default function Previews(  {field , Title} : PreviewsProps  ) {

    
function handleChange(e:React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> , statement : string){

      console.log(statement ,"---",e.currentTarget?.value)

  }


  return (
    <div className="w-full h-full flex justify-center  ">
    <div className="w-[70%] mt-8 mb-8  top-20 mx-auto shadow-sm shadow-gray-500 rounded-md bg-white backdrop-blur-2xl border-gray-400 border-1  z-100 p-6 flex flex-col items-center">
                     <div className='bg-neutral-900 w-full rounded-md h-40 mt-4 mb-4 flex justify-between items-end p-4'>
                       <input placeholder='Form Title' className='border-b-1 border-gray-300 text-2xl font-semibold text-gray-400 outline-0' disabled  value={Title}></input>
                       <span className='font-semibold text-gray-400 text-xs flex items-center '>Created by Form-Builder <Logo/></span>
                     </div> 
      {field.map((field: any, fieldIdx: number) => (
        <div
          key={field.id}
          className="border-1 w-full border-gray-300 rounded-md bg-gray-100 p-2 my-2 "
        >
          {fieldIdx + 1 + ". "}
          <label htmlFor="">{field.label}</label>

          <div>
            {field.options.map((opt: any, idx: number) => (
              <div key={idx} className="">
                {Object.entries(opt).map(([key, value]: any) => (
                  <div key={key} className="flex items-center gap-x-2  p-1">
                    {(key == "checkbox" || key == "radio") && (
                      <input
                        id={field.label + fieldIdx + value}
                        type={key}
                        name={field.label + fieldIdx}
                        value={value}
                        className="ml-2 "
                        onChange={(e) => handleChange(e, field.label)}
                      ></input>
                    )}
                    {(key == "text" || key == "number" || key == "email") && (
                      <input
                        placeholder={value}
                        type="text"
                        className="w-100 border-b-1 border-gray-500 h-10 p-1  outline-0 "
                        onChange={(e) => handleChange(e, field.label)}
                      ></input>
                    )}
                    {key == "date" && (
                      <input
                        placeholder={value}
                        type="date"
                        className="w-100 border-b-1 border-gray-500 h-10 p-1  outline-0 "
                        onChange={(e) => handleChange(e, field.label)}
                      ></input>
                    )}
                    {key == "textarea" && (
                      <textarea
                        placeholder={value}
                        className="w-90 h-40 p-1 rounded-md resize-none border-1 border-gray-500 outline-0"
                        onChange={(e) => handleChange(e, field.label)}
                      ></textarea>
                    )}
                    {(key == "checkbox" || key == "radio") && (
                      <label
                        htmlFor={field.label + fieldIdx + value}
                        className="text-gray-600 text-sm cursor-pointer "
                      >
                        {value}
                      </label>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="bg-black p-2 cursor-pointer text-white font-semibold text-shadow-2xs text-shadow-gray-200 w-40 rounded-sm mt-6">Submit</button>
    </div>
     
    </div>
  );
}

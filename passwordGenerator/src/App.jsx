import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);
  const [Password,setPassword]=useState("");
  const passwordRef=useRef(null)
  const PasswordGenerator=useCallback(()=> {
    let pass=""
    let str="ABCDEFGHIJKLMONOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str +="0123456789"
    if(charAllowed) str +="!@$%^&*_+~"
    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random() *  str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  },[length,numberAllowed,charAllowed,setPassword])
  const copypasswordToclipboard=useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(Password)
  },[Password])
   useEffect(()=> {
    PasswordGenerator()
   },[length,numberAllowed,charAllowed,PasswordGenerator])
  return (
    <>
     <div className='W-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
     <h1 className='text-white text-center my-3'>password generator</h1>
       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
        value={Password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copypasswordToclipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
       </div>
       <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type='range'
          min={6}
          max={100}
          value={length}
          className='cursur-pointer'
          onChange={(e)=> {setLength(e.target.value)}}
          />
          <label>length={length}</label>

        </div>
        <div className='flex item-center gap-x-1'>
        <input 
          type='checkbox'
          defaultchecked={numberAllowed}
          id="numberInput"
          onChange={()=> {
            setNumberAllowed((prev)=> !prev);
          }}
         />
         <label>number</label>

        </div>
        <div className='flex item-center gap-x-1'>
        <input 
          type='checkbox'
          defaultchecked={charAllowed}
          id="characterInput"
          onChange={()=> {
            setCharAllowed((prev)=> !prev);
          }}
         />
         <label>characters</label>

        </div>
       </div>
     </div> 
     
    </>
  )
}

export default App

import { SliderButton } from '@typeform/embed-react'
import {AiFillBug} from 'react-icons/ai'


const MyComponent = () => {
  return (
    <SliderButton id="nQcZf4NJ" style={{ fontSize: 20 }} className="my-button fixed top-[90%] right-[2%] text-center text-[13px] sm:text-[16px] px-6 py-3 rounded-full font-bold shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] bg-transparent text-black animate-bounce transition-all duration-200  border bg-yellow-5 opacity-50 border-blue-500 hover:opacity-80 flex justify-center items-center gap-1 group">
        Report Bug
        <span>
          <AiFillBug className=' group-hover:scale-[1.5] transition-all duration-200'/>
        </span>
    </SliderButton>
  )
}

export default MyComponent;
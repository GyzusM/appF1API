import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/storeReducer";

const Dropdown = () => {

  const options = ['Driver Standings', 'Constructor Standings'];

  const [store, dispatch] = useContext(StoreContext)
  const {search} = store

  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null)

  const toggling = () => setIsOpen(!isOpen)

  return (
    <div className='inline-flex my-2'>
      <div className='min-w-[360px] relative inline-flex border-b-2 bg-white skew-x-[-10deg]'>
        <button type='button' className='font-extrabold text-2xl w-[100%] px-2 py-2'>
          {selectedOption || 'Standings'}
        </button>
        
        <div className='relative'>
          <button type='button' onClick={toggling} className='border-1 border-gray-10 inline-flex h-full items-center justify-center px-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19 9l-7 7-7-7'
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className='min-w-[360px] absolute top-6 right-0 z-10 mt-4 origin-top-right border border-gray-100 bg-white'>
              {options.map((option, index) => (
                <div key={index} className=" min-w-[300px] hover:bg-red-f1">
                  <button  type='button' 
                    onClick={ 
                      function(){
                        setSelectedOption(option)
                        setIsOpen(false)
                        if (option === 'Constructor Standings') {
                          dispatch({type: types.searchConstructor})
                        } else {
                          dispatch({type: types.searchDriver})
                        } 
                      }  
                    } 
                    className='w-[100%]'>
                    <div className='border-b-2 relative block  py-2 text-lg text-black hover:bg-red-f1 hover:text-white'>
                      {option}
                    </div>
                </button>
              </div>
              ))}
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
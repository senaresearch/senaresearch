import {useRef} from 'react'


const Modal = ({trigger, setTrigger, body, header, mainAction, back, children, modalWidth, mainActionFunc}) => {
  const innerModal = useRef()
  const closeModal = (e)=>{
    if (!innerModal.current.contains(e.target)){
      setTrigger(false)
    }
  }
  return (trigger) ? (
    <div onClick={closeModal} class="fixed top-0 left-0 bg-[#00000066]  z-[1055] hiddenn h-full w-full overflow-y-auto overflow-x-hidden outline-none" role="dialog">
      <div class={` bg-orange-40  pointer-events-none relative flex min-h-[calc(100%-1rem)] translate-y-[-50px] items-center opacity-1 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[${modalWidth}]`}>
        <div ref={innerModal} class="mt-16 pointer-events-auto relative flex w-11/12 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-4/12  mx-auto flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none">
            <div class="flex flex-col flex-shrink-0 items-center justify-between rounded-t-md  border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button onClick={()=>setTrigger(false)} type="button" class="box-content self-end border-none hover:no-underline focus:opacity-100 focus:shadow-none focus:outline-none hover:bg-gray-200 p-2 rounded-full transition-colors ease-linear duration-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12" />
                </svg>
                </button>
                <h5 class="self-center font-semibold text-xl text-primary leading-normal">{header} </h5>
            </div>
            <div class="relative p-4 flex gap-7 flex-col">
                {children}
            </div>
        </div>
      </div>
    </div>
  ) : ""
}
export default Modal
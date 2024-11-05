'user client'
import Link from 'next/link';
import React from 'react' 
import { twMerge } from 'tailwind-merge'

const ActionButton = (props) => { 
    const className = twMerge(`
            rounded-md font-normal text-center shadow-[1px_2px_4px_0px_#464F9226] border-2 border-[#FFFFFFA8] leading-3 text-dark w-[65px] h-12 sm:h-[55px] hover:bg-slate-200 hover:shadow-sm text-xs
            ${props.btnType === 'text' ? '!font-bold text-dark bg-[rgb(255,247,227)] uppercase text-base' : ''}
            ${props.btnType === 'document' && 'w-[86px]'}    
            ${props.btnType === 'sm' && 'w-8 sm:w-10'}    
            ${props.status === 'completed' && 'bg-[rgb(238,255,249)] text-dark'}    
            ${props.className}    
        `);
    const linkClasses = ' flex items-center justify-center';


  if(props.link == 'link') {
    return (
      <>
          <Link href={props.url} className={`${className} ${linkClasses}`} onClick={props.onClick}>
              {props.icon}
              <span className="block pt-0.5">{props.label}</span>
          </Link>
      </>
    ) 
  }
  return (
    <>
        <button className={className} type="button" onClick={props.onClick}>
            {props.icon}
            <span className="block pt-0.5">{props.label}</span>
        </button>
    </>
  ) 

}

export default ActionButton
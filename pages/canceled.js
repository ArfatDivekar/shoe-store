import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'
import { runFireWorks } from '@/lib/utils'
import { MdError } from "react-icons/md";

const Canceled = () => {

  return (
    <div className='cancel-wrapper'>
        <div className="cancel">
            <p className="icon">
                <MdError  />
            </p>
            <h3>
                You have cancelled your order
            </h3>
            <Link href="/">
                <button type='button' width="300px" className='btn'>
                    Continue shopping
                </button>
            </Link>
        </div>
    </div>
  )
}

export default Canceled
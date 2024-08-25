import React from 'react'
import '../../index.css'
const FilterNominal = () => {
  return (
    <div className='mt-5'>
        <h2 className='font-semibold'>Price</h2>
        <div className='flex gap-2'>
        <h2 className='font-medium text-gray-400 mb-2'>Max</h2>
        <ul>
            <li>
                <input type="number" placeholder='Rp. 100.000' className='focus:outline-none text-sm'/>
            </li>
        </ul>
        </div>
    </div>
  )
}

export default FilterNominal
import React from 'react'

export default function PackageDetail({data}) {
    console.log("datata",data)
  return (
    <>
    {
        data &&
        <> 
        <div className='py-3'>
        <h4> $3000 </h4>
        <p>
              The Lorem Ipsum text used today can be tracked down to the printing press industry in the 16th century.
            </p>
        {/* <h4 className='mx-4'>asdf</h4> */}
    </div>
    <div className='d-flex'>
        <p>6 days delivery</p>
        <p className='mx-4'>3 Revision</p>
    </div>
    <div>
    <button type='button' className='btn btn-primary w-50'>continue</button>
    </div>
    </>
    }
    
    </>
  )
}

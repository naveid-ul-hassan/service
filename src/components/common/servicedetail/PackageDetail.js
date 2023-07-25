import React from 'react'

export default function PackageDetail({data}) {
    console.log("datata",data)
  return (
    <>
    {
        data &&
        <> 
        <div className='d-flex py-3'>
        <h4>asdfa</h4>
        <h4 className='mx-4'>asdf</h4>
    </div>
    <div>
        <p>asdfas</p>
    </div>
    <div>
    <button type='button' className='btn btn-primary w-100'>continue</button>
    </div>
    </>
    }
    
    </>
  )
}

 import React from 'react'
 import Product from './Component/Product'
import HignerOrder from './Component/HignerOrder'
import Todo from './Component/Todo'
 
 function App() {
  let TodoHoc=HignerOrder(Todo,'todos')
  let ProductHoc=HignerOrder(Product,"posts")
   return (
    <>
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
           <ProductHoc/>
        </div>
        <div className='col-md-6'>
         <TodoHoc/>
        </div>
      </div>
    </div>
    </>
   )
 }
 
 export default App
import React, { useState } from 'react'
import {connect} from 'react-redux'
import {addproduct,removeproduct} from './action'
const Card = ({products,addproduct,removeproduct}) => {
  const[item,setItem]=useState('')

  const submitHandler= async(e)=>{
    e.preventDefault();
      if(item !== ''){
        await addproduct({name:item})
          setItem('')
      }

    }

  return (
    <div  class='card bg-primary' style={{'width':'20rem'}}>
      <div class='card-body'>
      <form onSubmit={submitHandler}>
        <input type='text' placeholder='Addproducts' value={item} onChange={(e)=>setItem(e.target.value)}/>
        <button type='submit' className='btn btn-success'>
          AddProduct
        </button>
        </form>
        <br/>

        {products.map((product)=>{
              return(
                     <div className='item'>
                       {product.name}
                       <span onClick={()=>removeproduct(product.name)} class='btn btn-primary badge square rounded-pill bg-warning'>x</span>
                     </div>

              )


        })}
      </div>
    </div>
  )
}
const mapStateToProps=(state)=>({

products:state

})

export default connect(mapStateToProps,{addproduct,removeproduct})(Card)





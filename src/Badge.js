life is struggle
import React from 'react'
import {connect} from 'react-redux'
const Badge = ({products}) => {
             
  return (
    <div style={{'margin':'80px 0px 10px 0px'}}>
      
        <button data-testid='button'type='button' className='btn btn-primary position-relative'>
          Totalproducts
          <span class='position-absolute top-0 start-100 trnslate-middle badge rounded-pill bg-danger'>{products.length}</span>
        </button>
      
      </div>
  )
}
const mapStateToProps = (state) =>({
 products:state


})

export default connect(mapStateToProps)(Badge)




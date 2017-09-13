import React, { Component } from 'react'
import style from './style.css'

export default class CarDetails extends Component {
  render() {
    const { id, name, price, imageUrl } = this.props
    return (
      <div className={style.normal + ' row'}>
        <div className="col-sm-2">
        </div>
        <div className="col-sm-8">
          <div className="box-row">
            {name}
          </div>
          <div className="box-row">
            <img src={imageUrl}/>
          </div>
          <div className="box-row">
            Price: ${price}
          </div>
        </div> 
        <div className="col-sm-2">
        </div>
      </div>
    )          
  }
} 
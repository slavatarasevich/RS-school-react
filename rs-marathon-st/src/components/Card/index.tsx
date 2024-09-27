/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';

export interface Props {
  img: string;
  title: string;
  price: number;
}

class Card extends React.Component<Props> {
  render() {
    return (
      <div className="card-container">
        <img src={this.props.img} alt="" />
        <h3>{this.props.title}</h3>
        <p>
          Price per tour:
          <span>{` ${this.props.price}$`}</span>
        </p>
      </div>
    );
  }
}

export default Card;

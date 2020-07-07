import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

function renderDish(dish) {
  if(dish != null) {
    return(
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  } else {
    return(
      <div></div>
    )
  }
}
function renderComments(comments) {
  if(comments != null) {
    const comList = comments.map((com) => {
      return(
        <li className="list-unstyled">
          <p> {com.comment} </p>
          <p> -- {com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))} </p>
        </li>
      )
    })

    return(
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comList}
        </ul>
      </div>
    )
  } else {
    return(
      <div></div>
    )
  }
}
function DishDetail (props) {
  let comments = null
  if(props.dish != null) 
    comments = props.dish.comments

  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {renderDish(props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          {renderComments(comments)}
        </div>
      </div>
    </div>
  )
}
export default DishDetail
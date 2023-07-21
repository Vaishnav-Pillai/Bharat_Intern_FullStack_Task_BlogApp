import React from "react"
import Card from "../../components/blog/Card"
import { Category } from "../../components/category/Category"

export default function Home(props){

  return (
    <>
      <Category />
      <Card uname={props.uname}/>
    </>
  )
}

import React, { useState } from "react";
import Todo from './Todo'

export default function ({todos}) {
  return (
  todos.map(todo =>{
    return <Todo todo={todo}/>
  }));
}

import React from 'react'
import { Input } from 'antd'

export default function ListForm (props) {
  return (
    <>
      <label htmlFor='name'>Nom</label>
      <Input
        id='name'
        value={props.name}
        onChange={props.handleNameChange}
        placeholder='Le nom de la liste'
      />
      <label htmlFor='color'>Couleur</label>
      <Input
        id='color'
        value={props.color}
        onChange={props.handleColorChange}
        type='color'
      />
    </>
  )
}

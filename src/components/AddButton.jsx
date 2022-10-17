import React from 'react'
import { Button, Modal } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import ListForm from './ListForm'

export default class AddButton extends React.Component {
  constructor () {
    super()
    this.state = {
      showListFormModal: false,
      name: '',
      color: '#1E90FF'
    }
  }

  handleSubmit = () => {
    console.log('submitted', this.state.name, this.state.color)
  }

  render () {
    return (
      <>
        <Button
          type='primary'
          onClick={() => this.setState({ showListFormModal: true })}
          icon={<PlusOutlined />}
        >
          {this.props.children}
        </Button>
        <Modal
          title={this.props.title}
          open={this.state.showListFormModal}
          //onOk={() => this.setState({ showListFormModal: false })}
          onCancel={() => this.setState({ showListFormModal: false })}
          footer={
            <Button type='primary' onClick={this.handleSubmit}>
              Créer
            </Button>
          }
        >
          <ListForm
            name={this.state.name}
            color={this.state.color}
            handleNameChange={e => this.setState({ name: e.target.value })}
            handleColorChange={e => this.setState({ color: e.target.value })}
          />
        </Modal>
      </>
    )
  }
}

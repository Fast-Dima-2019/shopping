import React from 'react'
import {
  Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemActions'

class ItemModal extends React.Component{
  state = { modal: false, name: '' }

  toggle = () => {
    this.setState(( { modal: !this.state.modal } ))
  }

  onChange = (ev) => {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  onSubmit = ev => {
    ev.preventDefault()
    const newItem = { name: this.state.name }
    this.props.addItem(newItem)
    //Закрываем модалку
    this.toggle()
  }

  render() {
    return <div>
      <Button color='dark' style={{ marginBottom: '2rem' }}
              onClick={this.toggle}
      >Add Item</Button>

      <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Добавляем в список покупок</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for='item'>Item</Label>
              <Input type='text' name='name' id='item' placeholder='Add item'
                     onChange={this.onChange}
              />
              <Button color='dark' style={{ marginBottom: '2rem' }} block
              >Дабавить</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>

  }
}

const mapStateToProps = state => ( { item: state.item } )

export default connect(mapStateToProps, { addItem })(ItemModal)

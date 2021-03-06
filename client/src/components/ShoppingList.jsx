import React from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
// import { v4 as uuid } from 'uuid'
import { connect } from 'react-redux'
import { getItems, deleteItem } from '../actions/itemActions'
import PropTypes from 'prop-types'

class ShoppingList extends React.Component {

  componentDidMount() {
    this.props.getItems()
  }

  onDeleteClick = id => {
    this.props.deleteItem(id)
  }

  render() {
    const { items } = this.props.item


    return (
        <Container>
          <ListGroup>

            <TransitionGroup>
              {items.map(({ id, name, date }) => (
                  <CSSTransition key={id} timeout={50} classNames='fade'>
                    <ListGroupItem>
                      <Button className='remove-btn' color='danger' size='sm'
                              onClick={this.onDeleteClick.bind(this, id)}
                      >&times;</Button>
                      {date.substr(0,10)+' -> ' + name}
                    </ListGroupItem>
                  </CSSTransition>
              ))}
            </TransitionGroup>

          </ListGroup>
        </Container>
    )
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ( {
  item: state.item
} )

export default connect(mapStateToProps, { getItems, deleteItem })(ShoppingList)


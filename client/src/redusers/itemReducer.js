import { v4 as uuid } from 'uuid'
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types';

const initialState = {
  items: [
    { id: uuid(), name: 'Яйца' },
    { id: uuid(), name: 'Молоко' },
    { id: uuid(), name: 'Стейк' },
    { id: uuid(), name: 'Вода' },
    { id: uuid(), name: 'Огурцы' },
    { id: uuid(), name: 'Помидоры' },
  ]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ITEMS:
      return { ...state }

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }

    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }

    default:
      return state
  }
}


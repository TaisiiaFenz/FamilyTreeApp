import {AddNode, ENTITY_ACTION} from './entity.action';

const initialState = {
  activeNode: {
    id: 0,
    name: 'Me',
    parents: [],
    partners: [],
    children: []
  },
  lastIndex: 0
};

// tslint:disable-next-line:typedef
export function entityReducer(state = initialState, action) {
  switch (action.type) {
    case ENTITY_ACTION.CHANGE_ACTIVE_NODE:
      return {
        ...state,
        activeNode: action.payload
      }
    case ENTITY_ACTION.ADD_NODE:
      return {
        ...state,
      }
     case ENTITY_ACTION.ADD_PARENTS:
      return {
        ...state,
        activeNode: {
          ...state.activeNode,
          parents: [action.payload1, action.payload2]
        }
      }
    case ENTITY_ACTION.CHANGE_LAST_INDEX:
      return {
        ...state,
        lastIndex: action.payload
      }
    default:
      return state;
  }
}

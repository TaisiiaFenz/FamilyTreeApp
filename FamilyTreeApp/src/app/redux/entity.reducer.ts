import {Action} from "@ngrx/store";
import {AddNode, ENTITY_ACTION} from "./entity.action";

const initialState = {
  activeNode: {
    name: "Me"
  },
  familyTree: [{
    name: "Me"
  }]
}

export function entityReducer(state = initialState, action: AddNode) {
  switch (action.type) {
    case ENTITY_ACTION.ADD_NODE:
      return {
        ...state,
        familyTree: [...state.familyTree, action.payload]
      }
    default:
      return state;
  }
}

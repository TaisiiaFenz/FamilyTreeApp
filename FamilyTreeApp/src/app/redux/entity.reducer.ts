import {Action} from "@ngrx/store";
import {AddNode} from "./entity.action";

const initialState = {
  familyTree: [{
    name: "Me"
  }]
}

export function entityReducer(state = {}, action: AddNode) {
  switch (action.type) {
    case ENTITY_ACTION.ADD_NODE:
      return {
        ...state,
        cars: [...state.familyTree, action.payload]
      }
    default:
      return state;
  }
}

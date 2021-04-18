import {Action} from "@ngrx/store";

export namespace ENTITY_ACTION {
  export const ADD_NODE = 'ADD_NODE';
}

export class AddNode implements Action {
  readonly type = ENTITY_ACTION.ADD_NODE;

  constructor(public payload) {}
}

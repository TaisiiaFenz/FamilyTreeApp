import {Action} from '@ngrx/store';
import {Node} from "../node/node.model";

export namespace ENTITY_ACTION {
  export const ADD_NODE = 'ADD_NODE';
  export const CHANGE_LAST_INDEX = 'CHANGE_LAST_INDEX';
  export const CHANGE_ACTIVE_NODE = 'CHANGE_ACTIVE_NODE';
  export const ADD_PARENTS = 'ADD_PARENTS';
  export const ADD_MOTHER = 'ADD_MOTHER';
  export const ADD_FATHER = 'ADD_FOTHER';
}

export class AddNode implements Action {
  readonly type = ENTITY_ACTION.ADD_NODE;

  constructor(public payload) {}
}

export class ChangeActiveNode implements Action {
  readonly type = ENTITY_ACTION.CHANGE_ACTIVE_NODE;

  constructor(public payload: Node) {}
}

export class ChangeLastIndex implements Action {
  readonly type = ENTITY_ACTION.CHANGE_LAST_INDEX;

  constructor(public payload: number) {}
}

export class AddParents implements Action {
  readonly type = ENTITY_ACTION.ADD_PARENTS;

  constructor(public payload1: Node, public payload2: Node) {}
}

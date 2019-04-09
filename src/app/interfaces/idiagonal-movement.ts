import { Position } from '../models/position';

export interface IDiagonalMovement {

    getDiagonalMovements(position : Position, limitMovement : number) : Position[];
}

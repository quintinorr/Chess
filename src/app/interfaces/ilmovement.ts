import { Position } from '../models/position';

export interface ILMovement {

    getLMovements(position : Position) : Position[];
}

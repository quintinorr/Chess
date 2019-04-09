import { Position } from '../models/position';

export interface IHorizontalMovement {
    getHorizontalMovement(position : Position, limitMovement : number) : Position[];
}

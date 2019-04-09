import { Position } from '../models/position';

export interface IVerticalMovement {
    getVeticalMovement(position : Position, limitMovement : number) : Position[];
}


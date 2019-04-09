import { Position } from '../models/position';

export interface IPiece {
    id : number;
    position : Position;
    color : Color;
    imageUrl : string;
    deleted : boolean;
    limitMovement: number

    getMovements() : Position[];
    move(newPosition : Position);
    delete();
}

enum Color {
    white = 1,
    black = 2
}
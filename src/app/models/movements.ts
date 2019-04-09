import { IDiagonalMovement } from '../interfaces/idiagonal-movement';
import { IVerticalMovement } from '../interfaces/ivertical-movement';
import { ILMovement } from '../interfaces/ilmovement';
import { IHorizontalMovement } from '../interfaces/ihorizontal-movement';
import { Position } from '../models/position';


export class Movements implements IDiagonalMovement, IVerticalMovement, ILMovement, IHorizontalMovement {
    
    private minPosition : Position = {
        column :1,
        row :1
    }
    
    private maxPosition : Position = {
        column :8,
        row :8
    } 

    isSamePosition(position1: Position, position2 : Position) : boolean
    {
        return position1.column == position2.column && position1.row == position2.row;
    }

    getVeticalMovement(position: Position, limitMovement: number): Position[] {
        
        let movements : Position[];
        let counter =  position.row - limitMovement;
        let limitCounter = position.row + limitMovement;
        
        let newPosition : Position = {
            row : 0,
            column : position.column
        };

        for(counter; counter <= limitCounter; counter++ )
        {
            if(counter >= this.minPosition.row && counter <= this.maxPosition.row)
            {
                position.row = counter;

                if(!this.isSamePosition(position, newPosition))
                {
                    movements.push(newPosition);
                }

            }
        }

        return movements;

    }

    getLMovements(position: Position): Position[] {
        
        let movements : Position[];

        
        let newPositionHorizontal : Position = {
            row : 0,
            column : 0
        };

        let newPositionVertical : Position = {
            row : 0,
            column : 0
        };

        for(let counter = - 2; counter <= 2; counter+=4)
        {
            for(let adding = -1; adding <= 1; adding+=2 )
            {
                newPositionHorizontal = {
                    row : position.row + counter,
                    column : position.column  + adding
                }

                if((newPositionHorizontal.row >= this.minPosition.row && newPositionHorizontal.row <= this.maxPosition.row) && (newPositionHorizontal.column >= this.minPosition.column && newPositionHorizontal.column <= this.maxPosition.column))
                {
                    if(!this.isSamePosition(position, newPositionHorizontal))
                    {
                        movements.push(newPositionHorizontal);
                    }
                }

                newPositionVertical = {
                    row : position.row + adding,
                    column : position.column  + counter
                }

                if((newPositionVertical.row >= this.minPosition.row && newPositionVertical.row <= this.maxPosition.row) && (newPositionVertical.column >= this.minPosition.column && newPositionVertical.column <= this.maxPosition.column))
                {
                    if(!this.isSamePosition(position, newPositionVertical))
                    {
                        movements.push(newPositionVertical);
                    }
                }
            }
        }

        return movements;

    }

    getHorizontalMovement(position: Position, limitMovement: number): Position[] {

        let movements : Position[];
        let counter =  position.column - limitMovement;
        let limitCounter = position.column + limitMovement;
        
        let newPosition : Position = {
            row : position.row,
            column : 0
        };

        for(counter; counter <= limitCounter; counter++ )
        {
            if(counter >= this.minPosition.column && counter <= this.maxPosition.column)
            {
                newPosition.column = counter;

                if(!this.isSamePosition(position, newPosition))
                {
                    movements.push(newPosition);
                }
            }
        }

        return movements;
    }

    getDiagonalMovements(position: Position, limitMovement: number): Position[] {
        let movements : Position[];
        let limitCounter = position.row + limitMovement;

        let newPosition : Position = {
            row : position.row,
            column : 0
        };


        let counter = position.row - limitMovement;
        let columnRigth = position.column - limitMovement;
        let columnLeft = position.column + limitMovement;

        for(counter; counter <= limitCounter; counter++)
        {

            if(counter >= this.minPosition.row && counter <= this.maxPosition.row)
            {

                if(columnRigth >= this.minPosition.column && columnRigth <= this.maxPosition.column)
                {
                    newPosition = {
                        row : counter,
                        column : columnRigth
                    };
    
                    if(!this.isSamePosition(position, newPosition))
                    {
                        movements.push(newPosition);
                    }
                }

                if(columnLeft >= this.minPosition.column && columnLeft <= this.maxPosition.column)
                {
                    newPosition = {
                        row : counter,
                        column : columnLeft
                    };
    
                    if(!this.isSamePosition(position, newPosition))
                    {
                        movements.push(newPosition);
                    }
                }


            }

            columnRigth++;
            columnLeft--;
        }

        return  movements;
    }
    


}

import React, { ReactNode, useState } from 'react'

export enum CardVariant
{
    outlined = 'outlined',
    primary = 'prymary'
}

interface CardProps {
    width?: string;
    height?: string;
    variant: CardVariant;
    children: ReactNode;
}

const Card: React.FC<CardProps> = ({width, height, children, variant}) => {
    return ( 
        <div style={{width, height, border: variant === CardVariant.outlined ? '1px solid gray' : 'none',
        background: variant === CardVariant.primary ? 'lightgray' : ''}}>
            {children}
        </div>
    );
}
 
export default Card;
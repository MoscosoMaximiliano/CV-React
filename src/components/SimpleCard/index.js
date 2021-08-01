import React from 'react';

import { Card, CardPhoto, Content, Title, ButtonContainer, Link, Description } from './SimpleCard.styled'

const SimpleCard = ({ photo, title, description, link }) => {
    return (
        <>
            <Card>
                <CardPhoto>
                    <img src={photo} alt={`${title}`} />
                </CardPhoto>
                <Content>
                    <Title>{title}</Title>
                    <Description>{description}</Description>
                </Content>
                <ButtonContainer>
                    <Link href={link}>Visit Page</Link>
                </ButtonContainer>
            </Card>
        </>
    );
}

export default SimpleCard;
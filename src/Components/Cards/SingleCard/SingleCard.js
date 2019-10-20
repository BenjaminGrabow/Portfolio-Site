import React from "react";
import styled from "styled-components";

const StyledSingleCard = styled.div`
`;

const SingleCard = (props) => {
    const { img, title, main_text, tech_stack, features } = props;
    return (
        <StyledSingleCard>
            <div className="img">
                <img src={img} alt={title} />
            </div>
            <div className="text">
                <h1>{title}</h1>
                <p>{main_text}</p>
                <p>{tech_stack}</p>
                <p>{features}</p>
            </div>
        </StyledSingleCard>
    );
}

export default SingleCard;
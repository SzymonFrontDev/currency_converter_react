import styled from "styled-components";

export const Header = styled.header`
    color: teal;
    text-align: center;
`;

export const Span = styled.span`
    width: 100%;
    max-width: 200px;
    display: inline-block;
    margin-right: 5px;
`;

export const Input = styled.input`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 350px;
    border-radius: 5px;
`;

export const Select = styled.select`
    border: 1px solid #ccc;
    padding: 10px;
    width: 100%;
    max-width: 372px;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 100%;
    border: none;
    background-color: teal;
    color: white;
    padding: 10px;
    border-radius: 5px;
    transition: 0.3s;

    &:hover {
        background-color: hsl(180, 100%, 30%);
    }

    &:active {
        background-color: hsl(180, 100%, 35%);
    }
`;

export const Paragraph = styled.p`
    font-size: 14px;
    text-align: center;
    color: #555;
`;
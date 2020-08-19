import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
`;

export const Title = styled.span`
  font-size: 60px;
  text-transform: uppercase;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const ContainerForm = styled.div`
  margin-top: 60px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 350px;
`;

export const Label = styled.span`
  font-size: 18px;
`;

export const Input = styled.textarea`
  height: 80px;
  width: 350px;
  border: 1px solid #3e3e3e;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  resize: none;
  font-family: Poppins, sans-serif;
`;

export const Button = styled.button`
  height: 50px;
  width: 350px;
  border-radius: 4px;
  border: 1px solid #4834d4;
  background-color: #686de0;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Poppins, sans-serif;
  cursor: pointer;
  transition: all .5s ease-in-out;

  &:hover {
    background-color: #4834d4;
  }
`;

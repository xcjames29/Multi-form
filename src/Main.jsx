import { useState } from "react";
import styled from "styled-components"


const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #1661a3;
    justify-content: center;
    align-items: center;
`;

const FormContainer = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px 30px;
    background-color: white;
    border-radius: 20px;
`;


const CountForm = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const Num = styled.div`
    border-radius: 50%;
    background-color: ${props => props.current ? "#5067ce" : "grey"};
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 15px;
    font-size: large;
    font-weight: bold;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`

const NumContainer = styled.div`
    display: flex;
    gap: 20px;

    align-items: center;
`;

const Text = styled.h3`
    opacity: ${props => props.selected ? "1" : "0.6"};
`;

const DisplayContainer = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DisplayWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    font-size: 18px;
`;

const ButtonContainer = styled.div`
    display: flex;

    gap: 20px;
`;

export default function Main() {
    let [selectedCount, setSelectedCount] = useState(1);
    return (
        <Container>
            <FormContainer>
                <CountForm>
                    <NumContainer>
                        <Num current={true} onClick={() => setSelectedCount(1)}>1</Num>
                        <Text selected={true}>Choose Title</Text>
                    </NumContainer>
                    <NumContainer>
                        <Num current={selectedCount >= 2} onClick={() => setSelectedCount(2)}>2</Num>
                        <Text selected={selectedCount >= 2}>Choose Description</Text>
                    </NumContainer>
                    <NumContainer>
                        <Num current={selectedCount >= 3}>3</Num>
                        <Text selected={selectedCount >= 3}>Confirm Data</Text>
                    </NumContainer>
                </CountForm>
                <DisplayContainer>
                    {selectedCount === 1 &&
                        <DisplayWrapper>
                            <Text selected={true}>Choose the title</Text>
                            <Button onClick={() => setSelectedCount(2)}>Submit Title</Button>
                        </DisplayWrapper>
                    }
                    {selectedCount === 2 &&
                        <DisplayWrapper>
                            <Text selected={true}>Are you happy?</Text>
                            <ButtonContainer>
                                <Button onClick={() => setSelectedCount(1)}>Go back</Button>
                                <Button onClick={() => setSelectedCount(3)}>Submit Description</Button>
                            </ButtonContainer>
                        </DisplayWrapper>
                    }
                    {selectedCount === 3 &&
                        <DisplayWrapper>
                            <Text selected={true} >Choose the title</Text>
                            <ButtonContainer>
                                <Button onClick={() => setSelectedCount(2)}>Go back</Button>
                                <Button onClick={() => setSelectedCount(4)}>Confirm Data</Button>
                            </ButtonContainer>
                        </DisplayWrapper>
                    }
                    {selectedCount === 4 &&
                        <DisplayWrapper>
                            <Text selected={true}>Okay we are done! Thank for submitting the details!</Text>
                        </DisplayWrapper>
                    }
                </DisplayContainer>
            </FormContainer>
        </Container>
    )
}
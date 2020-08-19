import React, { useState } from "react";
import {
  Container,
  Title,
  Bold,
  ContainerForm,
  Form,
  Label,
  Input,
  Button,
} from "./styles";

import { useParams } from "react-router-dom";

export default function Home({}) {
  const { tk } = useParams();

  const [token, setToken] = useState(tk ? tk : "");

  return (
    <Container>
      <div>
        <Title>
          <Bold>Call</Bold>Keep
        </Title>
      </div>

      <ContainerForm>
        <Form>
          <Label>Seu token firebase: </Label>
          <Input
            placeholder="Insira o seu token"
            rows="5"
            cols="40"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Button>Realizar chamada</Button>
        </Form>
      </ContainerForm>
    </Container>
  );
}

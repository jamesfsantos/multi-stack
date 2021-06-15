import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";

const TextFieldMask = (props) => {
  const buscarCep = (cep: string) => {
    let cepSemFormato: any = cep.replace(/\D/gm, "");
    let url = `https://viacep.com.br/ws/${cepSemFormato}/json/`;
    fetch(url).then((response) =>
      response.json().then((endereco) => {
        //alert(`Seu endereco é: ${endereco.logradouro}`);
        console.log(endereco);
      })
    );
  };

  return (
    <InputMask
      mask={"99.999-999"}
      onBlur={(event) => buscarCep(event.target.value)}
    >
      {() => {
        return <TextField />;
      }}
    </InputMask>
  );
};

export default TextFieldMask;

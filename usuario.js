const prompt = require("prompt-sync")();

const usuarios = [];

let ultimoId = 1;

const emailValido = (email) => {
  let valido = true;

  usuarios.forEach((usuario) => {
    if (email == usuario.email) {
      console.log("Email duplicado!");
      valido = false;
    }
  });

  return valido && email != "" && email.includes("@");
};

const modelo = () => {
  const nome = prompt("Digite o seu nome: ");
  const email = prompt("Digite o seu email: ");
  const telefones = [];

  while (true) {
    const telefone = prompt(
      "Digite o número que deseja adicionar, ou digite 'sair' para encerrar: "
    );
    if (telefone == "sair") {
      break;
    }
    telefones.push(telefone);
  }

  if (nome != "" && telefones.length > 0 && emailValido(email)) {
    const usuario = {
      nome,
      email,
      telefones,
      id: ultimoId,
    };

    ultimoId++;

    return usuario;
  }
};

const criar = () => {
  const usuario = modelo();

  if (usuario != undefined) {
    usuarios.push(usuario);
  }
};

const listar = () => {
  usuarios.forEach(usuario => {
    console.log(`
    ID: ${usuario.id}
    Nome: ${usuario.nome}
    Email: ${usuario.email}
    `);

    console.log("Telefones: ");
    usuarios.telefones.forEach((telefone,indice) => {
        console.log(`Telefone ${indice+1}: ${telefone})}

   })
   
};
    

const atualizar = () => {
    


};

const remover = () => {};

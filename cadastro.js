const prompt = require("prompt-sync")();

const cadastros = [];

let ultimoId = 1;

const usuario = {
  id: ultimoId++,
  nome: "",
  email: "",
  telefone: [],
};

const modelo = () => {
  while (true) {
    const nome = prompt("Digite o seu nome: ");
    if (nome == "" || nome.lenght <= 3) {
      usuario.push(nome);
      break;
    } else {
      console.log("Nome inválido");
      return;
    }

    const email = prompt("Digite o seu email: ");

    const telefone = prompt("Digite o número que deseja adicionar: ");

    if (nome) {
      cadastros.push(usuario.nome, usuario.email, usuario.telefone);
    }
  }
};

const criar = () => {
    modelo()
}

// const adcionarId = (usuario) => {
//   usuario.id = ultimoId; // Definindo o id
//   ultimoId++; // Incrementando o id

//   cadastros.push(usuario);
// };

console.log(modelo());
console.log(adcionarId(usuario));

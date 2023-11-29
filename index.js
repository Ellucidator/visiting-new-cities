const nome = prompt("Informe seu nome: ");
var viagem = prompt("Você ja visitou alguma cidade?SIM/NÃO");
var numero_de_cidades = 0;
var todas_cidades = "";

while (viagem === "SIM") {
  let cidade = prompt("Qual o nome da cidade?");
  var todas_cidades = todas_cidades + "-" + cidade + "\n";
  numero_de_cidades++;
  viagem = prompt("Visitou alguma outra cidade?SIM/NÃO");
}
alert(
  "Nome: " +
    nome +
    "\nQuantidade de cidades: " +
    numero_de_cidades +
    "\nCidades visitadas:\n " +
    todas_cidades
);

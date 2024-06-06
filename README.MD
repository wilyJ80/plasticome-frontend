# 🍄 PLASTICOME 🍄
### Essa é uma ferramenta para identificar genes que possuem a capacidade de degradar plásticos no genoma de um fungo. Ela é composta por uma pelo [plasticome-backend](https://github.com/G2BC/plasticome-backend) que se caracteriza por uma API que faz as análises recebidas por esse front-end, e uma api que lida com as informações a serem registradas/consultadas no banco de dados [plasticome-metadata](https://github.com/G2BC/plasticome-metadata)

## 💙 Notas da desenvolvedora:
Eu sei, eu sei esse projeto é bem simples, front não é meu forte, e eu acho que esse arquivo script.js não tá prestando pra nada, acho que estou só usando o do html direto mesmo.


## 😎 Quero mexer nesse projeto preciso de que?
1. Rode o plasticome-backend, ou tenha a url dele online em mãos
2. Altere a url `http://localhost/analyze` no arquivo na parte do script no arquivo [`index.html`](./index.html) ou [`script.js`](./scripts.js), pela sua:
    > ex: `https://plasticome-backend/analyze`
3. Como ele está bem simples, é só abrir o html no navegador

## 🔍Coisas para adicionar
 - [ ] Criar campo que mostre a disponibilidade do servidor
 - [ ] Criar campo que mostre quantos serviços já foram executados
 - [ ] Criar tela de gráficos para análises realizadas
 - [ ] Começar a aceitar arquivos fasta
# Sistema de Clínica de Consultas

## Descrição
Este projeto é um sistema simples para gerenciar consultas em uma clínica. Os usuários podem cadastrar pacientes, agendar consultas, cancelar consultas e visualizar informações relevantes.

## Funcionalidades
- **Cadastrar um Paciente:** Adiciona um novo paciente à lista com nome e telefone exclusivos.
- **Marcações de Consultas:** Permite agendar consultas selecionando um paciente, dia, hora e especialidade.
- **Cancelamento de Consultas:** Permite cancelar consultas existentes.
- **Sair:** Encerra a execução do programa.

## Tratamento de Erros
- **Cadastro Duplicado:** Impede o cadastro de um paciente com o mesmo número de telefone.
- **Horários Ocupados:** Não permite agendar consultas em horários já ocupados.
- **Datas Retroativas:** Consultas não podem ser agendadas para datas anteriores à atual.

## Funcionalidade Extra
O sistema armazena as informações dos pacientes, funcionando como um "banco de dados" para que os dados persistam mesmo após o usuário sair do sistema.

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Executar
1. Clone o repositório: `git clone https://github.com/seu-usuario/sistema-clinica-consultas.git`
2. Abra o arquivo `index.html` em seu navegador.

## Contribuições
Contribuições são bem-vindas! Abra uma issue ou faça um pull request.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

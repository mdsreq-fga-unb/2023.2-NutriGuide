# Especificação de Caso de Uso:

## Introdução

As Especificações de Caso de Uso de um diagrama de casos de uso descrevem as diferentes maneiras pelas quais um usuário pode interagir com um sistema. De acordo com o diagrama desenvolvido pelo grupo, foram realizadas as especificações de 3 casos de uso a seguir:

## Título do Caso de uso - Acessar Inspirações de Viagens

* Descrição: O cliente acessa uma área do aplicativo que contém artigos, fotografias e vídeos sobre diversos destinos para inspirar suas viagens futuras.
Ator Principal - Cliente
* Pré-Condições: O cliente deve estar autenticado no aplicativo.
* Fluxo Principal:
    - O cliente seleciona a opção para acessar inspirações de viagens.
    - O sistema exibe uma variedade de artigos, fotografias e vídeos sobre diversos destinos.
    - O sistema utiliza algoritmos para sugerir destinos com base nas preferências e histórico de viagem do cliente.
    - O cliente pode selecionar um destino sugerido para obter mais informações.
* Pós-condições: O cliente tem acesso a informações detalhadas sobre o destino selecionado, incluindo os melhores períodos para visitar, atrações culturais, culinária local e dicas de viagem.

* Fluxos Alternativos 
    - [FA01] Se o cliente não estiver satisfeito com as sugestões, ele pode pesquisar outros destinos no tópico 4.

* Fluxos de Exceção 
    - [FE01] Se o aplicativo não conseguir carregar as inspirações de viagens, ele deve informar o cliente e tentar novamente.

## Título do Caso de uso - Reserva de Atividades

* Descrição: O cliente acessa uma área do aplicativo que contém artigos, fotografias e vídeos sobre diversos destinos para inspirar suas viagens futuras.
Ator Principal - Cliente
* Pré-Condições:
      -O Cliente deve estar logado no aplicativo.
      -Deve haver atividades disponíveis para reserva.
* Fluxo Principal:
     -O usuário logado navega até a seção de atividades disponíveis.
     -O aplicativo exibe uma lista de atividades disponíveis.
     -O Cliente seleciona uma atividade da lista.
     -O aplicativo exibe os detalhes da atividade, incluindo a disponibilidade.
     -O Cliente seleciona a opção para reservar a atividade.
     -O aplicativo confirma a disponibilidade da atividade.
     -O aplicativo realiza a reserva para o usuário.
     -O aplicativo exibe uma confirmação de sucesso para o usuário.
* Pós-condições:A atividade é reservada para o Cliente e ele recebe uma confirmação da reserva.

* Fluxos Alternativos 
    - [FA01] Se a atividade selecionada não estiver disponível.
       -O aplicativo informa ao Cliente que a atividade não está disponível.
       -O fluxo retorna ao passo 2 do Fluxo Principal.
* Fluxos de Exceção 
    - [FE01] Se o aplicativo não conseguir carregar as atividades disponíveis para reserva, ele deve informar o cliente e tentar novamente.

## Título do Caso de uso - Gerenciar acomodações

* Descrição: O cliente acessa uma área do aplicativo que contém artigos, fotografias e vídeos sobre diversos destinos para inspirar suas viagens futuras.
Ator Principal - Cliente
* Pré-Condições: O cliente deve estar autenticado no aplicativo.
* Fluxo Principal:
    - O cliente seleciona a opção para acessar inspirações de viagens.
    - O sistema exibe uma variedade de artigos, fotografias e vídeos sobre diversos destinos.
    - O sistema utiliza algoritmos para sugerir destinos com base nas preferências e histórico de viagem do cliente.
    - O cliente pode selecionar um destino sugerido para obter mais informações.
* Pós-condições: O cliente tem acesso a informações detalhadas sobre o destino selecionado, incluindo os melhores períodos para visitar, atrações culturais, culinária local e dicas de viagem.

* Fluxos Alternativos 
    - [FA01] Se o cliente não estiver satisfeito com as sugestões, ele pode pesquisar outros destinos no tópico 4.

* Fluxos de Exceção 
    - [FE01] Se o aplicativo não conseguir carregar as inspirações de viagens, ele deve informar o cliente e tentar novamente.

## Título do Caso de uso - Reserva de Atividades

* Descrição: O cliente acessa uma seção do aplicativo dedicada ao gerenciamento de acomodações para suas futuras viagens. - Cliente
* Pré-Condições:
      -O Cliente deve estar logado no aplicativo.
      -Deve haver acomodações disponíveis para reserva.
* Fluxo Principal:
     -O usuário logado navega até a seção de acomodações disponíveis.
     -O aplicativo exibe uma lista de acomodações disponíveis.
     -O Cliente seleciona uma acomodação da lista.
     -O aplicativo exibe os detalhes da acomodação, incluindo disponibilidade, comodidades e preço.
     -O Cliente seleciona a opção para reservar a acomodação.
     -O aplicativo confirma a disponibilidade da acomodação.
     -O aplicativo realiza a reserva para o usuário.
     -O aplicativo exibe uma confirmação de sucesso para o usuário.
* Pós-condições:A acomodação é reservada para o Cliente, e ele recebe uma confirmação da reserva.

* Fluxos Alternativos 
    - [FA01] Se a acomodação selecionada não estiver disponível.
       -O aplicativo informa ao Cliente que a acomodação não está disponível.
       -O fluxo retorna ao passo 2 do Fluxo Principal.
* Fluxos de Exceção 
    - [FE01] Se o aplicativo não conseguir carregar as acomodações disponíveis para reserva, ele deve informar o cliente e tentar novamente.

## Histórico de versão

| Versão |    Data    |      Descrição       |  Autor  | Revisor |
| :----: | :--------: | :------------------: | :-----: | :-----: |
|  0.1   | 07/12/2023 | Criação do documento | [Luana](https://github.com/luanatorress) | [Guilherme](https://github.com/GG555-13)  |
|  0.2   | 07/12/2023 | Adicionando  o caso de uso de reserva de atividades | [Guilherme](https://github.com/GG555-13) | [Luana](https://github.com/luanatorress)  |

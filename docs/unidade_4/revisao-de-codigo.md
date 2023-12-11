# Revisão de código por membros da equipe

Este documento foi criado com o propósito de revisar os códigos produzidos pelos outros membros da equipe de forma a validar a US desenvolvida para assim, juntamente aos outros critérios de [DoD](../unidade_3/DoR_DoD.md), considera-lá como concluída e pronta para ser entregue.


## Checklist do DoD

A tabela 1 apresenta as US presentes no nosso MVP e a revisão observada pelos membros da equipe que não estavam envolvidos no desenvolvimento da US em questão.

<center>

_tabela 1_ Revisões de Código das US's

| US   | Descrição | Aprovada? Sim ou Não | Correções | Comentários   | Revisor  |
|------|------|------------|-----------|-------|-------|
| US13 | Como nutricionista, devo ser capaz de acessar a página de cadastro para poder cadastrar novos pacientes. | Sim | Funcionalidade ok | ok | Guilherme |
| US14 | Como nutricionista, devo ser capaz de ver quais são os pacientes cadastrados para facilitar o gerenciamento e acompanhamento de suas informações nutricionais, otimizando assim o planejamento e a prestação de cuidados personalizados. | Sim, foi corrigido | Ao clicar na opção de ver os detalhes de um paciente e depois clicar no ícone fechar o site cai, mas se clicar fora ele fecha normalmente. | Apoś correções ok | Guilherme  |
| US15 | Como nutricionista, devo ser capaz de registrar novos pacientes no sistema por meio de um formulário, fornecendo informações precisas sobre eles, como nome, data de nascimento, condições médicas e informações de contato para agilizar e melhorar o processo de registro de novos pacientes. | Sim, foi corrigido | A parte de registro está funcionando mas se não colocar nada nos espaços e clicar ele apenas age da mesma forma que se colocasse valores válidos funciona e apenas aparece um aviso vazio, mas ele não adiciona o registro vazio como esperado. | após correções ok | Guilherme |
| US19 | Como nutricionista, quero atualizar as informações do paciente quando houver alterações em seu histórico médico ou outras informações relevantes, como detalhes sobre o progresso do paciente, como peso, medidas corporais, hábitos alimentares, níveis de atividade, entre outros para que ter um acompahamento eficaz. |  |  |  | Luana |
| US22 | Como nutricionista, quero visualizar as informações de evolução de cada paciente em um painel personalizado, permitindo-me acessar facilmente os registros e acompanhar o progresso relevantes, como detalhes sobre o progresso do paciente, como peso, medidas corporais, hábitos alimentares, níveis de atividade, entre outros para facilitar uma avaliação abrangente e eficaz do estado nutricional e ajustar estratégias conforme necessário. | Sim | Está funcional | Ok | Eric |
| US26 | Como nutricionista, devo ser capaz de criar diferentes refeições no plano com horários e nomes diferentes para personalizar o plano alimentar de cada paciente, proporcionando uma abordagem mais específica e adaptada às suas necessidades individuais. | Sim | Funcionalidade Ok | Ok | Eric |
| US33 | Como nutricionista, quero baixar um plano alimentar para facilitar o compartilhamento do plano com o paciente, promovendo uma experiência mais acessível e conveniente. | Sim | Funcionalidade ok | Ok | Eric |
| US34 | Como nutricionista, quero fazer o upload de um plano alimentar para disponibilizar de forma fácil e rápida para o paciente. | Sim | está funcionando | OK | Eric |
| US35 | Como usuário default (não possuo cadastro no sistema), quero ser capaz de acessar a página de pesquisar nutricionista para encontrar profissionais de saúde qualificados e marcar uma consulta. | Sim  | A parte de pesquisa de nutricionista funciona conforme o esperado, mostrando o nutricionista pelo o nome e avisando o usuário caso não encontre nada. | ok | Guilherme |
| US37 | Eu como usuário default (não possuo cadastro no sistema), quero ser capaz de visualizar contato do nutricionista para encontrar profissionais de saúde qualificados, visualizar suas informações e entrar em contato, promovendo uma experiência acessível e rápida. | Sim  | Funcional | Ok  | Eric |
| US39 |  Eu como usuário default (não possuo cadastro no sistema), quero ser capaz de ver o perfil do nutricionista para obter informações sobre sua experiência, especialidades, avaliações de outros usuários e assim tomar uma decisão ao  escolher um profissional de saúde para consultas nutricionais. | Sim | Funcionalidade funciona como o esperado. | ok | Luana |
| US40 | Eu como nutricionista, quero se capaz de fazer posts na aba comunidade para compartilhar informações, dicas nutricionais e interagir com os pacientes, promovendo um ambiente educacional. | Sim | Funcionalidade conforme os criteŕios de aceitação e funciona conforme o esperado. | Muito bom! | Luana |
| US43 | Eu como usuário default (não possuo cadastro no sistema), quero ser capaz de visualizar posts de todos os nutricionistas para acessar dicas e conteúdos nutricionais compartilhados pela comunidade de profissionais de saúde, promovendo uma experiência educacional e informativa. | Sim | Sem correções necessárias. | Funciona conforme o esperado. Pode visualizar posts de qualquer nutricionista cadastrado. | Luana |
| US45 | Eu como usuário paciente quero ser capaz de visualizar posts do meu nutricionista na aba comunidade para obter uma experiência personalizada e facilitar o acompanhamento das recomendações nutricionais. | Sim | Funciona conforme o esperado | ok | Luana |
| US49 | Eu como usuário paciente quero ser notificado quando receber um aviso para ficar ciente de informações importantes, como atualizações em meu plano alimentar, mensagens do nutricionista ou outras notificações relevantes. | Sim  | Funcionalidade funciona como o esperado  | ok | Luana |

Fonte: [Luana Torres](https://github.com/luanatorress), 2023.

</center>

## Histórico de versão

| Versão |    Data    |      Descrição       |  Autor  | Revisor |
| :----: | :--------: | :------------------: | :-----: | :-----: |
|  0.1   | 11/12/2023 | Criação do Página no Pages | [Luana Torres](https://github.com/luanatorress)|  [Eric Camargo](https://github.com/Ericcs10) |
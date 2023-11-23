# Atividade PBB e BDD - HealthNet

## BDD

Após o nosso grupo terminar as US e os seus críterios de aceitação conforme instruído pelo o professor fizemos o nosso BDD com base nas US e críterios de aceitação do grupo BERSERK, abaixo pode se ver as US, seus críterios de aceitação e seus cenários separados por persona

### Maria (Recepcionista)

 <center>
  US
 </center>

 Como recepcionista posso cadastrar novos pacientes para melhorar a precisão do atendimento 

<center>
 Críterios de Aceitação
</center>

- A recepcionista não pode cadastrar alguem que tem conta   
- A  recepcionista pode cadastrar alguém sem conta  

Cenário: paciente não possui conta
DADO que o paciente não possui conta, QUANDO eu for cadastrar o paciente, ENTÃO o sistema deve liberar o cadastro do novo paciente.



 <center>
  US
 </center>

como recepcionista posso inserir dados para adicionar os dados ao perfil

<center>
 Críterios de Aceitação
</center>

- Recepcionista adicionar o historico medico do paciente
- Pode adicionar medicamentos que o usuario possui alergia  

<center>
Cenário: histórico médico do paciente foi alterado
</center>

DADO que o paciente possui conta no sistema e seu histórico médico foi alterado, QUANDO eu for alterar seu histórico médico, ENTÃO o sistema deve deixar alterar.

 <center>
  US
 </center>

como recepcionista posso coletar as informações das outras unidades para agilizar o atendimento

<center>
 Críterios de Aceitação
</center>

- A recepcionista pode transferir os dados de outra unidade do paciente
- A recepcionista pode unificar os dados do paciente de outras unidades de heath tech  

<center>
 Cenário: paciente se consulta em mais de uma unidade 
</center>

DADO que o paciente possui conta e tem dados em outra unidade, QUANDO eu coletar as informações de outra unidade, ENTÃO o sistema deve transferir os dados do paciente selecionado.

 <center>
  US
 </center>

como recepcionista posso acessar as informações cadastradas para confirmar se estão corretas

<center>
 Críterios de Aceitação
</center>

- as recepcionista pode visualizar quais informações foram inseridas
- pode visualizar as informações que estão faltando  

<center>
 Cenário: Visualizar informações de um paciente
</center>

DADO que o paciente possui cadastro e informações cadastradas, QUANDO eu acessar sua conta, ENTÃO o sistema deve mostrar na tela as informações do paciente


 <center>
  US
 </center>

Como recepcionista, posso inserir dados para atualizar dados ao perfil.

<center>
 Críterios de Aceitação
</center>

- Só pode realizar a atualização se o paciente já estiver cadastro.
- A recepcionista deve poder visualizar as informações alteradas.  

<center>
Cenário: Atualizar dados do perfil.
</center>

DADO que a recepcionista acesse o perfil do paciente, E que ela selecione a opção de atualizar dados, QUANDO inserir as informações atualizadas no perfil do paciente, ENTÃO o sistema deve salvar as alterações feitas no perfil, E o sistema deve exibir uma confirmação de que os dados foram atualizados com sucesso.
Como recepcionista, posso acessar as informações cadastradas para realizar atualizações nos dados.

<center>
Cenário: Acessar e Atualizar Dados do Paciente.
</center>
 
DADO que a recepcionista esteja autenticada no sistema, E que ela tenha acesso ao cadastro de pacientes, QUANDO selecionar o perfil de um paciente específico, E optar pela opção de atualizar dados, ENTÃO o sistema deve exibir as informações cadastradas do paciente, E permitir que a recepcionista faça as atualizações necessárias no perfil do paciente, E ao salvar as alterações, o sistema deve exibir uma confirmação de que os dados foram atualizados com sucesso.

 <center>
  US
 </center>

Como recepcionista, posso atualizar informações de outras unidades para poder manter o sistema integrado.

<center>
 Críterios de Aceitação
</center>

- A recepcionista deve ter acesso das informações de outras unidades
- A recepcionista deve ser capaz de alterar dados de outras unidades  


<center>
Cenário: Atualizar Informações de Outras Unidades. 
</center>
DADO que a recepcionista esteja autenticada no sistema, E que ela tenha permissões para acessar dados de outras unidades, E que ela selecione a opção de atualizar informações de uma unidade específica, QUANDO realizar as alterações necessárias nos dados da unidade, ENTÃO o sistema deve salvar as atualizações feitas na unidade, E exibir uma confirmação de que os dados foram atualizados com sucesso

 <center>
  US
 </center>
Como recepcionista, posso sobrepor as informações para realizar a atualização do sistema.

<center>
 Críterios de Aceitação
</center>

- a recepcionista pode colocar novas informações no sistema
- a recepcionista pode apagar as informações antigas  

<center>
Cenário: Sobrepor Informações para Atualização do Sistema.
</center>
 
DADO que a recepcionista esteja autenticada no sistema, E que ela tenha permissões para sobrepor informações, E que ela selecione a opção de atualizar dados de um paciente específico, QUANDO sobrepor ou editar as informações necessárias no sistema, ENTÃO o sistema deve aceitar as alterações e sobrepor as informações existentes, E exibir uma confirmação de que os dados foram atualizados com sucesso.

### DR João (Médico)

 <center>
  US
 </center> 
 Como Médico eu quero visualizar a predição de possíveis doenças para potencializar o diagnóstico

<center>
 Críterios de Aceitação
</center>

- O médico pode ver uma lista com as possíveis doenças de cada pacientes.
- O médico pode visualizar sintomas das possíveis doenças.
- O médico visualizar as possíveis doenças por ordem de gravidade.  
<center>
Cenário: Médico visualiza lista de possíveis doenças de um paciente
</center>

Dado que o Médico está logado no sistema E que há um paciente com predições de doenças Quando o Médico acessa a página de predições de doenças do paciente Então o Médico deve ver a lista de possíveis doenças do paciente

<center>
Cenário: Médico visualiza sintomas das possíveis doenças
</center>

Dado que o Médico está logado no sistema E que há um paciente com predições de doenças Quando o Médico acessa a página de predições de doenças do paciente Então o Médico deve ver a lista de possíveis doenças do paciente E deve ver os sintomas de cada possível doença

<center>
Cenário: Médico visualiza possíveis doenças por ordem de gravidade
</center>

Dado que o Médico está logado no sistema E que há um paciente com predições de doenças Quando o Médico acessa a página de predições de doenças do paciente Então o Médico deve ver a lista de possíveis doenças do paciente E deve ver as possíveis doenças ordenadas por gravidade
 
 <center>
  US
 </center> 
Como Médico eu quero utilizar um filtro de tratamento Para facilitar na busca de informações do paciente

<center>
 Críterios de Aceitação
</center>

- O médico pode utilizar do filtro de tratamento para buscar informações sobre o paciente
- O médico encontrar informações do paciente de forma organizada  

<center>
Cenário: O médico pode utilizar do filtro de tratamento para buscar informações sobre o paciente
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico seleciona o filtro de tratamento E o médico insere o nome do tratamento E o médico clica no botão de busca Então o sistema exibe uma lista de pacientes que receberam o tratamento

<center>
Cenário: O médico encontrar informações do paciente de forma organizada
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico seleciona o filtro de tratamento E o médico insere o nome do tratamento E o médico clica no botão de busca E o sistema exibe uma lista de pacientes que receberam o tratamento Então o sistema exibe as informações do paciente de forma organizada

 <center>
  US
 </center> 

Como Médico eu quero visualizar todas as informações do paciente em uma tela Para facilitar na busca de informações do paciente

<center>
 Críterios de Aceitação
</center>

- o medico pode  visualizar as informações de todos os paciente em uma tela scroll
- o medico pode visualizar informações de apenas um paciente  

<center>
Cenário: O médico pode visualizar as informações de todos os pacientes em uma tela scroll
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico clica no botão "Visualizar todos os pacientes" Então o sistema exibe todas as informações dos pacientes em uma tela scroll


<center>
Cenário: O médico pode visualizar informações de apenas um paciente
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico insere o nome do paciente na barra de pesquisa E o médico clica no botão de busca Então o sistema exibe as informações do paciente em uma tela



 <center>
  US
 </center> 
Como Médico eu quero utilizar um filtro de pacientes Para facilitar na busca do paciente

<center>
 Críterios de Aceitação
</center>

- o medico pode selecionar o paciente em que ele quer visualizar as informações
- o medico pode selecionar o cpf do paciente em que ele quer visualizar as informações
- o medico pode selecionar o nome do paciente em que ele quer visualizar as informações  

<center>
Cenário: O médico pode selecionar o paciente em que ele quer visualizar as informações
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico seleciona o filtro de pacientes E o médico seleciona o paciente Então o sistema exibe as informações do paciente

<center>
Cenário: O médico pode selecionar o cpf do paciente em que ele quer visualizar as informações
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes
Quando o médico seleciona o filtro de pacientes E o médico insere o cpf do paciente E o médico clica no botão de busca Então o sistema exibe as informações do paciente


<center>
Cenário: O médico pode selecionar o nome do paciente em que ele quer visualizar as informações
</center>

Dado que o médico está logado no sistema E o médico está na página de busca de pacientes Quando o médico seleciona o filtro de pacientes E o médico insere o nome do paciente E o médico clica no botão de busca Então o sistema exibe as informações do paciente


 <center>
  US
 </center> 
Como Médico eu quero receber um alerta de risco Para prevenir possíveis contratempos

<center>
 Críterios de Aceitação
</center>

- O médico deve receber os alertas a cada paciente que atende.
- O médico deve poder selecionar gatilhos para receber os alertas.  

<center>
Cenário: O médico deve receber os alertas a cada paciente que atende
</center>

Dado que o médico está logado no sistema E o médico está na página de informações do paciente Quando o médico seleciona a opção "Receber alertas de risco" Então o sistema envia um alerta de risco para o médico a cada paciente que ele atende

<center>
Cenário: O médico deve poder selecionar gatilhos para receber os alertas
</center>

Dado que o médico está logado no sistema E o médico está na página de configurações de alerta de risco Quando o médico seleciona os gatilhos para receber alertas Então o sistema envia alertas de risco para o médico com base nos gatilhos selecionados





 <center>
  US
 </center> 
como médico posso utilizar um filtro de data para saber quando foram realizados os processos

<center>
 Críterios de Aceitação
</center>

- o medico pode selecionar o ano em que ele quer visualizar as informações
- o medico pode selecionar o mês em que ele quer visualizar as informações
- o medico pode selecionar o dia em que ele quer visualizar as informações  

<center>
Cenário: Selecionar data válida 
</center>

DADO que o médico selecione o data válida, QUANDO filtrar por data, ENTÃO o sistema deve retornar os processos realizados na data escolhida, seja no ano, mês ou dia.

 <center>
  US
 </center> 
Como médico, posso utilizar um filtro de unidade para saber onde os pacientes se consultaram.

<center>
 Críterios de Aceitação
</center>

- o medico pode selecionar a unidade do heal tech em que ele quer visualizar as informações
- O médico deve ser capaz de obter informações detalhadas sobre unidades que os pacientes já se consultaram  

<center>
Cenário: Filtrar Pacientes por Unidade de Consulta 
</center>

DADO que o médico esteja autenticado no sistema, E que ele tenha permissões para acessar informações de unidades de consulta, E que existam pacientes registrados no sistema, QUANDO o médico selecionar a opção de filtrar por unidade de consulta, E escolher uma unidade específica, ENTÃO o sistema deve exibir a lista de pacientes que se consultaram na unidade escolhida, E apresentar informações relevantes sobre esses pacientes, E permitir ao médico visualizar detalhes adicionais sobre cada paciente, se necessário.



### Lívia (Farmacêutica)

 <center>
  US
 </center>
Como Farmacêutica eu quero acessar as informações detalhadas dos medicamentos para Tornar o processo de liberação de remédios mais seguro

<center>
 Críterios de Aceitação
</center>

- A farmacêutica deve conseguir ver os detalhes dos medicamentos.
- A farmacêutica deve poder ver possíveis interações perigosas do medicamento.  

<center>
Cenário: Acessar informações detalhadas dos medicamentos
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Detalhes"
Então a Farmacêutica vê as informações detalhadas do medicamento

<center>
Cenário: Ver possíveis interações perigosas do medicamento
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Interações Perigosas"
Então a Farmacêutica vê as possíveis interações perigosas do medicamento

 <center>
  US
 </center>
Como Farmacêutica eu quero acessar o registro de medicamentos dispensados para ter um  controle de segurança de armazenamento


<center>
 Críterios de Aceitação
</center>

- A farmacêutica deve conseguir ver o histórico de medicamentos que foram dispensados
- A farmaceutica deve conseguir ver quem pediu o médicamento que saiu  

<center>
Cenário: Ver histórico de medicamentos dispensados
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Histórico"
Então a Farmacêutica vê o histórico de medicamentos dispensados

<center>
Cenário: Ver quem pediu o medicamento que saiu
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Detalhes"
Então a Farmacêutica vê quem pediu o medicamento que saiu

 <center>
  US
 </center>

Como Farmacêutica eu quero acessar o relatório de riscos para deixar mais seguro o  processo de interações medicamentosas

<center>
 Críterios de Aceitação
</center>

- A farmacêutica deve conseguir ver o relatório de riscos de pacientes
- deve ter acesso a uma lista de substancias que o paciente é alergico  

<center>
Cenário: Ver relatório de riscos de pacientes
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Relatório de Riscos"
Então a Farmacêutica vê o relatório de riscos de pacientes

<center>
Cenário: Ver lista de substâncias alérgicas do paciente
</center>

Dado que a Farmacêutica está logada no sistema
Quando a Farmacêutica clica no botão "Substâncias Alérgicas"
Então a Farmacêutica vê a lista de substâncias alérgicas do paciente

 <center>
  US
 </center>
Como Farmacêutica eu quero acessar o estoque de medicamentos para ter um controle de segurança de armazenamento


<center>
 Críterios de Aceitação
</center>

- A farmacêutica pode ver o estoque de medicamentos
- deve saber a quantidade de cada medicamento   
 
<center>
Cenário: Farmacêutica visualiza o estoque de medicamentos
</center>

    Dado que a Farmacêutica está logada no sistema
    Quando ela acessa a página de estoque de medicamentos
  Então ela deve ver a lista de medicamentos disponíveis e ver a quantidade de cada medicamento

<center>
Cenário: Farmacêutica verifica a quantidade de um medicamento específico
</center>

Dado que a Farmacêutica está logada no sistema
E que ela está na página de estoque de medicamentos
Quando ela procurar por um medicamento específico e deve ver a quantidade deste medicamento

 <center>
  US
 </center>
Como Farmacêutica eu quero acessar o estoque de medicamentos para ter um controle de segurança de armazenamento

<center>
 Críterios de Aceitação
</center>

- A farmacêutica pode ver o estoque de medicamentos
- Deve saber a quantidade de cada medicamento  

<center>
Cenário: Farmacêutica visualiza o estoque de medicamentos
</center>
Dado que a Farmacêutica está logada no sistema
Quando ela acessa a página de estoque de medicamentos
Então ela deve ver a lista de medicamentos disponíveis e ver a quantidade de cada medicamento

<center>
Cenário: Farmacêutica verifica a quantidade de um medicamento específico
</center>

Dado que a Farmacêutica está logada no sistema
E que ela está na página de estoque de medicamentos
Quando ela procurar por um medicamento específico e deve ver a quantidade deste medicamento


### Rafael (Coordenador de Agendamento)


 <center>
  US
 </center>
Como Coordenador de Agendamento eu quero coletar informações Para ajustar agendas

<center>
 Críterios de Aceitação
</center>

- Quando o médico tiver horários conflitantes o coordenador consegue cancelar o agendamento
- Quando o paciente tiver horário conflitante o coordenador consegue cancelar o agendamento  

<center>
Cenário: O coordenador consegue cancelar o agendamento quando o médico tiver horários conflitantes
</center>

Dado que o coordenador está logado no sistema
E o coordenador está na página de agendamento
Quando o coordenador seleciona o agendamento com horários conflitantes
E o coordenador clica no botão "Cancelar agendamento"
Então o sistema cancela o agendamento

<center>
Cenário: O coordenador consegue cancelar o agendamento quando o paciente tiver horário conflitante
</center>

Dado que o coordenador está logado no sistema
E o coordenador está na página de agendamento
Quando o coordenador seleciona o agendamento com horários conflitantes
E o coordenador clica no botão "Cancelar agendamento"
Então o sistema cancela o agendamento

 <center>
  US
 </center>

Como Coordenador de Agendamento eu quero sincronizar o calendário entre todas as unidades para manter o sistema atualizado e integrado

<center>
 Críterios de Aceitação
</center>

- Consegue visualizar a disponibilidade dos médicos das outras unidades 
- Consegue informar a disponibilidade de médicos da sua unidade  


<center>
Cenário: Visualizar disponibilidade dos médicos das outras unidades
</center>

Dado que o Coordenador de Agendamento está logado
E que a opção de visualizar a disponibilidade dos médicos das outras unidades foi selecionada
Quando o botão "Visualizar" é clicado
Então a disponibilidade dos médicos das outras unidades é exibida

<center>
Cenário: Informar disponibilidade de médicos da sua unidade
</center>

Dado que o Coordenador de Agendamento está logado
E que a opção de informar a disponibilidade de médicos da sua unidade foi selecionada
Quando o formulário com a disponibilidade dos médicos da sua unidade é preenchido
E o botão "Enviar" é clicado
Então a disponibilidade dos médicos da sua unidade é atualizada no sistema

 <center>
  US
 </center>
 Como Coordenador de Agendamento eu quero consultar as agendas dos médicos para saber os dias disponíveis

<center>
 Críterios de Aceitação
</center>

- o coordenador pode acessar o calendario do medico 
- o coordenador é notificado sobre os dias disponiveis do medico  


<center>
Cenário: Acessar calendário do médico
</center>

Dado que estou logado como Coordenador de Agendamento
E que eu selecionei a opção de acessar o calendário do médico
Quando eu clico no botão "Acessar"
Então eu vejo o calendário do médico

<center>
Cenário: Receber notificação sobre dias disponíveis do médico
</center>

Dado que estou logado como Coordenador de Agendamento
E que eu selecionei a opção de receber notificação sobre os dias disponíveis do médico
Quando o médico atualiza sua disponibilidade
Então eu recebo uma notificação sobre os dias disponíveis do médico



 <center>
  US
 </center>
Como Coordenador de Agendamento eu quero cancelar consultas
Para avisar o médico que a consulta foi desmarcada

<center>
 Críterios de Aceitação
</center>

- so pode ser cancelada uma consulta que foi marcada anteriormente
- o médico responsável pela consulta será notificado  

<center>
Cenário: Visualizar disponibilidade dos médicos das outras unidades
</center>

Dado que o Coordenador de Agendamento está logado
E que a opção de visualizar a disponibilidade dos médicos das outras unidades foi selecionada
Quando o botão "Visualizar" é clicado
Então a disponibilidade dos médicos das outras unidades é exibida

<center>
Cenário: Receber notificação sobre dias disponíveis do médico
</center>
Cenário: Receber notificação sobre dias disponíveis do médico
Dado que o Coordenador de Agendamento está logado
E que a opção de receber notificação sobre os dias disponíveis do médico foi selecionada
Quando o médico atualiza sua disponibilidade
Então o Coordenador de Agendamento recebe uma notificação sobre os dias disponíveis do médico

 <center>
  US
 </center>
Como Coordenador de Agendamento eu quero confirmar consultas para avisar o médico que a consulta foi confirmada

<center>
 Críterios de Aceitação
</center>

- coordenador de agendamentos pode clicar em consulta confirmada para indicar que a consulta está confirmada
- o médico responsável pela consulta será notificado  

<center>
Cenário: Coordenador de Agendamento confirma consulta
</center>

    Dado que o Coordenador de Agendamento está logado no sistema e que há uma consulta agendada
    Quando o Coordenador de Agendamento clicar em "Consulta Confirmada"
    Então a consulta é marcada como confirmada e o médico responsável pela consulta é notificado

<center>
Cenário: Médico verifica consultas confirmadas
</center>
  
    Dado que o Médico está logado no sistema e que há consultas confirmadas
    Quando o Médico acessa a lista de consultas confirmadas
    Então o Médico deve ver a lista de consultas confirmadas e deve ver a data e hora de cada consulta confirmada

 <center>
  US
 </center>
Como Coordenador de Agendamento, eu quero notificar pacientes sobre as consultas para manter os pacientes cientes e atualizados.

<center>
 Críterios de Aceitação
</center>

- coordenador de agendamentos pode notificar os pacientes que a consulta foi confirmada
- coordenador de agendamentos pode notificar os pacientes que a consulta foi cancelada
- coordenador de agendamentos pode notificar os pacientes que a consulta está chegando  


<center>
Cenário: Notificação de Confirmação
</center>

Dado que a consulta foi confirmada E o Coordenador de Agendamento deseja notificar o paciente Quando o Coordenador de Agendamento envia uma notificação de confirmação Então o paciente deve receber uma notificação de confirmação

<center>
Cenário: Notificação de Cancelamento
</center>
Dado que a consulta foi cancelada E o Coordenador de Agendamento deseja notificar o paciente Quando o Coordenador de Agendamento envia uma notificação de cancelamento Então o paciente deve receber uma notificação de cancelamento

<center>
Cenário: Notificação de Chegada
</center>
Cenário: Notificação de Chegada
Dado que a consulta está chegando E o Coordenador de Agendamento deseja notificar o paciente Quando o Coordenador de Agendamento envia uma notificação de chegada Então o paciente deve receber uma notificação de chegada




## Histórico de versão

| Versão |    Data    |      Descrição       |  Autor  | Revisor |
| :----: | :--------: | :------------------: | :-----: | :-----: |
|  0.1   | 13/11/2023 | Criação do BDD | Guilherme, Eric, Henrique, Luana |  Guilherme,Luana |
|  0.2   | 22/11/2023 | Arrumando para colocar no GitPages | Guilherme | Luana |


---

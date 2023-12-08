export default interface ProgressoPaciente {
    id_progesso: number;
    id_paciente: number;
    data: Date | string,
    peso: number,
    habitos_alimentares: string,
    medidas_corporais: string,
    queixa: string,
    nivel_atividade_fisica: string,
    suplementacao_atual: string,
}
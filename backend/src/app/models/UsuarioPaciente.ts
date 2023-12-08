import { RowDataPacket } from "mysql2";

export default interface UsuarioPaciente extends RowDataPacket {
    id_usuario: number;
    cpf: number;
    nome_usuario: string;
    email: string;
    sexo: string;       // ENUM: ou 'M' ou 'F'
    telefone: string;
    cep: string;
    data_nascimento: Date;
    role: string;
    id_paciente: number;
    peso: number;
    altura: number;
    queixa: string;
    comorbidades: string;
    medicacoes: string;
    nome_foto?: string;
    dado_foto?: string
}
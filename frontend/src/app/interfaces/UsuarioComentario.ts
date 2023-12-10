export default interface UsuarioComentario {
    id_usuario: number;
    cpf: number;
    nome_usuario: string;
    email: string;
    sexo: string;       // ENUM: ou 'M' ou 'F'
    telefone: string;
    cep: string;
    data_nascimento: Date | string;
    tipo_usuario: string;
    id_comentario: number;
    data_criacao: Date | string;
    conteudo: string;
    id_post: number
}
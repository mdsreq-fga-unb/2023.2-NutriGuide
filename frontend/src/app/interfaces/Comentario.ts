export default interface Comentario {
    id_comentario: number,
    data_criacao: Date | string,
    conteudo: string,
    id_post: number,
    id_usuario: number
}
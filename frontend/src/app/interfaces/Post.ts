export default interface Post {
    id_post: number,
    conteudo_post: string,
    data_criacao: Date | string,
    id_nutricionista: number,
    link_iframe: string
}
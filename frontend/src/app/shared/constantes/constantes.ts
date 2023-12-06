export class Constantes {

    public static nutriguideApi = 'https://api-nutriguide.vercel.app';   // rota de produção
    // public static nutriguideApi = 'http://localhost:3000';                  // rota local

    constructor() {}

    // metodo que verifica se o usuário está logado ou não
    public static isLogado(): boolean {
        const token = localStorage.getItem('token');

        if (token === null) {
            return false;     // não está logado
        } else {
            return true;      // está logado
        }
    }

    // método que verificar se o usuário é um paciente ou um nutricionista
    public static isNutricionista(usuario: any): string {
        if (usuario.role === 'nutricionista') return 'nutricionista';
        
        return 'paciente';
    }

}
import Repository from "../database/Repository";
import Alimento from "../models/Alimento";
import PlanoAlimentar from "../models/PlanoAlimentar";
import ProgressoPaciente from "../models/ProgressoPaciente";
import Usuario from "../models/Usuario";
import UsuarioPaciente from "../models/UsuarioPaciente";

export default class Service {

    repository!: Repository;

    constructor() {
        this.repository = new Repository();
    }

    public async findUserByName(nome: string): Promise<Usuario | undefined> {
        return await this.repository.findUserByName(nome);
    }

    public async findById(id: string): Promise<Usuario | undefined> {
        return await this.repository.findById(id);
    }

    public async insertPaciente(paciente: UsuarioPaciente) {
        await this.repository.insertUserPaciente(paciente);
        const retorno: Usuario | undefined = await this.repository.trazUltimoIdInserido();

        await this.repository.insertPaciente(paciente, retorno!.id_usuario);
    }

    public async getAllPacientesByNutriName(responsavel: string) {
        return await this.repository.getAllPacientesByNutriName(responsavel);
    }

    public async getOnePaciente(idPaciente: string) {
        return await this.repository.getOnePaciente(idPaciente);
    }

    public async getAllNutricionistas() {
        return await this.repository.getAllNutricionistas();
    }

    public async getOneNutricionista(idNutricionista: string) {
        return await this.repository.getOneNutricionista(idNutricionista);
    }

    public async getOneNutricionistaByNomeUser(nome: string) {
        return await this.repository.getOneNutricionistaByNomeUser(nome);
    }

    public async getAllNutricionistasFiltered(nome: string, especialidade: string, regiao: string) {
        return await this.repository.getAllNutricionistasFiltered(nome, especialidade, regiao);
    }

    public async getOnePacienteByNomeUser(nome: string) {
        return await this.repository.getOnePacienteByNomeUser(nome);
    }

    public async getProgressoByIdPaciente(idPaciente: string) {
        return await this.repository.getProgressoByIdPaciente(idPaciente);
    }

    public async insertProgressoPaciente(progresso: ProgressoPaciente) {
        return await this.repository.insertProgressoPaciente(progresso);
    }

    public async getAllRefeicoes() {
        return await this.repository.getAllRefeicoes();
    }

    public async insertAlimento(alimento: Alimento) {
        await this.repository.insertAlimento(alimento);
    }

    public async insertPlanoAlimentar(plano: PlanoAlimentar) {
        await this.repository.insertPlanoAlimentar(plano);
    }

    public async getAlimentasByIdPaciente(idPaciente: string) {
        return await this.repository.getAlimentasByIdPaciente(idPaciente);
    }

}
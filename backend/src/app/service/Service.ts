import Repository from "../database/Repository";
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

    public async getAllPacientes() {
        return await this.repository.getAllPacientes();
    }

    public async getOnePaciente(idPaciente: string) {
        return await this.repository.getOnePaciente(idPaciente);
    }

}
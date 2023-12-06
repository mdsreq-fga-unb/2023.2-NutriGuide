import { RowDataPacket } from "mysql2";

export default interface User extends RowDataPacket {
    id: number;
    nome: string;
    email: string;
    role: string;
}
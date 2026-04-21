export default class Answer {
    constructor(private nome: string, private respostas: Array<string>) {

    }

    get vetorRespostas(): Array<string> {
        return this.respostas;
    }
}
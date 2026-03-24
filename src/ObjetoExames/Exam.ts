import Weight from './Weigth.js'
import Answer from './Answer.js'

export default class Exam {
    constructor(private answer: Answer, private weight: Weight, private exams: Array<Answer> = []) {}

    public add(exam: Answer): void {
        this.exams.push(exam)
    }

    private calcularNota(prova: Answer): number {
        let nota = 0;
        const respostasCertas = this.answer.vetorRespostas;
        const respostasAluno = prova.vetorRespostas;
        const peso = this.weight.vetorPesos

        for (let i = 0; i < respostasCertas.length; i++) {
            if (respostasAluno[i] === respostasCertas[i]) {
                nota += peso[i]!;
            }
        }

        return nota
    }

    public avg(): number {
        if (this.exams.length === 0) {
            return 0
        }

        const somaNotas = this.exams.reduce((acc, aluno) => acc + this.calcularNota(aluno), 0);
        return somaNotas / this.exams.length
    }

    public min(count: number): Array<number> {
        const notas = this.exams.map(prova => this.calcularNota(prova));

        notas.sort((a, b) => a - b);

        return notas.slice(0, count)
    }

    public max(count: number): Array<number> {
        const notas = this.exams.map(prova => this.calcularNota(prova));

        notas.sort((a, b) => b - a);

        return notas.slice(0, count)
    }

    public lt(limit: number): Array<number> {
        const notas = this.exams.map(prova => this.calcularNota(prova))
        return notas.filter(nota => nota < limit)
    }

    public gt(limit: number): Array<number> {
        const notas = this.exams.map(prova => this.calcularNota(prova))
        return notas.filter(nota => nota > limit)
    }
}
import Answer from "./Answer.js";
import Exam from "./Exam.js";
import Weight from "./Weigth.js";

const gabarito = new Answer("Professor Francisco", ["a", "b", "a", "c", "d"])

const pesos = new Weight()

const pweb1 = new Exam(gabarito, pesos)

const aluno1 = new Answer("Fulano", ["a", "b", "b", "b", "b"])
const aluno2 = new Answer("Sicrano", ["a", "b", "a", "a", "b"])
const aluno3 = new Answer("Beltrano", ["a", "b", "a", "c", "d"])
const aluno4 = new Answer("Estenio", ["b", "b", "a", "c", "d"])

pweb1.add(aluno1)
pweb1.add(aluno2)
pweb1.add(aluno3)
pweb1.add(aluno4)

console.log("Média da Turma:", pweb1.avg());
console.log("As 2 maiores notas:", pweb1.max(2));
console.log("As 2 menores notas:", pweb1.min(2));
console.log("Notas maiores que 5 (GT 5):", pweb1.gt(5));
console.log("Notas menores que 5 (LT 5):", pweb1.lt(5));
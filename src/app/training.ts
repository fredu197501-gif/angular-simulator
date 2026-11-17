// 3.Создал функцию, которая принимает 2 числа и возвращает сумму.Типизировал параметры и значение.

export function add(a: number, b: number): number {
  return a + b;
}

const result: number = add(7, 18);
console.log(result);

// 4.Создал переменную uploadStatus, которая может быть только: "loading", "success", "error".
type UploadStatus = "loading" | "success" | "error";
const uploadStatus: UploadStatus = "loading";

console.log(uploadStatus);

// 5.Создал переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'.
type TextFormat = 'uppercase' | 'lowercase' | 'capitalize';
const textFormat: TextFormat = 'uppercase';

console.log(textFormat);

//6.Создал интерфейс, который описывает User. С одним опциональным полем.
interface User {
  id: string;
  email: string;
  name: string;
  age?: number;
}

// 7.Создал интерфейс, который расширяет интерфейс User и имеет свои дополнительные поля.
interface IDeveloper extends User {
  role: string;
  permissions: string[];
}

const developer: IDeveloper = {
  id: '1',
  email: 'fred@example.com',
  name: 'Fred',
  role: 'developer',
  permissions: ['read', 'write']
};

console.log("интерфейс Developer:", developer);

// 8.Создал функцию, которая принимает строку и возвращает форматированную строку.
function formatText(text: string, format: TextFormat): string {
  switch (format) {
    case 'uppercase':
      return text.toUpperCase();
    case 'lowercase':
      return text.toLowerCase();
    case 'capitalize':
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    default:
      return text;
  }
}

console.log(formatText("hello world", "capitalize"));
console.log(formatText("hello world", "uppercase"));
console.log(formatText("HELLO WORLD", "lowercase"));

//9.Создал функцию, которая принимает строку и символ, возвращает строку без переданного символа.
function removeCharacter(text: string, char: string): string {
  return text.replace(new RegExp(char, 'g'), '');
}

console.log(removeCharacter("Hello World", "o"));

//10.Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров
const users: User[] = [
  { id: '1', email: 'nurbek@example.com', name: 'Nurbek' },
  { id: '2', email: 'zakir@example.com', name: 'Zakir', age: 30 },
  { id: '3', email: 'vadim@example.com', name: 'Vadim', age: 25 }
];

const filteredUsers: User[] = users.filter((user: User): boolean => user.age !== undefined && user.age > 25);

console.log("Отфильтрованные пользователи:", filteredUsers);
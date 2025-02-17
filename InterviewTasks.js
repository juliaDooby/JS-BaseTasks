/*
---------------------------------------------------------------------------------------------
📌 [Livecode Таски]:
---------------------
1. Напишите функцию, которая принимает массив целых чисел и возвращает сумму всех чисел, кратных 3 –
function sumMultipleOfThree(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}
---
Ваш код написан корректно, но его можно улучшить, сделав его лаконичнее и современнее с использованием метода массива `reduce`:
```javascript
function sumMultipleOfThree(arr) {
    return arr.reduce((sum, num) => num % 3 === 0 ? sum + num : sum, 0);
}
```
Как это работает:
1. Метод `reduce` проходит по каждому элементу массива.
2. Накапливает сумму (`sum`), добавляя только те числа (`num`), которые делятся на 3 без остатка (`num % 3 === 0`).
3. Начальное значение аккумулятора (`sum`) — это `0`.
Пример использования:
```javascript
const numbers = [1, 3, 4, 6, 9, 11, 12];
console.log(sumMultipleOfThree(numbers)); // Вывод: 30
```
Этот вариант короче, проще читается и соответствует современному JavaScript-коду.
-----
2. Напишите функцию, которая принимает строку и возвращает обратную ей –
function reverseString(str) {
    return str.split('').reverse().join('');
}
// ---
Ваша функция для переворота строки уже написана правильно. Вот она:
```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
```
Давайте разберем, что она делает:
1. `str.split('')` — разбивает строку на массив символов.
2. `.reverse()` — переворачивает массив символов.
3. `.join('')` — соединяет массив обратно в строку.
Это эффективный и понятный способ перевернуть строку в JavaScript.
-----
3. Напишите функцию, которая принимает массив объектов и сортирует его по возрастанию значения свойства “age” –
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
Ваше решение для сортировки массива объектов по свойству `age` тоже правильное. Вот оно:
```javascript
function sortByAge(arr) {
    return arr.sort((a, b) => a.age - b.age);
}
```
Давайте разберем, что происходит в этой функции:
1. `arr.sort()` — сортирует массив на месте.
2. `(a, b) => a.age - b.age` — это функция сравнения, которая используется для определения порядка сортировки:
   - Если `a.age` меньше `b.age`, функция возвращает отрицательное число, что означает, что объект `a` будет стоять перед объектом `b`.
   - Если `a.age` больше `b.age`, возвращается положительное число, и объект `a` будет стоять после объекта `b`.
   - Если `a.age === b.age`, оба объекта останутся в исходном порядке.
Пример использования:
```javascript
const people = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 20 }
];

const sortedPeople = sortByAge(people);
console.log(sortedPeople);
```
Результат:
```javascript
[
  { name: 'Bob', age: 20 },
  { name: 'John', age: 25 },
  { name: 'Alice', age: 30 }
]
```
-----
4. Напишите функцию, которая принимает два массива и возвращает новый массив, состоящий из элементов, которые содержатся только в одном из переданных массивов –
function getUniqueElements(arr1, arr2) {
    const uniqueElements = [];
    arr1.forEach((el) => {
        if (!arr2.includes(el)) {
            uniqueElements.push(el);
        }

    });

    arr2.forEach((el) => {
        if (!arr1.includes(el)) {
            uniqueElements.push(el);
        }
    });
    return uniqueElements;
}
Ваш код для нахождения элементов, которые содержатся только в одном из двух массивов, написан правильно. Он проверяет каждый элемент одного массива на наличие в другом массиве и добавляет его в новый массив, если он не встречается во втором.
Вот ваш код с небольшими улучшениями для повышения эффективности (заменил использование `.includes()` на использование `Set`, чтобы ускорить проверку наличия элемента):
```javascript
function getUniqueElements(arr1, arr2) {
    const set1 = new Set(arr1);  // Создаем Set для быстрого поиска
    const set2 = new Set(arr2);

    const uniqueElements = [];

    arr1.forEach((el) => {
        if (!set2.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    arr2.forEach((el) => {
        if (!set1.has(el)) {  // Используем .has() для быстрого поиска
            uniqueElements.push(el);
        }
    });

    return uniqueElements;
}
```
Объяснение:
- `Set` — это структура данных, которая хранит уникальные значения и предоставляет эффективные методы для проверки наличия элемента (`has()`), что делает операцию проверки присутствия быстрее, чем использование `.includes()` в массиве.
- Мы сначала создаем два `Set` из массивов `arr1` и `arr2`, а затем используем `has` для проверки, существует ли элемент во втором наборе, что значительно ускоряет работу функции, особенно для больших массивов.
Пример использования:
```javascript
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];

const result = getUniqueElements(arr1, arr2);
console.log(result);  // [1, 2, 5, 6]
```
Результат: элементы `1`, `2`, `5`, и `6` присутствуют только в одном из массивов.
Альтернативное решение с использованием фильтрации и `concat`:
Для компактности можно использовать методы `.filter()` и `.concat()`:
```javascript
function getUniqueElements(arr1, arr2) {
    const uniqueInArr1 = arr1.filter(el => !arr2.includes(el));
    const uniqueInArr2 = arr2.filter(el => !arr1.includes(el));
    return uniqueInArr1.concat(uniqueInArr2);
}
```
Этот код работает точно так же, но выглядит короче и чище.
-----
5. Напишите функцию, которая принимает число и возвращает его факториал –
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
Ваш код для вычисления факториала числа написан корректно. Это классический подход с использованием цикла для умножения чисел от 1 до `num`. Вот он:
```javascript
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i; // Умножаем result на текущее число
    }
    return result;
}
```
Объяснение:
1. В случае, если `num` равно 0 или 1, сразу возвращаем 1, так как по определению факториал этих чисел равен 1.
2. В цикле от 2 до `num` умножаем все числа подряд, начиная с 2, на переменную `result`, чтобы получить результат факториала.
Пример использования:
```javascript
console.log(factorial(5));  // 120
console.log(factorial(0));  // 1
console.log(factorial(1));  // 1
```
Результат для `factorial(5)` будет 120, так как \( 5! = 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Альтернативное решение с рекурсией:
Вы можете также вычислить факториал с помощью рекурсивной функции:
```javascript
function factorial(num) {
    if (num === 0 || num === 1) {
        return 1; // Факториал 0 и 1 равен 1
    }
    return num * factorial(num - 1); // Рекурсивный вызов для вычисления факториала
}
```
Этот код делает то же самое, но с использованием рекурсии. Он более компактный, но с большими числами может привести к переполнению стека из-за слишком глубоких рекурсивных вызовов.
-----
6. Напишите функцию, которая принимает строку и возвращает количество гласных букв в этой строке –
function countVowels(str) {
    const vowelsPattern = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsPattern.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
Ваше решение для подсчета количества гласных в строке выглядит отлично. Оно правильно проходит по каждому символу строки и проверяет, является ли он гласной, с учетом того, что символы могут быть в разных регистрах.
Вот ваш код:
```javascript
function countVowels(str) {
    const vowelsPattern = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelsPattern.includes(str[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
```
Объяснение:
1. Массив `vowelsPattern` содержит все гласные буквы русского алфавита в нижнем регистре.
2. Мы проходим по каждому символу строки и проверяем, является ли этот символ гласной буквой (с помощью метода `.includes()`).
3. Метод `.toLowerCase()` используется для приведения символов к нижнему регистру, чтобы не зависеть от регистра входной строки.
4. Каждый раз, когда мы находим гласную, увеличиваем счетчик `count`.
Пример использования:
```javascript
console.log(countVowels("Привет, мир!"));  // 3
console.log(countVowels("А я люблю кодить!"));  // 7
console.log(countVowels("abcdefghijklmnopqrstuvwxyz"));  // 0
```
Результат для строки `"Привет, мир!"` будет 3, так как гласные — это "и", "е", "и".
Альтернативное решение с регулярными выражениями:
Можно немного улучшить этот код, используя регулярные выражения для поиска гласных. Это сделает код более компактным:
```javascript
function countVowels(str) {
    const matches = str.toLowerCase().match(/[аеёиоуыэюя]/g);  // Используем регулярное выражение для поиска гласных
    return matches ? matches.length : 0;  // Возвращаем количество найденных гласных
}
```
Объяснение:
- Регулярное выражение `[аеёиоуыэюя]` находит все гласные буквы в строке.
- `str.toLowerCase()` — преобразует строку в нижний регистр перед применением регулярного выражения.
- Метод `.match()` возвращает массив всех найденных гласных или `null`, если гласные не найдены.
- Мы проверяем, существует ли результат, и если да, возвращаем его длину. Если нет, возвращаем 0.
Этот способ более компактный и также хорошо работает. Однако первый вариант с массивом и `.includes()` будет более читаемым, особенно для новичков.
-----
7. Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором все числа увеличены на 1 –
function incrementNumbers(arr) {
    return arr.map((num) => num + 1);
}
Ваш код для увеличения всех чисел в массиве на 1 написан правильно и очень лаконично. Использование метода `.map()` идеально подходит для этой задачи, так как он позволяет преобразовать каждый элемент массива и вернуть новый массив с результатами.
Вот ваш код:
```javascript
function incrementNumbers(arr) {
    return arr.map((num) => num + 1);
}
```
Объяснение:
- Метод `.map()` проходит по каждому элементу массива `arr` и выполняет указанную операцию (в данном случае — добавление 1).
- Каждый результат этой операции возвращается в новый массив, который и будет возвращен функцией.
Пример использования:
```javascript
console.log(incrementNumbers([1, 2, 3]));  // [2, 3, 4]
console.log(incrementNumbers([0, -1, 10]));  // [1, 0, 11]
```
Результат для массива `[1, 2, 3]` будет `[2, 3, 4]`, так как каждое число увеличено на 1.
Альтернативное решение с циклом:
Можно также решить задачу с использованием обычного цикла `for`:
```javascript
function incrementNumbers(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] + 1);
    }
    return result;
}
```
Этот способ также работает, но требует больше кода. Метод `.map()` является более современным и предпочтительным для подобных задач, так как делает код более читаемым и функциональным.
-----
8. Напишите функцию, которая принимает две строки и возвращает true, если одна строка является анаграммой другой (имеют одинаковые символы, но в разном порядке) –
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
Ваш код для проверки, являются ли две строки анаграммами, написан правильно и эффективно. В нем используется метод сортировки строк, который упорядочивает символы, чтобы затем сравнить их. Если строки являются анаграммами, их отсортированные версии будут одинаковыми.
Вот ваш код:
```javascript
function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}
```
Объяснение:
1. `str1.split('')` — разделяет строку на массив символов.
2. `.sort()` — сортирует массив символов в алфавитном порядке.
3. `.join('')` — соединяет отсортированные символы обратно в строку.
4. Затем сравниваются отсортированные строки `sortedStr1` и `sortedStr2`. Если они одинаковы, значит, строки являются анаграммами.
Пример использования:
```javascript
console.log(isAnagram('listen', 'silent'));  // true
console.log(isAnagram('hello', 'world'));    // false
console.log(isAnagram('evil', 'vile'));      // true
```
Результат:
- Для строк `'listen'` и `'silent'` функция вернет `true`, так как они являются анаграммами.
- Для строк `'hello'` и `'world'` функция вернет `false`, так как они не имеют одинаковых символов.
Возможные улучшения:
Этот метод хорошо работает для строк, состоящих только из букв, но можно улучшить его, чтобы он игнорировал пробелы, заглавные буквы и другие символы (например, для более универсальной проверки). Вот улучшенная версия:
```javascript
function isAnagram(str1, str2) {
    const normalize = (str) => str.toLowerCase().replace(/[^a-zа-я]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
```
Объяснение:
1. `toLowerCase()` — приводит обе строки к нижнему регистру, чтобы избежать проблем с различием в регистре.
2. `.replace(/[^a-zа-я]/g, '')` — удаляет все символы, которые не являются буквами (например, пробелы, знаки препинания и цифры).
3. После этого строки приводятся к нормализованному виду, сортируются и сравниваются.
Пример использования улучшенной версии:
```javascript
console.log(isAnagram('Astronomer', 'Moon starer'));  // true
console.log(isAnagram('The eyes', 'They see'));       // true
```
Это решение будет работать с пробелами и различным регистром символов.
-----
9. Напишите функцию, которая принимает массив чисел и возвращает самое большое число из массива –
function getMaxNumber(arr) {
    return Math.max(...arr);
}
Ваше решение для нахождения самого большого числа в массиве правильно и эффективно использует метод `Math.max()` в сочетании с оператором расширения (`...`), который разворачивает массив в отдельные аргументы функции.
Вот ваш код:
```javascript
function getMaxNumber(arr) {
    return Math.max(...arr);
}
```
Объяснение:
1. Оператор `...` (spread) разворачивает массив `arr` в отдельные значения, которые передаются в функцию `Math.max()`.
2. `Math.max()` возвращает наибольшее число среди переданных аргументов.
Пример использования:
```javascript
console.log(getMaxNumber([1, 2, 3, 4, 5]));  // 5
console.log(getMaxNumber([-10, -5, 0, 10])); // 10
console.log(getMaxNumber([100, 200, 300]));  // 300
```
Результат:
- Для массива `[1, 2, 3, 4, 5]` функция вернет 5, так как это самое большое число в массиве.
- Для массива `[-10, -5, 0, 10]` функция вернет 10, так как это наибольшее число.
Альтернативное решение с использованием цикла:
Если по каким-то причинам вы не хотите использовать `Math.max()` с оператором `...`, можно найти максимальное число вручную с помощью цикла:
```javascript
function getMaxNumber(arr) {
    let max = arr[0];  // Начинаем с первого элемента массива
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];  // Обновляем max, если текущий элемент больше
        }
    }
    return max;
}
```
Этот способ также работает, но он немного длиннее и менее элегантен по сравнению с использованием `Math.max()`.
Пример использования:
```javascript
console.log(getMaxNumber([1, 2, 3, 4, 5]));  // 5
console.log(getMaxNumber([-10, -5, 0, 10])); // 10
```
Этот подход тоже вернет правильный результат, но для большинства случаев метод с `Math.max()` более предпочтителен из-за его краткости и понятности.
-----
10. Напишите функцию, которая принимает массив объектов и возвращает новый массив, содержащий только те объекты, у которых имеется свойство “name” –
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
Ваш код для фильтрации объектов, содержащих свойство `"name"`, правильный и эффективный. Он использует метод `.filter()`, чтобы создать новый массив, в котором будут только те объекты, у которых есть это свойство. Метод `hasOwnProperty()` проверяет, имеется ли у объекта непосредственно свойство `"name"` (не наследуемое от прототипа).
Вот ваш код:
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.hasOwnProperty('name'));
}
```
Объяснение:
1. `.filter()` — создает новый массив, состоящий из элементов, которые проходят проверку в предоставленной функции.
2. `obj.hasOwnProperty('name')` проверяет, имеет ли объект `obj` свойство `name`. Если да, объект остается в новом массиве.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Результат:
- В новом массиве будут только те объекты, которые имеют свойство `"name"`, а объекты без этого свойства будут исключены.
Альтернативное решение:
Вместо метода `hasOwnProperty()` можно использовать просто проверку существования свойства (если вам не нужно исключать наследуемые свойства):
```javascript
function filterObjectsWithNames(arr) {
    return arr.filter((obj) => obj.name !== undefined);
}
```
Это также будет работать, если свойство `"name"` в объекте определено, даже если оно имеет значение `undefined`. Однако, если вам нужно точно проверять только собственные свойства объекта, то вариант с `hasOwnProperty()` является более надежным.
Пример использования:
```javascript
const arr = [
    { name: 'Alice', age: 25 },
    { age: 30 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie' }
];

console.log(filterObjectsWithNames(arr));
// Результат:
// [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 22 },
//   { name: 'Charlie' }
// ]
```
Оба подхода дадут одинаковый результат. Выбор зависит от того, нужно ли вам точно проверять только собственные свойства или можно учитывать и значения `undefined`.
---------------------
⋙ ❍ Развернуть массив без .reverse(): ?
---
Чтобы развернуть массив в JavaScript без использования метода `.reverse()`, можно использовать цикл:
1: С помощью цикла `for`
```javascript
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
2: С использованием метода `reduce`
```javascript
function reverseArray(arr) {
    return arr.reduce((reversed, item) => [item, ...reversed], []);
}

let original = [1, 2, 3, 4, 5];
let reversed = reverseArray(original);

console.log(reversed); // [5, 4, 3, 2, 1]
```
3: Обмен значений местами внутри исходного массива
Если нужно развернуть массив на месте, без создания нового:
```javascript
function reverseArrayInPlace(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        // Обмен значений
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

let original = [1, 2, 3, 4, 5];
reverseArrayInPlace(original);

console.log(original); // [5, 4, 3, 2, 1]
```
Выбирайте метод в зависимости от ваших задач: создание нового массива или изменение исходного.
---------------------
⋙ ❍ Отфильтровать falsy значения: ?
---
Чтобы отфильтровать falsy значения в массиве JavaScript, можно использовать метод `.filter()` и передать в него встроенную функцию, которая проверяет истинность значений.
Falsy значения в JavaScript:
- `false`
- `0`
- `""` (пустая строка)
- `null`
- `undefined`
- `NaN`

Пример кода:
```javascript
const array = [0, 1, false, 2, '', 3, null, undefined, NaN, 4];

const filteredArray = array.filter(Boolean);

console.log(filteredArray); // [1, 2, 3, 4]
```
Почему это работает?
- Функция `Boolean` приводит каждый элемент массива к булевому значению.
- Все truthy значения (`true`, ненулевые числа, непустые строки, объекты и т.д.) остаются в массиве.
- Все falsy значения исключаются.
Если хотите фильтровать без встроенной функции `Boolean`, можно использовать явную проверку:
```javascript
const filteredArray = array.filter(value => value);

console.log(filteredArray); // [1, 2, 3, 4]
```
---------------------------------------------------------------------------------------------
📌 [ПРАКТИЧЕСКИЕ РЕАЛЬНЫЕ ЗАДАНИЯ / LIFECODING]:
---------------------
⋙ ❍ Расскажите, какие есть способы копирования простого объекта типа obj = {a: 1, b: 2, c: 3}?
---
1. Присваивание объекта:
Простейший способ - это просто присвоить объект другой переменной. Это создаст ссылку на существующий объект, а не его копию.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = original; // Это создает ссылку на тот же самый объект, а не его копию
```
2. Object.assign():
Метод `Object.assign()` используется для копирования значений всех перечисляемых свойств из одного или нескольких исходных объектов в целевой объект.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = Object.assign({}, original);
```
3. Spread оператор (...) (ES6):
Оператор распространения (spread operator) позволяет раскрыть элементы массива или объекта.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = {...original};
```
4. JSON.parse() и JSON.stringify():
Другой способ - использовать `JSON.stringify()` для преобразования объекта в строку JSON, а затем `JSON.parse()` для преобразования обратно в объект.
```javascript
const original = {a: 1, b: 2, c: 3};
const copy = JSON.parse(JSON.stringify(original));
```
Все эти методы копируют объект `{a: 1, b: 2, c: 3}`, но у каждого из них есть свои особенности. Например, присваивание объекта и `Object.assign()` создают поверхностную копию, тогда как распространение объекта и использование `JSON.stringify()` и `JSON.parse()` создают глубокую копию.
---------------------
⋙ ❍ Напишите deep clone для объекта?
---
Вот пример реализации глубокого клонирования объекта в JavaScript:
```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj; // Возвращаем простые типы данных и null как есть
  }

  let clone;

  // Обрабатываем массивы
  if (Array.isArray(obj)) {
    clone = [];
    for (let i = 0; i < obj.length; i++) {
      clone[i] = deepClone(obj[i]);
    }
    return clone;
  }

  // Обрабатываем объекты
  clone = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deepClone(obj[key]);
    }
  }
  return clone;
}

// Пример использования:
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'running']
};

const cloned = deepClone(original);
console.log(cloned);
```
Этот код рекурсивно обходит объект и его свойства, создавая копии каждого вложенного объекта и массива. Таким образом, функция `deepClone()` создает глубокую копию исходного объекта.
---------------------
⋙ ❍ Назовите различные способы, как поменять местами значения двух переменных?
---
Есть несколько способов поменять местами значения двух переменных в JavaScript.
1. С использованием временной переменной:
```javascript
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log(a, b); // 10, 5
```
2. С помощью деструктуризации массива:
```javascript
let a = 5;
let b = 10;

[b, a] = [a, b];

console.log(a, b); // 10, 5
```
3. С помощью арифметических операций (подходит только для числовых значений):
```javascript
let a = 5;
let b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b); // 10, 5
```
4. С использованием оператора XOR (исключающее ИЛИ) для логического обмена (подходит только для числовых значений):
```javascript
let a = 5;
let b = 10;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a, b); // 10, 5
```
Все эти способы достигают одного и того же результата: значения переменных `a` и `b` меняются местами. Выбор конкретного метода может зависеть от контекста и типов данных, с которыми вы работаете.
---------------------
⋙ ❍ Менеджер попросил в задаче поменять статусы с «active, inactive» на «active, removed», но в коде фигурируют только цифры и непонятно, какой статус соответствует какой цифре. Как помочь будущим программистам не лезть в документацию по коду (Вопрос ставят на конкретном примере с кодом)?
---
Чтобы помочь будущим программистам легко понять, какая цифра соответствует какому статусу, вы можете использовать объект или Map для создания соответствия между цифрами и статусами. Вот пример, как это можно сделать:
```javascript
const statusMap = {
  1: 'active',
  0: 'removed'
};

// Пример использования:
const status = 1;
console.log(statusMap[status]); // 'active'
```
В этом примере `statusMap` - это объект, который сопоставляет цифры со строковыми статусами. Таким образом, если программист видит число в коде, он может легко определить, какому статусу оно соответствует, обратившись к `statusMap`. Это делает код более читаемым и понятным без необходимости обращаться к документации.
---------------------
⋙ ❍ Нужно сделать минипроект — список пользователей с формой создания/редактирования пользователя:?
---
- Для хранения пользователей используйте Firebase (это бесплатно).
- Для стилизации используйте Bootstrap.
- Минимальный набор полей пользователя:
- имя;
- фамилия;
- электронная почта;
- телефон (в формате +380 (XX) XXX-XX-XX)
- дата рождения;
- будет плюсом добавление аватара и возможность crop-картинки.
- Список пользователей должен иметь возможность фильтрации и пагинацию.
- Проект должен содержать README-файл с шагами для запуска.
---------------------
⋙ ❍ Реализуйте асинхронный метод filter для Array (должны работать await)?
---
Вот пример реализации асинхронного метода `filterAsync()` для массива, который позволяет использовать `await`:
```javascript
Array.prototype.filterAsync = async function(predicate) {
  const results = await Promise.all(this.map(async (element, index, array) => {
    const result = await predicate(element, index, array);
    return { element, result };
  }));
  return results.filter(({ result }) => result).map(({ element }) => element);
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];

async function isEven(value) {
  return value % 2 === 0;
}

(async () => {
  const filtered = await arr.filterAsync(isEven);
  console.log(filtered); // [2, 4]
})();
```
В этой реализации метод `filterAsync()` принимает асинхронный предикат (`predicate`), который возвращает промис с булевым значением. Он применяет предикат к каждому элементу массива с помощью метода `map()`, а затем собирает результаты с помощью `Promise.all()`. После этого он фильтрует результаты и возвращает массив отфильтрованных элементов, для которых предикат возвращает `true`.
---------------------
⋙ ❍ Реализуйте функцию reduce с помощью рекурсии?
---
Вот пример реализации функции `reduce()` с использованием рекурсии:
```javascript
function reduce(arr, callback, initialValue) {
  // Проверка наличия начального значения
  if (initialValue !== undefined) {
    return reduceHelper(arr, callback, initialValue, 0);
  } else {
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    return reduceHelper(arr.slice(1), callback, arr[0], 1);
  }
}

function reduceHelper(arr, callback, accumulator, index) {
  // Базовый случай: если индекс достиг длины массива, возвращаем аккумулятор
  if (index === arr.length) {
    return accumulator;
  }
  // Рекурсивный случай: применяем функцию callback к текущему элементу и результату предыдущего вызова
  const newAccumulator = callback(accumulator, arr[index], index, arr);
  // Рекурсивный вызов с обновленными значениями
  return reduceHelper(arr, callback, newAccumulator, index + 1);
}

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const sum = reduce(arr, (acc, curr) => acc + curr, 0);
console.log(sum); // 15
```
Эта реализация `reduce()` работает как стандартный метод `reduce()`. Она принимает массив, функцию обратного вызова и (опционально) начальное значение аккумулятора. Рекурсивная функция `reduceHelper()` обходит массив, применяя функцию обратного вызова к каждому элементу и обновляя аккумулятор на каждом шаге.
---------------------
⋙ ❍ Как можно было бы сделать toggle-компонент, как в iPhone, без использования JS?
---
Вы можете реализовать toggle-компонент, подобный тому, что используется в iPhone, с помощью HTML и CSS, без использования JavaScript. Для этого можно воспользоваться элементами формы и псевдоклассами CSS для изменения внешнего вида в зависимости от состояния переключателя. Вот пример такой реализации:
```html
<input type="checkbox" id="toggle" class="toggle-checkbox">
<label for="toggle" class="toggle-label"></label>
```

```css
.toggle-checkbox {
  display: none; /* Скрываем фактический переключатель */
}

.toggle-label {
  display: inline-block;
  width: 50px; /* Размер переключателя */
  height: 30px;
  background-color: #ccc; /* Цвет фона */
  border-radius: 15px; /* Округление краев */
  position: relative;
  cursor: pointer;
}

.toggle-label::before {
  content: '';
  display: block;
  width: 26px; /* Размер ползунка */
  height: 26px;
  background-color: #fff; /* Цвет ползунка */
  border-radius: 50%; /* Округление краев ползунка */
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 2px; /* Начальное положение ползунка */
  transition: left 0.2s; /* Анимация при изменении состояния */
}

.toggle-checkbox:checked + .toggle-label::before {
  left: calc(100% - 28px); /* Положение ползунка в положении "включено" */
}
```
Этот код создает стилизованный переключатель, который изменяет свое состояние при щелчке на него. При этом используются скрытый фактический чекбокс и псевдоэлементы CSS для создания внешнего вида переключателя и его ползунка.
---------------------
⋙ ❍ Напишите функцию Sleep (ms), останавливающую выполнение async-функции на заданный промежуток времени?
---
Для реализации функции `sleep(ms)` в асинхронном контексте можно воспользоваться промисами и функцией `setTimeout()`, чтобы приостановить выполнение асинхронной функции на определенное количество миллисекунд. Вот пример реализации этой функции:
```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Пример использования:
async function example() {
  console.log('Начало выполнения');
  await sleep(2000); // Приостанавливаем выполнение на 2 секунды
  console.log('Прошло 2 секунды');
}

example();
```
Эта функция `sleep(ms)` возвращает промис, который будет выполнен после указанного количества миллисекунд. При использовании в асинхронной функции с помощью `await` выполнение будет приостановлено до завершения указанного времени.
---------------------
⋙ ❍ Реализуйте один из методов массива (например, splice)?
---
`splice()` позволяет изменять содержимое массива, удаляя существующие элементы и/или добавляя новые элементы на их место. Вот простая реализация этого метода:
```javascript
Array.prototype.customSplice = function(start, deleteCount, ...items) {
  // Проверка наличия параметра start
  if (start < 0) {
    start = Math.max(this.length + start, 0);
  }

  const deletedItems = [];

  // Удаление элементов из массива
  const removeCount = Math.min(deleteCount, this.length - start);
  for (let i = 0; i < removeCount; i++) {
    const index = start + i;
    deletedItems.push(this[index]);
    // Сдвигаем все элементы после удаленного налево
    for (let j = index; j < this.length - 1; j++) {
      this[j] = this[j + 1];
    }
    // Удаляем последний элемент
    this.length--;
  }

  // Добавление новых элементов в массив
  const len = this.length;
  const numNewElements = items.length;
  const numMoveElements = len - start;
  this.length = len + numNewElements - removeCount;
  for (let i = len - 1; i >= start; i--) {
    this[i + numNewElements - removeCount] = this[i];
  }
  for (let i = 0; i < numNewElements; i++) {
    this[start + i] = items[i];
  }

  return deletedItems;
};

// Пример использования:
const arr = [1, 2, 3, 4, 5];
const deleted = arr.customSplice(2, 2, 'a', 'b', 'c');
console.log('Массив после splice:', arr); // [1, 2, "a", "b", "c", 5]
console.log('Удаленные элементы:', deleted); // [3, 4]
```
Эта реализация `customSplice()` принимает три аргумента: `start` (индекс, с которого начинается удаление/вставка), `deleteCount` (количество удаляемых элементов) и `items` (элементы для вставки). Метод изменяет исходный массив и возвращает массив удаленных элементов.
---------------------
⋙ ❍ Напишите функцию с RegExp для нахождения всех HTML-ссылок в строке?
---
Для нахождения всех HTML-ссылок в строке можно использовать регулярное выражение, которое будет соответствовать шаблону HTML-ссылки. Вот пример функции с регулярным выражением для этой задачи:
```javascript
function findHTMLLinks(text) {
  const regex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
  const links = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    links.push(match[1]);
  }

  return links;
}

// Пример использования:
const text = '<a href="https://example.com">Example</a> <a href="https://google.com">Google</a>';
const links = findHTMLLinks(text);
console.log(links); // ["https://example.com", "https://google.com"]
```
Это регулярное выражение ищет все совпадения с шаблоном HTML-ссылки в тексте. Затем функция извлекает значения атрибута `href` из каждого совпадения и добавляет их в массив `links`.
---------------------
⋙ ❍ Реализуйте функцию, которая исполнит callback для всех элементов определенной ветви DOM-дерева?
---
Для выполнения этой задачи можно использовать рекурсивный обход DOM-дерева, чтобы найти все элементы ветви и вызвать callback для каждого из них. Вот пример реализации такой функции:
```javascript
function executeCallbackForBranch(rootElement, callback) {
  // Функция для рекурсивного обхода DOM-дерева
  function traverse(element) {
    // Вызываем callback для текущего элемента
    callback(element);

    // Рекурсивно обходим дочерние элементы
    for (let i = 0; i < element.children.length; i++) {
      traverse(element.children[i]);
    }
  }

  // Начинаем обход с корневого элемента
  traverse(rootElement);
}

// Пример использования:
// Предположим, у нас есть корневой элемент #root
const rootElement = document.getElementById('root');

// Callback функция, которая добавляет класс "highlight" к каждому элементу
function highlightElement(element) {
  element.classList.add('highlight');
}

// Вызываем функцию для выполнения callback для всех элементов ветви
executeCallbackForBranch(rootElement, highlightElement);
```
Этот код рекурсивно обходит все дочерние элементы начиная с заданного корневого элемента `rootElement` и вызывает переданный `callback` для каждого элемента ветви. В данном примере `highlightElement` добавляет класс "highlight" к каждому найденному элементу.
---------------------
⋙ ❍ Реализуйте таблицу с виртуальным скроллом?
---
Для создания таблицы с виртуальным скроллом в React можно воспользоваться библиотеками или реализовать это самостоятельно. Вот пример простой реализации таблицы с виртуальным скроллом без использования сторонних библиотек:
```javascript
import React, { useState, useEffect, useRef } from 'react';

const VirtualizedTable = ({ data, rowHeight, visibleRowCount }) => {
  const [startIndex, setStartIndex] = useState(0);
  const tableRef = useRef();

  const handleScroll = () => {
    const scrollTop = tableRef.current.scrollTop;
    const startIndex = Math.floor(scrollTop / rowHeight);
    setStartIndex(startIndex);
  };

  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.addEventListener('scroll', handleScroll);
      return () => {
        tableRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const visibleData = data.slice(startIndex, startIndex + visibleRowCount);

  return (
    <div style={{ height: `${rowHeight * visibleRowCount}px`, overflow: 'auto' }} ref={tableRef}>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {visibleData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VirtualizedTable;
```
Этот компонент принимает данные `data`, высоту строки `rowHeight` и количество видимых строк `visibleRowCount`. Он использует состояние для отслеживания индекса начальной строки, а затем рендерит только видимые строки на основе этого индекса и количества видимых строк. Когда пользователь прокручивает таблицу, обработчик `handleScroll` обновляет начальный индекс в соответствии с положением прокрутки.
---------------------
⋙ ❍ Реализуйте функцию преобразования URL query строки в JSON?
---
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";
function queryObjectify(arg) {
// ??
}
queryObjectify(inData)
/* Результатом выполнения для входной строки должен быть следующий объект
{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
};
*/
Для преобразования URL-запроса в JSON можно использовать циклы и разбиение строки на подстроки. Вот один из способов реализации этой функции:
```javascript
const inData = "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue";

function queryObjectify(arg) {
    const result = {};

    // Разбить строку по символу '&', чтобы получить отдельные пары ключ-значение
    const pairs = arg.split('&');

    pairs.forEach(pair => {
        // Разбить каждую пару по символу '=', чтобы получить ключ и значение
        const [key, value] = pair.split('=');

        // Разделить ключ на уровни объекта и создать структуру JSON
        const keys = key.split('.');

        let current = result;
        keys.forEach((key, index) => {
            // Проверить, существует ли уже объект с этим ключом
            if (!current[key]) {
                // Если объект не существует, создать новый объект или массив
                current[key] = index === keys.length - 1 ? decodeURIComponent(value) : {};
            }
            // Перейти к следующему уровню объекта
            current = current[key];
        });
    });

    return result;
}

console.log(queryObjectify(inData));
```
Эта функция разбивает URL-запрос на отдельные пары ключ-значение, затем разбивает каждую пару на ключи и значения. Далее она создает структуру JSON, соответствующую ключам и значениям. При этом значения URL-кодируются с помощью `decodeURIComponent()`, чтобы преобразовать закодированные символы (%20 и др.) обратно в их исходное представление.
---------------------
⋙ ❍ Реализуйте функцию поиска пересечения двух массивов?
---
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];
function intersection (a, b) {
// ??
}
intersection(first, second) // -> [3, 4]
Для поиска пересечения двух массивов можно воспользоваться методом `filter()`, который позволяет отфильтровать элементы массива на основе определенного условия. Вот как можно реализовать функцию поиска пересечения двух массивов:
```javascript
const first = [1, 2, 3, 4];
const second = [3, 4, 5, 6];

function intersection(a, b) {
    // Отфильтровать элементы первого массива, оставив только те, которые также присутствуют во втором массиве
    return a.filter(item => b.includes(item));
}

console.log(intersection(first, second)); // -> [3, 4]
```
Эта функция принимает два массива в качестве аргументов и возвращает новый массив, содержащий элементы, которые присутствуют и в первом, и во втором массиве.
---------------------
⋙ ❍ Реализуйте функцию/класс для генерации HTML?
---
const HTMLConstruct = {};
HTMLConstruct.span('foo'); // -> <span>foo</span>
HTMLConstruct.div.span('bar'); // -> <div><span>bar</span></div>
HTMLConstruct.div.p(
HTMLConstruct.span('bar'),
HTMLConstruct.div.span('baz')
);
-> <div><p><span>bar</span><span>baz</span></p></div>
Для генерации HTML-кода в JavaScript можно создать класс, который будет представлять HTML-элемент и предоставлять методы для добавления атрибутов, вложенных элементов и получения итогового HTML-кода. Это позволит динамически создавать и управлять HTML-структурами в вашем приложении.
Ниже представлен пример такого класса:
```javascript
class HTMLElement {
  constructor(tagName) {
    this.tagName = tagName;
    this.attributes = {};
    this.children = [];
    this.selfClosingTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
  }

  setAttribute(name, value) {
    this.attributes[name] = value;
  }

  appendChild(child) {
    this.children.push(child);
  }

  toString() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => ` ${key}="${value}"`)
      .join('');
    const isSelfClosing = this.selfClosingTags.includes(this.tagName);
    const childrenHTML = this.children.map(child => child.toString()).join('');
    return isSelfClosing
      ? `<${this.tagName}${attrs} />`
      : `<${this.tagName}${attrs}>${childrenHTML}</${this.tagName}>`;
  }
}
```
Пример использования:
```javascript
// Создаем элемент <div>
const div = new HTMLElement('div');
div.setAttribute('class', 'container');

// Создаем вложенный элемент <p>
const paragraph = new HTMLElement('p');
paragraph.setAttribute('class', 'text');
paragraph.appendChild({
  toString: () => 'Привет, мир!'
});

// Добавляем <p> как дочерний элемент <div>
div.appendChild(paragraph);

// Получаем итоговый HTML
console.log(div.toString());
```
В результате выполнения этого кода в консоли будет выведено:
```html
<div class="container"><p class="text">Привет, мир!</p></div>
```
Объяснение:
- Конструктор `constructor(tagName)`: Инициализирует новый элемент с заданным тегом, пустыми атрибутами и дочерними элементами.
- Метод `setAttribute(name, value)`: Устанавливает атрибут для элемента.
- Метод `appendChild(child)`: Добавляет дочерний элемент. Дочерний элемент должен иметь метод `toString`, который возвращает его HTML-представление.
- Метод `toString()`: Генерирует HTML-код для элемента, включая его атрибуты и дочерние элементы. Учитывает самозакрывающиеся теги.
Этот подход позволяет программно создавать сложные HTML-структуры, управлять их атрибутами и вложенностью, что особенно полезно при динамическом формировании контента на стороне клиента.
---------------------------------------------------------------------------------------------
📌 [ЗАДАЧИ MIDDLE/SENIOR В ОДНОМ ИЗВЕСТНОМ БАНКЕ ✅]:
---------------------
⋙ ❍ Задача: Дан массив [1,1,1,2,4,5]. Нужно вернуть true в случае если в нём есть хотя бы один повторяющийся элемент?
---
Для решения этой задачи можно использовать различные подходы, но одним из самых простых способов является использование хэш-таблицы для отслеживания уникальных элементов массива.
Вот пример JavaScript-кода, который решает задачу:
```javascript
function hasDuplicate(arr) {
  // Создаем объект для отслеживания уникальных элементов
  const seen = {};

  // Проходим по каждому элементу массива
  for (let i = 0; i < arr.length; i++) {
    // Если текущий элемент уже был ранее добавлен в объект,
    // значит, у нас есть повторяющийся элемент
    if (seen[arr[i]]) {
      return true;
    } else {
      // Иначе помечаем текущий элемент как присутствующий в массиве
      seen[arr[i]] = true;
    }
  }

  // Если цикл завершился, и повторяющихся элементов не найдено
  return false;
}

// Пример использования:
const arr = [1, 1, 1, 2, 4, 5];
console.log(hasDuplicate(arr)); // Выведет: true
```
Этот код создает объект `seen`, где ключами являются элементы массива, а значениями - логические значения, указывающие на то, встречался ли элемент ранее. Если элемент уже присутствует в объекте `seen`, значит, у нас есть повторяющийся элемент, и функция возвращает `true`. Если цикл завершится без обнаружения повторяющихся элементов, функция вернет `false`.
---------------------
⋙ ❍ Что выведет console.log(1==‘1’) и console.log(1===‘1’) и почему?
---
Выражение `1 == '1'` вернет `true`, а выражение `1 === '1'` вернет `false`.
При сравнении с использованием оператора `==`, JavaScript выполняет преобразование типов данных (type coercion), чтобы сравнить значения с одинаковым типом. В этом случае строка `'1'` будет преобразована в число, и оба значения станут числовыми. Поскольку числовые значения равны, результат будет `true`.
Однако, при использовании оператора `===`, сравнение выполняется без преобразования типов данных (strict equality). Значения сравниваются по их типу и значению. Таким образом, число `1` и строка `'1'` не равны по строгому равенству, поскольку они имеют разные типы данных (number и string), даже если их значения по сути одинаковы. Поэтому результат сравнения `1 === '1'` будет `false`.
---------------------
⋙ ❍ В каком порядке выведется console.log()?
---
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
1
2
3
4
5
6
7
8
9
10
11
12
13
14
setTimeout(function timeout() {
    console.log('Таймаут');
}, 0);
let p = new Promise(function(resolve, reject) {
    console.log('Создание промиса');
    resolve();
});
p.then(function(){
    console.log('Обработка промиса');
});
console.log('Конец скрипта');
Чтобы определить порядок вывода `console.log()`, нужно учитывать асинхронность выполнения кода. Давайте разберем, в каком порядке будут выполняться операции:
1. Сначала выполняются все синхронные операции, то есть:
- Выводится 'Создание промиса'.
- Создается и резолвится промис.
- Выводится 'Конец скрипта'.
2. Затем выполняются обработчики промисов и асинхронные операции из очереди микрозадач (microtask queue):
- Обработчик промиса выводит 'Обработка промиса'.
3. В конце выполняются функции обратного вызова таймаутов (setTimeout) и асинхронные операции из очереди задач (task queue):
- Выводится 'Таймаут'.
Таким образом, порядок вывода будет следующим:
```
- Создание промиса
- Конец скрипта
- Обработка промиса
- Таймаут
```
---------------------
⋙ ❍ Как можно скопировать объект (вопрос про Object.assign(), перебор в цикле, Spread оператор, JSON.stringify -> JSON.parse)?
---
Вы правы, существует несколько способов скопировать объект в JavaScript. Рассмотрим каждый из них:
1. Object.assign():
```javascript
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original);
```
2. Перебор в цикле:
```javascript
const original = { a: 1, b: 2 };
const copy = {};
for (let key in original) {
  copy[key] = original[key];
}
```
3. Spread оператор:
```javascript
const original = { a: 1, b: 2 };
const copy = { ...original };
```
4. JSON.stringify() -> JSON.parse():
```javascript
const original = { a: 1, b: 2 };
const copy = JSON.parse(JSON.stringify(original));
```
Каждый из этих способов имеет свои особенности:
- `Object.assign()`: Копирует только значения свойств объекта. Если объект содержит вложенные объекты или ссылки на другие объекты, они будут скопированы по ссылке, а не по значению.
- Перебор в цикле: Простой и понятный способ копирования объекта, но не работает с вложенными объектами и массивами.
- Spread оператор: Позволяет создать поверхностную копию объекта. Как и `Object.assign()`, не обрабатывает вложенные объекты глубоко.
- `JSON.stringify() -> JSON.parse()`: Создает глубокую копию объекта, копируя значения свойств и их вложенные объекты или массивы. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или тех объектов, которые содержат специфичные свойства, такие как `Symbol`.
При выборе способа копирования объекта следует учитывать структуру объекта, необходимость глубокого или поверхностного копирования и возможные нежелательные побочные эффекты, такие как потеря функций или круговые ссылки.
---------------------
⋙ ❍ Как копируется объект (по ссылке или по значению)?
---
В JavaScript объекты копируются по ссылке, а не по значению, за исключением некоторых специальных случаев или методов, которые создают глубокие копии. Это означает, что при присваивании одного объекта другой переменной создается копия ссылки на объект, а не самого объекта.
Рассмотрим пример:
```javascript
const original = { a: 1, b: 2 };
const copy = original;
copy.a = 3;

console.log(original.a); // Выведет: 3
```
В этом примере `original` и `copy` указывают на один и тот же объект в памяти. Поэтому при изменении свойств через одну переменную изменения будут видны и через другую.
Есть несколько способов создания копии объекта:
1. Поверхностная копия: Методы такие как `Object.assign()`, Spread оператор `{ ...obj }` или перебор в цикле создают поверхностные копии объектов. Они копируют только свойства объекта, но не их значения. Если объект содержит вложенные объекты, они будут скопированы по ссылке.
2. Глубокая копия: Методы такие как `JSON.stringify()` и `JSON.parse()` могут использоваться для создания глубоких копий объектов. Они сериализуют объект в строку JSON, а затем снова парсят эту строку в новый объект. Этот метод создает новые объекты для каждого свойства и их значений, что гарантирует, что копии объектов не будут иметь ссылок на исходные объекты. Однако этот метод не поддерживает копирование функций, объектов с круговыми ссылками или специфичные свойства, такие как `Symbol`.
Выбор между поверхностной и глубокой копией зависит от ваших потребностей. Если вам нужна простая поверхностная копия, используйте `Object.assign()` или Spread оператор. Если вам нужна полная копия объекта с вложенными структурами, используйте методы сериализации и десериализации JSON или другие библиотеки для глубокого копирования.
---------------------
⋙ ❍ Что будет если объекту, объявленному через const, изменить значения полей?
---
Если объект объявлен с использованием `const`, это означает, что ссылка на этот объект не может быть изменена. Однако содержимое объекта может быть изменено, если оно не является неизменяемым.
Давайте рассмотрим пример:
```javascript
const person = {
  name: 'John',
  age: 30
};

person.name = 'Jane'; // Изменяем значение поля name
person.age = 35;      // Изменяем значение поля age

console.log(person); // Выведет: { name: 'Jane', age: 35 }
```
В этом примере, хотя `person` объявлен с использованием `const`, мы можем изменить значения его полей. Это происходит потому, что `const` ограничивает изменение ссылки на объект, но не его содержимое.
Однако, если попытаться присвоить объекту новое значение или перезаписать ссылку на объект, JavaScript выдаст ошибку:
```javascript
const person = {
  name: 'John',
  age: 30
};

person = {}; // Ошибка: "Assignment to constant variable."
```
Поэтому, если вам нужно полностью предотвратить изменение объекта, вам следует использовать методы для глубокого замораживания объекта, такие как `Object.freeze()`, которые защищают от изменений как ссылку на объект, так и его содержимое.
---------------------
⋙ ❍ Как можно сделать объект иммутабельным? Вопрос об Object.freeze?
---
Для создания иммутабельного объекта в JavaScript вы можете использовать метод `Object.freeze()`. Этот метод "замораживает" объект, делая его неизменяемым: нельзя добавлять новые свойства, изменять существующие или удалять их.
Вот как вы можете использовать `Object.freeze()` для создания иммутабельного объекта:
```javascript
const obj = {
  property1: 'value1',
  property2: 'value2'
};

// Замораживаем объект
Object.freeze(obj);

// Попытка изменить свойство объекта
obj.property1 = 'new value'; // Не будет совершено никаких изменений
```
Вы также можете использовать `Object.freeze()` в сочетании с рекурсивным проходом по объекту для замораживания всех вложенных объектов и создания глубокой иммутабельности:
```javascript
function deepFreeze(obj) {
  // Получаем имена всех свойств объекта
  const propNames = Object.getOwnPropertyNames(obj);

  // Замораживаем все свойства объекта
  propNames.forEach(function(name) {
    const prop = obj[name];

    // Если свойство является объектом и не было заморожено ранее, замораживаем его
    if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });

  // Замораживаем сам объект
  return Object.freeze(obj);
}

const obj = {
  nested: {
    property1: 'value1',
    property2: 'value2'
  }
};

deepFreeze(obj);

// Попытка изменить вложенное свойство объекта
obj.nested.property1 = 'new value'; // Не будет совершено никаких изменений
```
Таким образом, использование `Object.freeze()` позволяет создать объект, который не может быть изменен, что обеспечивает безопасность данных и предотвращает неожиданные изменения в приложении.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ)?
---
(function() {
    f();
    f = function() {
        console.log(1);
    }
})()
function f() {
    console.log(2)
}
f();
1
2
3
4
5
6
7
8
9
10
11
12
13
(function() {
    f();

    f = function() {
        console.log(1);
    }
})()

function f() {
    console.log(2)
}

f();
Этот код вызовет ошибку "TypeError: f is not a function".
При первом вызове `f();` функция `f` еще не определена, так как вызов `f();` происходит перед присваиванием новой функции `f = function() { console.log(1); }`.
В результате, будет выброшено исключение TypeError, потому что при попытке вызвать `f()` до определения функции, `f` будет равно `undefined`, а не функции.
---------------------
⋙ ❍ Что выведет консоль (Аргументируйте свой ответ) ?
---
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
1
2
3
4
5
6
7
8
9
10
11
const obj = {
  name: 'John',
  getName() {
    return this.name;
  }
};
const name1 = obj.getName();
const getName = obj.getName;
const name2 = getName();
console.log(`${name1} ${name2}`); // ?
В консоль будет выведено:
```
John undefined
```
Это происходит из-за того, что контекст выполнения функции `getName` изменяется при вызове отдельно от объекта `obj`.
1. Переменная `name1` получает значение `John`, потому что функция `getName` вызывается в контексте объекта `obj`, и `this.name` возвращает свойство `name` этого объекта.
2. Переменная `getName` присваивается ссылка на функцию `getName` объекта `obj`, но без привязки к контексту. Поэтому, когда функция `getName` вызывается в контексте глобального объекта (или `undefined` в строгом режиме), `this.name` возвращает `undefined`.
Поэтому, при использовании интерполяции строк `${name1} ${name2}`, первая переменная `name1` будет иметь значение `'John'`, а вторая переменная `name2` будет иметь значение `undefined`.
---------------------
⋙ ❍ Создайте метод у объекта String, который многократно повторяет строку (не используя метод .repeat()). ?
---
console.log("hello". customRepeat(3)); // “hellohellohello”
1
console.log("hello". customRepeat(3)); // “hellohellohello”
Вы можете создать метод `customRepeat` для объекта `String`, который будет многократно повторять строку. Вот пример, как это можно сделать:
```javascript
String.prototype.customRepeat = function(count) {
  let repeatedString = '';
  for (let i = 0; i < count; i++) {
    repeatedString += this;
  }
  return repeatedString;
};
console.log("hello".customRepeat(3)); // Выведет: "hellohellohello"
```
В этом примере мы расширяем прототип `String`, добавляя метод `customRepeat`, который принимает количество повторений и возвращает новую строку, содержащую исходную строку, повторенную заданное количество раз.
---------------------
⋙ ❍ Есть список элементов button, на которые навешен обработчик события ‘click’. Что попадет в консоль, если пользователь нажмет первую и последнюю кнопку в списке? Аргументируйте свой ответ.
---
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
1
2
3
4
5
6
var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
       nodes[i].addEventListener('click', function() {
      	console.log('You clicked element #' + i);
       });
}
• При нажатии на первую и последнюю кнопку в списке будут выведены следующие строки в консоль:
```
You clicked element #6
You clicked element #6
```
Это происходит из-за того, что переменная `i` используется внутри функции обратного вызова для обработчика события 'click'. В JavaScript область видимости переменных объявленных через ключевое слово `var` - это вся функция. В результате, значение переменной `i` будет равно последнему значению, которое она принимает в цикле, то есть `6`. Когда функция обработчика события вызывается при нажатии на кнопку, она видит последнее значение `i`, которое было установлено, то есть `6`, и выводит его в консоль для обоих кнопок.
---------------------
⋙ ❍ Что выведет в консоль следующий код (Аргументируйте свой ответ) ?
---
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
1
2
3
4
5
6
7
8
function printme() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}
printme();
В консоль будет выведено следующее:
```
1
4
3
2
```
При вызове функции `printme`, сначала будет выведено `1`, затем `4`, потому что они находятся в синхронном коде функции. Затем будет добавлено два таймера с задержками: один на 1000 миллисекунд (1 секунду) и один на 0 миллисекунд (почти мгновенно). Далее, когда таймер с задержкой в 0 миллисекунд сработает, будет выведено `3`. И, наконец, после истечения 1 секунды, выведется `2`.
Это происходит из-за того, что даже если задержка таймера равна 0, функция обратного вызова все равно помещается в очередь событий и выполнится после завершения текущего кода. Таким образом, порядок выполнения будет сохранен.
---------------------
⋙ ❍ Напишите функцию isPalindrome(str), которая проверяет, является ли строка палиндромом ?
---
console.log(isPalindrome('asdsa')) // true
1
console.log(isPalindrome('asdsa')) // true
Вы можете создать функцию `isPalindrome`, которая будет принимать строку и проверять, является ли она палиндромом. Палиндром - это строка, которая читается одинаково как с начала, так и с конца. Вот как это можно сделать:
```javascript
function isPalindrome(str) {
  // Удаляем все пробелы из строки и приводим ее к нижнему регистру
  const formattedStr = str.replace(/\s/g, '').toLowerCase();

  // Проверяем, является ли строка палиндромом
  for (let i = 0; i < formattedStr.length / 2; i++) {
    if (formattedStr[i] !== formattedStr[formattedStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isPalindrome('asdsa')); // Выведет: true
```
Эта функция сначала форматирует строку, удаляя все пробелы и приводя к нижнему регистру. Затем она сравнивает символы с обоих концов строки, чтобы определить, является ли она палиндромом. Если строка является палиндромом, функция возвращает `true`, в противном случае - `false`.
---------------------
⋙ ❍ Напишите функцию, складывающую 2 числа, которую можно вызывать следующим образом: ?
---
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
1
2
console.log(sum(2,3));   // 5
console.log(sum(2)(3));  // 5
Вы можете создать функцию `sum`, которая будет принимать один или два аргумента и возвращать сумму этих чисел. Вот как это можно сделать:
```javascript
function sum(a, b) {
  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }
  return a + b;
}
console.log(sum(2, 3));   // Выведет: 5
console.log(sum(2)(3));   // Выведет: 5
```
Эта функция проверяет, сколько аргументов ей передано. Если передан только один аргумент, она возвращает функцию, которая ожидает второй аргумент и возвращает их сумму. Если передано два аргумента, она просто возвращает их сумму.
---------------------
⋙ ❍ Поменяйте местами значения целочисленных переменных, не используя временные переменные. Первый вариант – используя ES6, и второй вариант – используя ES5. ?
---
var a = 1;
var b = 2;

// b = 1;
// a = 2;
1
2
3
4
5
var a = 1;
var b = 2;

// b = 1;
// a = 2;
Используя ES6:
```javascript
let a = 1;
let b = 2;

[a, b] = [b, a];
console.log(a, b); // Выведет: 2 1
```
Используя ES5:
```javascript
var a = 1;
var b = 2;

a = a + b;
b = a - b;
a = a - b;
console.log(a, b); // Выведет: 2 1
```
---------------------
⋙ ❍ Напишите функцию, проверяющую число на четность, используя только битовые операции ?
---
Функция, которая проверяет число на четность, используя только битовые операции:
```javascript
function isEven(number) {
  // Проверяем младший бит числа
  // Если младший бит равен 0, число четное, иначе нечетное
  return (number & 1) === 0;
}

// Пример использования функции
console.log(isEven(4)); // Выведет true, потому что 4 - четное число
console.log(isEven(7)); // Выведет false, потому что 7 - нечетное число
```
Эта функция использует побитовое И (`&`) с числом 1, чтобы проверить младший бит числа. Если младший бит равен 0, это означает, что число четное, иначе это нечетное число.
---------------------
⋙ ❍ Дан не сложный компонент на реакте и необходимо провести ревью (заюзать хуки useMemo / useCallback, вынести повторяющийся код в функцию или переменную и что-то там еще было) ?
---
Давайте посмотрим на ваш компонент и проведем ревью, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Давайте оптимизируем этот компонент:
1. Хранение удвоенного значения с помощью `useMemo`:
 ```javascript
 const doubleCount = useMemo(() => count * 2, [count]);
 ```
2. Оптимизация обработчиков событий с помощью `useCallback`:
 ```javascript
 const handleIncrement = useCallback(() => {
   setCount((prevCount) => prevCount + 1);
 }, []);

 const handleDecrement = useCallback(() => {
   setCount((prevCount) => prevCount - 1);
 }, []);
 ```
3. Вынос повторяющегося кода в функцию или переменную:
 ```javascript
 const increment = () => {
   setCount((prevCount) => prevCount + 1);
 };

 const decrement = () => {
   setCount((prevCount) => prevCount - 1);
 };
 ```
Вот полный код с примененными оптимизациями:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const handleIncrement = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
/Давайте проведем ревью компонента, оптимизируя его с помощью хуков `useMemo` и `useCallback`, а также вынося повторяющийся код в функции или переменные:
```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(0);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Оптимизированный код:
```javascript
import React, { useState, useEffect, useMemo, useCallback } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  useEffect(() => {
    const double = count * 2;
    setDoubleCount(double);
  }, [count]);

  const handleIncrement = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default MyComponent;
```
Теперь компонент оптимизирован с использованием хуков `useMemo` и `useCallback`, а также вынесен повторяющийся код в функции или переменные.
---------------------
⋙ ❍ Задача на рекурсию ?
---
Простая задача на рекурсию: написать функцию для вычисления факториала числа.
Факториал числа \( n \) (обозначается как \( n! \)) - это произведение всех положительных целых чисел от 1 до \( n \). Например, факториал 5 (обозначается как \( 5! \)) равен \( 5 \times 4 \times 3 \times 2 \times 1 = 120 \).
Вот решение на JavaScript с использованием рекурсии:
```javascript
function factorial(n) {
  // Базовый случай: если n равно 0 или 1, вернуть 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // Рекурсивный случай: вычислить факториал числа n как произведение n и факториала (n - 1)
  else {
    return n * factorial(n - 1);
  }
}

// Пример использования функции
console.log(factorial(5)); // Выведет 120
```
Эта функция рекурсивно вызывает саму себя до достижения базового случая (когда \( n = 0 \) или \( n = 1 \)), а затем возвращает результат.
---------------------------------------------------------------------------------------------
*/

// 1. У нас есть следующий объект:

// let user = {
//     name: "John",
//     age: 30
//     };
    
//     Проверьте, что этот объект не пустой и что в нем есть ключ age.
let user = {
    name: "John",
    age: 30
  };
  
  // Проверка, что объект не пустой и имеет ключ "age"
  if (Object.keys(user).length !== 0 && user.hasOwnProperty("age")) {
    console.log("Объект не пустой и содержит ключ 'age'.");
  } else {
    console.log("Объект пустой или не содержит ключ 'age'.");
  }

//   2. Создать объект product с названием(productname) и ценой(productprice) продукта и выведите данные в консоль.
let product = {
    productName: "Ноутбук",
    productPrice: 1500
  };
  
  console.log("Название продукта:", product.productName);
  console.log("Цена продукта:", product.productPrice);
  
// 3. Добавить в объект product свойства productquantity и productquality.  
let product = {
    productName: "Ноутбук",
    productPrice: 1500
  };
  
  // Добавление свойств productQuantity и productQuality
  product.productQuantity = 10;
  product.productQuality = "высокое";
  
  console.log(product);

// 4. Удалить свойство product_quality из объекта product.
let product = {
    productName: "Ноутбук",
    productPrice: 1500,
    productQuantity: 10,
    productQuality: "высокое"
  };
  
  // Удаление свойства productQuality
  delete product.productQuality;
  
  console.log(product);

// 5. Написать код, выполнив задание: если значение объекта является числом (number), то его значение надо увеличить вдвое.

// Пример объекта:


// let menu = {
//     width: 200, 
//     height: 300,
//     title: "my menu"
// };

// Результат:


// let menu = {
//     width: 400, 
//     height: 600,
//     title: "my menu"
// };
let menu = {
    width: 200,
    height: 300,
    title: "my menu"
  };
  
  for (let key in menu) {
    if (typeof menu[key] === "number") {
      menu[key] *= 2;
    }
  }
  
  console.log(menu);

// 6. Написать функцию, которая принимает 2 числа и возвращает 1, если первое число больше, чем второе; -1, если первое число меньше, чем второе, и 0, если числа равны.
function compareNumbers(num1, num2) {
    if (num1 > num2) {
      return 1;
    } else if (num1 < num2) {
      return -1;
    } else {
      return 0;
    }
  }
  
  // Примеры вызова функции
  console.log(compareNumbers(5, 10));  // Вывод: -1
  console.log(compareNumbers(15, 5));  // Вывод: 1
  console.log(compareNumbers(8, 8));  // Вывод: 0

// 7. Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
function processNumbers(num1, num2) {
    if (num1 % 2 === 0 && num2 % 2 === 0) {
      return num1 * num2;
    } else if (num1 % 2 !== 0 && num2 % 2 !== 0) {
      return num1 + num2;
    } else {
      return num1 % 2 !== 0 ? num1 : num2;
    }
  }
  
  // Примеры вызова функции
  console.log(processNumbers(2, 4));   // Вывод: 8 (произведение)
  console.log(processNumbers(3, 5));   // Вывод: 8 (сумма)
  console.log(processNumbers(6, 7));   // Вывод: 7 (нечётное число)
    
  
  
    
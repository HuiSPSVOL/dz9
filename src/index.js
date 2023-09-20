// Вам необхідно написати функцію,
//     яка приймає на вхід масив чисел і повертає новий масив, що містить тільки ті числа, які є простими числами.
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function filterPrimes(arr) {
    return arr.filter(num => isPrime(num));
}
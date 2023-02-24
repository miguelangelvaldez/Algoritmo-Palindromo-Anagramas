const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const file = document.getElementById('file').files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const text = e.target.result;

        const words = text.split(' ');
        const anagrams = [];
        const palindromes = [];

        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const sortedWord = word.split('').sort().join('');
            let isAnagram = false;
            let isPalindrome = false;

            // Check if word is an anagram
            for (let j = 0; j < words.length; j++) {
                const testWord = words[j];

                if (i === j) continue;
                
                const sortedTestWord = testWord.split('').sort().join('');

                if (sortedWord === sortedTestWord) {
                    isAnagram = true;
                    anagrams.push([word, testWord]);
                }
            }

            // Check if word is a palindrome
            if (word === word.split('').reverse().join('')) {
                isPalindrome = true;
                palindromes.push(word);
            }

            if (isAnagram || isPalindrome) {
                console.log(`${word} is ${isAnagram ? 'an anagram' : ''}${isPalindrome ? (isAnagram ? ' and ' : '') + 'a palindrome' : ''}`);
            }
        }

        console.log(`Anagrams: ${anagrams.join(', ')}`);
        console.log(`Palindromes: ${palindromes.join(', ')}`);
    };

    reader.readAsText(file);
});
const input = document.querySelector("input");
const span = document.querySelector("span");

function countVowels(text) {
    const pattern = /[aeiou]/gi;
    const matches = text.match(pattern);
    return matches ? matches.length : 0;
}

input.addEventListener("input", function () {
    const vowelCount = countVowels(input.value);
    span.textContent = vowelCount;
});
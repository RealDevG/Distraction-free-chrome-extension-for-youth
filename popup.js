let message = document.getElementById("quote");
let speaker = document.getElementById("author");
async function fetchquote(){
    const a = await fetch("https://qapi.vercel.app/api/random");
    const response = await a.json();
    return response;
}
async function main() {
    const result = await fetchquote();
    message.innerHTML = result.quote;
    speaker.innerHTML = " - " + result.author;
}
main();

console.log("hi iam popupjs")
// PART 1: Number Facts

let baseURL = 'http://numbersapi.com';
let favNumber = 27;

//1.
async function favNumberFact(){
    let numFact = await $.getJSON(`${baseURL}/${favNumber}?json`);

    console.log(numFact);
};
favNumberFact();

//2. 
async function multNums(){
    let favNums = [27,3,5];
    let numFacts = await $.getJSON(`${baseURL}/${favNums}?json`);

    console.log(numFacts);
}
multNums();


//3. 
async function fourNumFacts(){
    let facts = await Promise.all(
        Array.from({ length: 4}, () => $.getJSON(`${baseURL}/${favNumber}?json`))
    );
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
};
fourNumFacts();



// a function that returns an object
function createUser(name, email, password = "DeFaUltPaSsWoRd") {
    const user = {
        name: name,
        email: email,
        password: password
    }

    return user;
}

const userData1 = ["Jude Bellingham", "judepuci@gmail.com"];
const userData2 = ["Lionel Messi", "lionelmessi@gmail.com", "mayben007!"];

const Jude = createUser(...userData1);
const Bukayo = createUser(...userData2);
console.log(Jude);
console.log(Bukayo);
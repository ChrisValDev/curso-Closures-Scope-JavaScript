function greeting() {
    let userName = 'Christopher';

    function displayUserName () {
        return `hello ${userName}`;
    }
    return displayUserName;
}

const g = greeting();
console.log(g); //[Function: displayUserName]
console.log(g()); //hello Christopher

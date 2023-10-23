//Using Promises:
//console.log('person1: show ticket');
//console.log('person2: show ticket');
//const loadUserForm = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("Page loaded"), 3000);
//});

//const enterUserName = new Promise((resolve, reject) => {
//    setTimeout(() => resolve("user entered"), 3000);
//});

//const verifyUserDetails = () => {
//    return "form successfully uploaded";
//};

//const getButter = new Promise((resolve, reject) => {
//    setTimeout(() => resolve('butter'), 2000);
//});

//const getColdDrinks = new Promise((resolve, reject) => {
//    setTimeout(() => resolve('cold drink'), 1000);
//});

//loadUserForm.then(() => {
//    enterUserName.then(() => {
//        verifyUserDetails();
//        getButter.then((butter) => {
//            console.log(`husband: I got some ${butter} on popcorn`);
//            getColdDrinks.then((coldDrink) => {
//                console.log(`wife: I got the ${coldDrink}`);
//                const testResult = verifyUserDetails();
//                console.log(testResult);
//            });
//        });
//    });
//});

//console.log('person4: show ticket');
//console.log('person5: show ticket');


//Using Async/Await:
console.log('person1: show ticket');
console.log('person2: show ticket');
const testUserForm = async () => {
    const loadUserForm = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Page loaded"), 3000);
    });
    const enterUserName = new Promise((resolve, reject) => {
        setTimeout(() => resolve("user entered"), 3000);
    });

    const verifyUserDetails = () => {
        return "form successfully uploaded";
    };

    await loadUserForm;
    await enterUserName;
    verifyUserDetails();

    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve('butter'), 2000);
    });

    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('cold drink'), 1000);
    });

    await getButter;
    const butter = await getButter;
    console.log(`husband: I got some ${butter} on popcorn`);

    await getColdDrinks;
    const coldDrink = await getColdDrinks;
    console.log(`wife: I got the ${coldDrink}`);

    const testResult = verifyUserDetails();
    return testResult;
};

testUserForm().then((result) => console.log(result));
console.log('person4: show ticket');
console.log('person5: show ticket');

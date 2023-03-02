// pending
// resolved
// rejected

const createdPromise = new Promise((resolve, reject) => {
  const userData = { id: 1 };
  if (!userData) {
    reject("Something went Wrong");
  } else {
    setTimeout(() => {
      resolve("Successfully Get the data");
    }, 1000);
  }
});

// multiple promise

const userIds = [01, 02, 03, 04];
let userData = [];
for (i = 0; i < userIds.length; i++) {
  const userId = userIds[i];
  userData.push(createdPromise);
}

Promise.all(userData)
  .then((user) => console.log(user))
  .catch((err) => console.log(err));
// console.log(userData);

createdPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

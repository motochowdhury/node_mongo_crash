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

createdPromise
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

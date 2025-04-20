// const apiEndPoints = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/comments",
// ];
// async function fetchDynamicApi(endpoints) {
//   try {
//     const response = await Promise.all(
//       endpoints.map((url) => fetch(url).then((res) => res.json())),
//     );
//     console.log("All data :", response);
//     return response;
//   } catch (error) {
//     console.error("Failed to fetch dynamic Api's", error);
//   }
// }
// fetchDynamicApi(apiEndPoints);
const apiEndPoints = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/comments",
];

async function fetchDynamicApi(endpoints) {
  try {
    const results = await Promise.allSettled(
      endpoints.map((url) =>
        fetch(url)
          .then((res) => res.json())
          .catch((err) => ({ error: `Failed to fetch ${url}`, details: err })),
      ),
    );

    const successfulData = results
      .filter((res) => res.status === "fulfilled")
      .map((res) => res.value);

    const failedData = results
      .filter((res) => res.status === "rejected")
      .map((res) => res.reason);

    console.log("Successful APIs:", successfulData);
    if (failedData.length) console.warn("Failed APIs:", failedData);

    return { successfulData, failedData };
  } catch (error) {
    console.error("Unexpected error:", error);
    throw error;
  }
}

fetchDynamicApi(apiEndPoints);

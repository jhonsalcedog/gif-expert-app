import React, { useEffect } from 'react';

const TestApi = () => {
  useEffect(() => {
    // async await
    const apiKey = '29IvbaPsMCaymQ6Jljr1UQxFN0cKxexk';

    const getImage = async () => {
      try {
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await response.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
      } catch (error) {
        /* eslint no-console: ["error", { allow: ["warn", "error"] }] */

        console.error('error', error);
      }
    };

    getImage();

    // fetch

    // petition
    //   .then((response) => response.json())
    //   //destruturing access to data
    //   .then(({ data }) => {
    //     const { url } = data.images.original;

    //     const img = document.createElement('img');

    //     img.src = url;
    //     console.log(url);

    //     document.body.append(img);
    //   })
    //   .catch(console.warn);
  });

  return (
    <>
      <h1>TestApi</h1>
    </>
  );
};

export default TestApi;

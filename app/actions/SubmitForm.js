'use server'

export default async function submitFormData(formData, NextApiRequest, NextApiResponse) {
  console.log("hello"); // Check the retrieved data
  const rawData = {
    email: formData.get('email'),
    first_name: formData.get('first_name'),
    last_name: formData.get('last_name'),
    make: formData.get('make'),
    model: formData.get('model'),
    length: formData.get('length'),
  };

  const response = await fetch('https://script.google.com/a/macros/vols.utk.edu/s/AKfycbxpmWtiK7Y6E2UuAVvW-6ZvOJjGjKUkNgQwObK1eOREt-XWUAa4beS94vLEtuILjoPI/exec', {
    method: 'POST',
    body: rawData,
  })
  // Send POST request
  fetch(url, options)
    .then(response => {
      if (response.ok) {
        return response.text();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log(data); // Success message from Google Apps Script
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });


  return { rawData }; // Return whatever response you need
}
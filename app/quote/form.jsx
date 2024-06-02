'use client'

import { useState } from 'react'
export default function Form() {

  const [isLoading, setIsLoading] = useState(false)

  async function formSubmit(event) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts

    try {
      const formData = new FormData(event.currentTarget);
      const jsonData = {};
      const apiKey = process.env.NEXT_PUBLIC_API_ENDPOINT;

      for (const [key, value] of formData.entries()) {
        jsonData[key] = value;
      }

      const jsonString = JSON.stringify(jsonData);

      const response = await fetch(apiKey, {
        method: 'POST',
        mode: 'no-cors',
        body: jsonString // Convert formData to JSON object
      });
      
      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Handle error if necessary
      console.error(error)
    } finally {
      setIsLoading(false) // Set loading to false when the request completes
    }
  }
  if (!isLoading) {
    return (
      <form className="w-5/6 sm:w-1/2 flex flex-wrap mx-auto justify-between" onSubmit={formSubmit}>
        <input className="formInput w-full"
          name="email"
          type="email"
          placeholder="Email"

          required
        />

        <input className="formInput w-full"
          name="phone"
          type="phone"
          placeholder="Phone Number"

          required
        />
        <div className="w-full flex flex-row">
          <input className="formInput w-1/2 mr-1"
            name="first_name"
            type="text"
            placeholder="First Name"
            autoComplete="on"
            required
          />

          <input className="formInput w-1/2 ml-1"
            name="last_name"
            type="text"
            placeholder="Last Name"
            autoComplete="on"
            required
          />

        </div>

        <div className="w-full flex flex-row">
          <input className="formInput w-1/3 mr-2"
            name="make"
            type="text"
            placeholder="Boat Make"
            autoComplete="on"
            required
          />

          <input className="formInput w-1/3 mr-2"
            name="model"
            type="text"
            placeholder="Boat Model"
            autoComplete="on"
            required
          />

          <input className="formInput w-1/3"
            name="length"
            type="text"
            placeholder="Length (ft)"
            autoComplete="on"
          />


        </div>
        <div className="w-full mb-4">
          <input className="formInput w-full pb-16"
              name = "message"
              type = "text"
              placeholder = "Extra Notes (optional)"
            />
        </div>


        <button type="submit" className="submitButton">Submit</button>
      </form>
    )
  }

  else {
    return (
      <div className='loader mx-auto mt-10'></div>
    )
  }
}
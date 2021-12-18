# HobNode - A biscuitty API

This is a Node API using Express with a MongoDB database and Jest for testing.

**Prerequisites:**

1. You must have node installed on your machine.
2. You must have MongoDb installed with a database named `teaTime` and a collection named `biscuits`.
3. Use the json data in `biscuits.json` to populate the `biscuits` collection.

**Get the API running:**

1. Clone this repo.
2. Run `npm install` in the terminal from the root of the project.
3. Run `nodemon start.js` in the terminal from the root of the project.
4. The API should now be running on [localhost:8000]('[http://localhost:8000/biscuits](http://localhost:8000/biscuits)').
5. Use any of the routes detailed below to test and use the API. The [Postman App]('[https://www.getpostman.com/](https://www.getpostman.com/)') is very useful for experimenting with API endpoints.

**Running the Tests**

Run `npm run test`

# API ENDPOINTS (ROUTES)

**Get all biscuits**
----
  Returns json data about all of the biscuits in the `biscuits` collection.

* **URL**

  /biscuits

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
	  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    { 
    success: true,
    status: 200,
    message : "Biscuits retrieved",
    data: [
		    {
			    "_id":"[OBJECT ID]",
			    "name":"[BISCUIT NAME]",
			    "img":"[IMAGE URL]",
			    "RDT":"[RECOMMENDED DUNKING TIME]" 
		    },
		    {
			    "_id":"[OBJECT ID]",
			    "name":"[BISCUIT NAME]",
			    "img":"[IMAGE URL]",
			    "RDT":"[RECOMMENDED DUNKING TIME]" 
		    },
		    {
			    "_id":"[OBJECT ID]",
			    "name":"[BISCUIT NAME]",
			    "img":"[IMAGE URL]",
			    "RDT":"[RECOMMENDED DUNKING TIME]" 
		    },
		  ] 
    }
    ```
 
* **Error Response:**

  * **Code:** 200  <br />
    **Content:** 
    ```
    { 
    success: false,
    status: 200,
    message : "Could not retrieve biscuits",
    data: [] 
    }
    ```

* **Sample Call:**

  ```javascript
    fetch('/biscuits')
	    .then((data)=> data.json)
	    .then((biscuits)=> {
		    console.log(biscuits)
	    })
  ```

**Add new biscuit**
----
  Creates new document in the biscuit collection, Returns json data with success message.

* **URL**

  /biscuits

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
	  None

* **Data Params**

  `{"name":"Jammie Dodger","img":"www.test.com/dodger","RDT":6}`
  
  "name": The biscuit name (string up to 50 characters)
  
  "img": A url to a hosted image of the biscuit (url starting with `http://` or `https://`)
  
  "RDT": Recommended dunking time - a number in seconds (0-99)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "success": true,
        "message": "Biscuit added successfully",
        "status": 200,
        "data": []
    }
    ```
 
* **Error Response:**

  * **Code:** 200  <br />
    **Content:** 
    ```
    { 
    success: false,
    status: 200,
    message : "Biscuit not added",
    data: [] 
    }
    ```

* **Sample Call:**

  ```javascript
    fetch('/biscuits', 
      {
        method: 'POST',
        body: JSON.stringify(newBiscuitObj),
        headers: {
          "Content-Type": "application/json"
      }
    })
    .then((data)=> data.json)
    .then((data)=> {
        console.log(data)
    })
  ```

**Log the result of a comparison**
----
  Saves the result of comparing two biscuits, both biscuits have their performance counter incremented by 1. Additionally the winner also has their wins counter incremented by 1. Returns json response.

* **URL**

  /biscuits/compare

* **Method:**

  `POST`
  
*  **URL Params**

   **Required:**
 
	  None

* **Data Params**

  `{"winner":"61be4aac1ee6cf64cf3ce338","loser":"61be4aac1ee6cf64cf3ce339"}`
  
  "winner": The winning biscuits id (unique string - 24 characters)

  "loser": The losing biscuits id (unique string - 24 characters)

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "success": true,
        "message": "Biscuit comparison logged successfully",
        "status": 200,
        "data": []
    }
    ```
 
* **Error Response:**

  * **Code:** 200  <br />
    **Content:** 
    ```
    { 
    success: false,
    status: 404,
    message : "Biscuit comparison not logged",
    data: [] 
    }
    ```

* **Sample Call:**

  ```javascript

    let dataToSend = {
      "winner":"61be4aac1ee6cf64cf3ce338",
      "loser":"61be4aac1ee6cf64cf3ce33a"
      }

    fetch('/biscuits/compare', 
      {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
          "Content-Type": "application/json"
      }
    })
    .then((data)=> data.json)
    .then((data)=> {
        console.log(data)
    })
  ```
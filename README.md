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

  * **Code:** 404  <br />
    **Content:** 
    ```
    { 
    success: false,
    status: 404,
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

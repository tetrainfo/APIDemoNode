# API Interview Test Project 
This is an example Node API service using static data in a json file located in the mock data directory.

Instructions
1.	Create a document/text file with a list of possible assumptions that you would make based on the Feature Criteria Requested
2.	Note any questions you would surface to the ScrumMaster/PM or Business Stakeholders/Product Owners regarding the feature request(s)
3.	Create a API Solution in your prefererd language/technology that will use the provided json file (auto.leads.json) as the Minimally Viable Product iteration’s  dataset
4.	Provide detailed instructions as to: 
a.	How to install/configure/run your solution on any Windows machine.  
b.	Please explicitly define the expected URL to access your API via postman once the API solution is being served.
5.	Please keep the level of effort to complete the exercise reasonable between one and four hours.
Features
1.	Create a method/endpoint to return a collection of all list items
2.	Create a method/endpoint to retrieve item detail by ID
3.	Create a method/endpoint to return a collection of all list items filtering on consumer’s state value
4.	Create a method/endpoint to return a collection of all list items filtering on vehicle’s make value
5.	Create a method/endpoint to return a collection of all list items filtering on former insurer


Delivery
The preferred delivery method of this assignment would be to provide a GitHub or BitBucket URL that allows us to download & review your work.   


```bash
$ git clone https://github.com/tetrainfo/APIDemoNode.git
```

then checkout the branch as follow

```bash
$ git checkout 'master'
```

```bash
----- NOTE---------

This project requires you use **node 8.11+** because of this SLOC in the dataservice:

const json_data = require('../mockdata/auto.leads.json');
```

Install the following dependencies if required:

--node and npm  https://nodejs.org/en/download/

--yarn https://yarnpkg.com

then navigate to the server folder and add these dependancies

```bash
$ yarn add express morgan body-parser express-promise-router
```

To run the project, navigate to the server folder and enter
```bash
$  node app.js
```
To test, use these sample urls with an tool like Postman at https://www.getpostman.com 
```
http://localhost:5000/quotes/998 should return a single response for a customer with id = 998

http://localhost:5000/quotes?state=IL should return a list for consumers with state=IL or state="IL"

http://localhost:5000/quotes?make=ford should return a list for consumers have one or more Ford vehicles

http://localhost:5000/quotes?former_insurer="Monolith Casualty" should return a list for consumers with the specified insurer

http://localhost:5000/quotes? lists all content


```To Do:

Make the search criteria a bit fuzzier using a wildcard
Implement real logging using Morgan
Write tests

```


Fetch challenge
Read the documentation of cat facts API

Once you are familiar with how it works, create a small frontend application

The application should have:
a from that asks the user for number of breeds (try and make it look good)
a heading that says 'Cat breeds'
an empty section for all the results
a p for errors
When the user submits the form you should make a GET request to https://catfact.ninja/breeds?limit=${limit}

Create a card element for each breed that will consist of:

a div with a h3 that has the breed name
a p with the country
a p with cat info
Append all of the cards to the section for all the results If an error gets thrown, display to the user clear the form after each request clear the results section before making a new one

split the code into modules


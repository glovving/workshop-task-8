# workshop-task-8
# APIs
link to completed web page -> (https://glovving.github.io/workshop-task-8/)
## Goals for this workshop:
- Create a sketch that makes an API call to gather data from an external source. Here is a list of free-to-use APIsLinks to an external site.which do not require authentication.
- Visual elements of the sketch should be determined by data retrieved from the external source.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Notes and Planning:
Here are some notes I took during the demonstration:

<img width="400" alt="note" src="https://github.com/user-attachments/assets/9c0daf51-ad82-43f8-86d1-73737dd3b6aa" />

### Plan:
- Connect to a disctionary api
- Website will take user input and return dictionary definition

## Finding API source and testing
Using this website Leo showed us (https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/) I found a dictionary API (https://dictionaryapi.dev/).

I decided to do a simple test in my vscode p5.js sketch first before writing the more complex function.

<img width="600" alt="api_access_test" src="https://github.com/user-attachments/assets/78bfcf43-8411-444f-8121-59686a7de058" />

I used the word 'word' as a test to see if I could successfully fetch the information from the api and display it on screen, as you can see the definition has been successfully fetched and printed.

## Building Search Capability
First I created a user input box and a search button, upon clicking the search button any previously displayed text is cleared and a function called search() is called (below).

<img width="214" alt="previous_search_clared" src="https://github.com/user-attachments/assets/aeab0c47-9ab8-4832-9abb-3c9394435c90" />

Inside search() the input box value is stored inside another variable called search_val and the input box is cleared.
If the user has entered a string longer than 0, the search function called the dictionary(word) function with the search_val as the word input.

<img width="202" alt="search_func" src="https://github.com/user-attachments/assets/8910d61b-79e1-4bf8-b44b-dd69d6865672" />

From the dictionary function a request to the API is made to fetch the data on the word entered, once it has been fetched it is then converted into json.I
I then created the def variable to hold the word definition using the json data.

<img width="563" alt="def_array" src="https://github.com/user-attachments/assets/6d8f6958-9618-4bac-bfb5-65649c57c55c" />

As you can see in the above, next to the arrow, I have had to use array indexing with index value 0 to retrieve the data, this is because the API documentation shows the different 'levels' of data being stored in arrays (below).

<img width="681" alt="api_array" src="https://github.com/user-attachments/assets/0dc8ed0d-076c-4c6c-b80b-98e0fe58d549" />

I initially made the mistake of not using array indexes which did not return anything.
Here is an example of how the website was looking at this point, this is a result of using the input 'computer'.

<img width="341" alt="dictionary_working" src="https://github.com/user-attachments/assets/2e5b60a8-9eff-4fac-b364-f4f06174d5b7" />

## Finishing visual touches
For my final edits, I changed my background into a light tan colour, and did some text formatting.

<img width="664" alt="textwrap" src="https://github.com/user-attachments/assets/7d6ffe16-6954-4743-b29d-ba8b00252729" />

I used the text wrap function to make sure the text would stay around the center of the window and not write out of the window bounbdary.
Here is an example of my final outcome:

<img width="380" alt="final_result" src="https://github.com/user-attachments/assets/70723ef6-f758-4d16-9426-1e14dc04bd74" />






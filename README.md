We have google cloud fucntions for making api endpoint in ecommerce
In this we have used heroku for making api endpi
frontend is contected with backend with api and backend is connected with database with api
we have connected heroku to backend using cli
we make api endpoint url and through that endpoint url we make requests(get,post) to api endpoint(specific place in server for a specific data)


Videos is name under which we have stored url,description,likes,messages etc
Mongoose schema is used for defining datastructure of the items in doc file (nosql database stores items in doc) 
Nosql  = documents having different name are linked together and each document have collection of different items(name(string),age(18))
Document=array of id (u cant define datastructure of document, it is always string(id))
collection= each document have a special connected json object called as collection
  [array of doc(id always )]->[collection of items(maybedifferent datastructure)]->doc[collection of items]
A cluster distributes a big dataset and stores pieces of data (shards) across multiple servers .

We are using rest api for connecting backend and frontend.Here-:
client (which is making request to server)=frontend
server (which is providing data)=backend
Create a database user to grant an application or user, access to databases and collections in your clusters in this Atlas project. Granular access control can be configured with default privileges or custom roles. You can grant access to an Atlas project or organization using the correspo

status=200 (site is running nice)
404=site not found
postman (testing tool for api) = pretends to be nakli client (requesting data from server)


// props does same work as context api but context api is simplier and easily redible
/* backend (Nodejs app) on heroku-:
    nodejs (backend framework)
    express server
    mongodb 
    mongoose(connects database to our app)
This all are hosted on heroku

And this whole backend will be converted in form of api which will be used in frontend 


Frontend (react app) on firebase-:
    material ui
    flexbox
    3rd party ticker
    scroll snap
    
    useRef for playing video

*/



/*
Wherever website state/info is changing by users click(addintocart) ,writing(email filling) or anything we use state managment hook either usereducer or usestate
Rule-: Make the function with 2 names in which 2nd name will have set and 1st letter of 1st word as Capital 
    
    if(playying && onClick){
        video.pause();
        playying=false;
    }
    else{
        video.play();
        playying=true;
    }
   (but everybody uses state managment hook for any this type of work)
1) Make a function-:
    Rule -: [playying,setPlayying]=useState(false);
    Both playyy and setPlayy are same.
    To make changes we use playyy as reference and changes made to setplayyy is automaticaalyy made to playy

    if(playying && onClick){
       video.pause();//play() and pause() are predefined in react but playying is userdefined
       setplayying=flase;
    }
    else{
       video.play();
       serplayying=true;
    }



Ticker is used for moving text

*/




src folder is used for making frontend and in functions folder we have made backend (cloud function)
function is backend and src is frontend

We have build an express backend and host it on cloud function



There are many other operations ,CRUD operation are some basic operation done on database-:
Create - "post" https request method is used for sending request to database to add a new data 
Read - "get" is used for sending request to just read/get the data(no changes made) from database. (get is a safe method because it does not changes data in database)
Update - "put" is used for sending request to update some data already present in database
Delete- "delete" is used for deleting some data






we used "firestore" database which is a nosql database


when we enter card details and then hit buy now then what happens is-:
Our website will push all the cart information to stripe.
Stripe will create payment for it
Stripe will push all information to the database attached to that particular user

we are deploying express api on firebase cloud 
we have used firebase authentication (auth) for creating new ac using email and password/sign in and stored all the info of email and password in firestore to sign in whenever user comes again

we have build checkout/payment page with stripe frontend

We have build a cloud function(serverless function)( backend) to process the stripe payment

In App.js we use <router path=name> to separate all pages.
In any button if we want that onClick it redirects to some page we have used <Link to="name";></Link>

Difference between class component and functional component-:
  
  
  
We used useHistory (gives browser history & provided by react router package)


Wherever website state/info is changing by users click(addintocart) ,writing(email filling) or anything we use state managment hook either usereducer or usestate

Capital.js is component vs small.js is file

Used material ui to have icons


div,p is used to create block element i.e, they take whole block (strip) from left to right.
eg, in amazon  the search bar, the cart amazon logo, and sign in  are in one (thin strip) block.  
usestate and usereducer are both statemanagment hook to increment,decremenet and things similar to that .
you can use any

use context (context api) usereducer,usestate is a hook

usereducer is hook with 2 things[state,dispatch] (local hook)
dispatch => action to be taken
state => on what action is to be taken

we used contextapi to make usereducer  global (with help of predeveloped algo from stackoverflow)

eg-: for making things add to cart and remove from we used state managment hook usereducer  with a global access to all componet using contextapi hook

we used cart as state  and made 2 dispatching function addtocart and removefromcart










span,a,img for inline element i.e, takes only space 
eg-: random img, for highligting(styling) something

Block can be converted to inline by using css 
and commonly we convert rather creting span.

So to remove item we have used map (key,value) and each a[i] stores a product and when we remove it it deletes that index


So to divide the things to easly code we put every big block inside a Component.js(not file.js) and then we add all component  in App.js 
eg-:1) header componet in which sign in seaarch and logo 
2) home component in wh



Every component has a main function with its name which returns that we use in App.js
function componentname(){
       //another function inside main function
       const addtobasket({
            dispatch({..})

       return(
           whatever to return
       );
}
  
  
  
Used external liibrary" router" for switching between different pages by giving every page a specific path 
<Route path="/checkout">

and then using that name for linking img  etc
eg<Link to="checkout">
            <img src="..">
     </Link>

There is no refresh while switching between pages in react




At lasst every component imported and arranged  in App.js
  
  
  

Context api is used to share data.
We can also props (normal way of passing data) but it will hectic to pass to each component.
There are 2 components in context api 
.Provider(1) and .Consumer(can be many)


useReducer/usestate is used for state management
It has 2 component (state,action)
i,e , state is always changing according to
action (logic/algo) written

eg-:mostly used for count +- , cart



Firebase is used as realtime database

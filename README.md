https://user-images.githubusercontent.com/86003701/137864828-54d7fc0d-7e2b-436e-ab20-26318f566041.mp4

• React app as frontend/client, Express app as server

• Used Firestore database(schemaless,nosql)to store order details with timings to have orderhistory

• Used Stripe for taking card details in frontend & making payment using that card details in backend.

• Used firebase auth for signup and login process of users.

# More details-:

Built a single page web app in which every page is stored as component.
Used React Router for making single page web app(doesnt require reloading for going to different page).  Used 'links' for linking different buttons to redirect to desired page.

Used Context api(hook) to avoid prop drilling(passing data from one part to another by going through several other parts that dont require that data). 
eg-: made product info(server) for (client)addtocart/removetocart functionality of usestate/usereducer.

DOM : stucture of webpage with html in form of tree to easily customize the buttons etc using js & css.It also contains js withing html elements.

JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM

Used usestate & usereducer inside functional component rather than using class component for managing a state i,e managing something inside DOM(basic document structure of webpage using html like button)  that is dynamicly changing ,i.e, managing single components like array(cart array) (when to add/remove things from cart array),integer(no of items in cart)(when its value will be increased/decreased).
eg-:When user clicks addtobasket, the onClick function inside product component adds product's(img,price,etc)to array(cart),i.e,[product(onclick,img,price,etc)]. If same product's id already present in array it increases the count of that product rather than adding another time. Similarly if u delete a product it removes from the array(cart).

Using DOM structure it is easier to customize html things using js

[  [product name(key)=(value),[product img=(value)]  ,   [product name(key)=(value),[product img=(value)]   ]

Used useeffect for managing side effect (lifecycle methods) like, if item added/removed from cart then, request a new key for the total amount for payment from stripe.

RETURNS VALUE WHERE IT STOPS CHECKING

var x = 220;
var y = "Hello";
var z = undefined;
        
x | | y    // Returns 220 since the first value is truthy
        
x | | z   // Returns 220 since the first value is truthy
        
x && y    // Returns "Hello" since both the values are truthy

https://user-images.githubusercontent.com/86003701/137864828-54d7fc0d-7e2b-436e-ab20-26318f566041.mp4

• Frontend=React app(deployed on firebase).
• Backend=Express app(deployed on google cloud), Stripe payment gateway.
• Database=Firestore(schemaless, nosql & serverless).
• Used Stripe payment gateway for payment using cards in frontend and backend.
• Used firebase auth for signup and login of users.
• Used firestore to store order details with timings & fetch that data to show the order history.


# More details-:
Built express app(server) along with cloud funtions(serverless framework i.e,automatic scaling of server when needed) hosted on google cloud.

Used firebase authentication for user authentication.

Built a single page web app in which every page is stored as component.
Used React Router for making single page web app(doesnt require reloading for going to different page).  Used 'links' for linking different buttons to redirect to desired page.

Used Context api(hook) to avoid prop drilling(passing data from one part to another by going through several other parts that dont require that data). 
eg-: made product info(server) for (client)addtocart/removetocart functionality of usestate/usereducer.

Used stripe server and frontend for payment process.

Used usestate & usereducer inside functional component rather than using class component for managing a state ,i.e, managing single components like array(cart array) (when to add/remove things from cart array),integer(no of items in cart)(when its value will be increased/decreased).
eg-:When user clicks addtobasket, the onClick function inside product component adds product's(img,price,etc)to array(cart),i.e,[product(onclick,img,price,etc)]. If same product's id already present in array it increases the count of that product rather than adding another time. Similarly if u delete a product it removes from the array(cart).

[  [product name(key)=(value),[product img=(value)]  ,   [product name(key)=(value),[product img=(value)]   ]

Used useeffect for managing side effect (lifecycle methods) like, if item added/removed from cart then, request a new key for the total amount for payment from stripe.

Built an rest api in express app(server) with firestore database which is used by react app(client,frontend)🤍🤍

https://user-images.githubusercontent.com/86003701/137864828-54d7fc0d-7e2b-436e-ab20-26318f566041.mp4

Built express app(server) along with cloud funtions(serverless framework i.e,automatic scaling of server when needed) hosted on google cloud.

Used firebase authentication for user authentication.

Used React Router for making single page web app(doesnt require reloading for going to different page).  Used 'links' for linking different buttons to redirect to desired page.

Used Context api(hook) to avoid prop drilling(passing data from one part to another by going through several other parts that dont require that data). 
eg-: made product info(server) for (client)addtocart/removetocart functionality of usestate/usereducer.

Used stripe server and frontend for payment process.

Used usestate & usereducer inside functional component rather than using class component for managing and updating state like cart array.
eg-:When user clicks addtobasket it add the the product img,price,etc reated to that particular button to cart array(cart is array of map) ,if clicked remove delete that product img,tile,etc from basket/cart array) .

[  [product name(key)=(value),[product img=(value)]  ,   [product name(key)=(value),[product img=(value)]   ]

Used useeffect for managing lifecycle methods/side effect like, if item added/removed from cart then, request a new key for the total amount for payment from stripe.

Built an rest api in express app(server) with firestore database which is used by react app(client,frontend)🤍🤍







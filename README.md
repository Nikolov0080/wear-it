## WEAR-IT E-COMMERCE

**Online store for clothes**


### `Initialize`

- git clone 
- cd wear-it - npm install  
- cd api - npm install   
- start API and React project
- npm start

### `Structure`
Front-end: React  

- libraries used:  
 **jsonwebtoken**   
 **react-router-dom**
 **jest**

Back-end: Express API sing MongoDB
- functionality used:  
**Authentication**  
**CRUD operations**

### `Functionalities`

- **Authentication**:  
This functionality includes **register**,**login** and **logout**.  
User model

- **Product**:  
 Update address
 User model

- **Product**:  
Includes **cart page**(PLP) & **product details page functionality**(PDP)  
Product model  
Cart model  

- **Add to cart**:  
Includes add to cart functionality in **PDP**
Includes select size functionality

- **Complete order**:  
Includes complete order 
Sets **Completed orders** info in Profile page  

- **Delete order**:   
Deletes products from cart  
Delete all
Delete one

### **`Models`**  

 **User model** | **Product model** | **Order model** | **Completed order model** |**Update address** |
|-------------- | ------------------| --------------- | ------------------------  | ------------- |
|username       | productName       | productName     | productName               | addressLine  |
|email          | price             | price           | price                     | city         |
|password       | size              | size            | size                      | postal code  |
|-              | product image(URL)| product image   | product image             
|-              |         -         | creator ID      | creator ID 

**Not authenticated users (guests)**  
- can register and login
- can view Home page guest view  
- can view Product details Guest view

**Authenticated users**  
- can view Product details user view,Profile/Cart
- can make add to Cart
- can complete ordeers  
- can view Home page authenticated user view

### **`Pages`**  
 - **Home**  
 Not authenticated and authenticated users view  
 Shows categories and products
 - **Login**  
 Users can login  
 - **Register**  
 Users create accouns  
 - **Profile**  
 Accessible only for logged in users  
 List of all products that users have ordered
 Statistics for his order history  
 From here users can logout  
 - **Cart**  
 Users can complete single product order or delete it from cart  
 Same for all products in cart
 - **Product Details**  
 From here authenticated users can select size and add to cart  
 the current product  
 
 ### **`Routes`**  
 - Home page - "/"  
 - Login page - "/login"  
 - Register page - "/register"
 - Profile page - "/profile"  
 - Details page - "/details/:product_name/:product_id"  - (accessable from Home page)  
 - Cart page - "/cart"  

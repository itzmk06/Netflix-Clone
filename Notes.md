if you want to use forms inside react application make use of formik 

###UseRef Hook 
- useRef is a react hook that lets you to reference a value that's not needed for rendering 

we also make use of regex for email validation 

to get the data from input boxes there are two ways 
- either with the help of useState or with the help of useRef 

onSubmit() should be provide to form not the button 

instead of adding the utilities for redux state multiple times,
we will use a utility provided by firebase called on auth state changed

so instead of doing store management on sign in or sign up, 
we will make it on auth state changed

basically that onAuthStateChanged it's an api 

this api is automatically called whenever there's an authentication state change 
-> whenever user login, logout 

we should write the code for this at the root level basically the body 
where we have routes there 

actually it's like an event listeners
and we don't want to call this api again and again 

just make use of useEffect 

navigate() should be used inside the routers providers 
means inside browse, login etc -> which are the child components of body 

when taking the values for working after sign up take it from auth.currentUser not from user because user will  not have updated values 

whenever we are making an api call we have to pass in the options 

_> the api's or the actions will be called twice because of strict mode 
_> strict mode makes the components to render twice to find any inconsistencies 
_> this will happen in dev mode not in production mode 



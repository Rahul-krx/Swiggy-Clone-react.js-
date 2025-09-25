<!-- package.json is the configuration for npm. -->
<!-- '^' known as caret update the minor version like 2.8.2 to 2.8.3, but '~' known as tilde will update the major version like 2.4.5 to 2.5.0 -->
<!-- It locks the exact versions of dependencies (and sub-dependencies) that were installed. -->
<!-- HMR - (hot module replacement)- when you cahnge something in code and then save it HMR keep watching changes and quicky re-run and reflect change in the browser. -->

<!-- jsx is not  means writing html in javascript, it is html or xml- like syntax -->

<!-- BABEL- is a transpiler or compiler that converts jsx into browser or js engine understandable code. -->

<!-- component composition :- component inside another component is called component composition. -->

<!-- config driven ui -->

# React Hooks :-
normal js utility function
- useState()
- useEffect()
- whenever a state variable update/changes react re-render the components:-

-reconciliation algorithm(react fiber)
- sepration of concern
-monolith architecture
-optional chaining
-shimmer ui
- useState  is used for creating local state variable inside your functional component.
- if no dependency array in useEffect => useEffect will be called on every render.
 - if dependency array is empty [] => useEffect is called on initial render(just once).
 - useEffect(() =>{}, []);
 - if dependency array is[btnName] => called every time when button clicked.(and it`s state changes).
 - never use useState[] inside if else and inside for loop and inside function(){}.
 - React Router dom package is used to create routing.
 - two types of Routing: -
 - 1. client side routing -(routing pages are pre coded in formm of components)
 - 2. server side routing (in server side routing pages are fetches using api/ network call like '/about', '/contact' e.t.c )
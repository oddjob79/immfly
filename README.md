# Pokemon Test Project for immfly by Robert Turner

Please see my test project listing the "First Pokemon Generation", as outlined in the project description below.

It took me just over a day to complete, include dockerizing the project. I have a lot of experience using Vue.js, but this was my first ever React project, so there was a little bit of a learning curve. I think though, that I have been able to demonstrate my ability to build a clean, solid app in a javascript framework, whilst also showing my ability to learn new skills and ideas and apply them quickly and efficiently. I would hope that this could count in my favour when assessing my potential for the available position.

Please let me know if I can provide anything else to support my application. I would be happy to share some of my other Vue.js projects with you, if you'd like to see.

Thank you for taking the time to review my work.

# Pokemon test

Hello. This is the Immfly frontend code test. You have to build a web application listing the **first pokemon generation**.

## Features to implement
### Build and style the main list
You have to implement the main list like in this image:
<img align="center" src="https://imgur.com/HNu1wmq.png" style="border: 1px solid black" />

Notice that:
*  The url is **/pokemon**.
*  When user hovers a pokemon, its background becomes gray.

### Pokemon detail page
Add the possibility to click on a pokemon and go to the detail page, like in this image:
<img align="center" src="https://imgur.com/1Mbh6mK.png" style="border: 1px solid black" />

Notice that the pokemon detail url is different. It is ``/pokemon/:name``. In the **charizard** example is ``/pokemon/charizard``.

### Images
The images url is ``https://img.pokemondb.net/sprites/black-white/anim/normal/{name}.gif``

For example:
* **Charizard** <img align="center" src="https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif"/>
* **Bulbasaur** <img align="center" src="https://img.pokemondb.net/sprites/black-white/anim/normal/bulbasaur.gif" />

### Api Endpoints
The api base url is ``https://pokeapi.co/api/v2``.
* **List**: ``/pokemon`` (maybe you have to add the limit parameter on the request to fetch the first generation in only one request).
* **Detail**: ``/pokemon/:name``.

For example:
* **Charizard**: ``https://pokeapi.co/api/v2/pokemon/charizard``
* **Bulbasaur**: ``https://pokeapi.co/api/v2/pokemon/bulbasaur``

## Demo
You can watch/download the video showing how the app finally should work: <a href="https://mega.nz/file/2JNVlIzb#kmmubCQEUQV0RgZ9dExTC64P_9eDNBPE8zgNNS-b0do" target="_blank">demo</a>.

## 🧐 We want to see 🧐
- React knowledge
- Project architecture
- Css skills
- ECMAScript6 skills
- Clean code

## ✅ You should ✅
- Use the **axios** package for http requests.
- **Prevent unknown urls** while redirecting to the list page.

## 🚫 You should not 🚫
- Use Typescript.
- Use bootstrap.

## 🌟 Bonus 🌟
- Add a filter to search pookemon by name
- Don't use the **create-react-app** npm package to create the project.
- Use **hooks**.
- Add **tests**.
- Show a **loading indicator** while an api request is in progress.
- Use a **linter**.
- Custom **webpack** implementation.
- **Dockerize**

After test completion, use a github repository to share the test with **sonofjavascript**.

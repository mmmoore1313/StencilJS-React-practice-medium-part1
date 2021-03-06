# StencilJS-React-practice-medium
>
> <details>
>  <summary><b>CONTENTS</b></summary>
>
>> | [About](https://github.com/mmmoore1313/StencilJS-React-practice-medium#about) | [Technologies Used](https://github.com/mmmoore1313/StencilJS-React-practice-medium#technologies-used) |
>> |--|--|
>> | [Steps](https://github.com/mmmoore1313/StencilJS-React-practice-medium#steps) | [Links](https://github.com/mmmoore1313/StencilJS-React-practice-medium#links) |
> </details>
>
> ## About
>> <details>
>>  <summary>This is built following the stencil.js tutorial found at <a href="https://medium.com/stencil-tricks/creating-reusable-a-reusable-web-component-with-stenciljs-b2842af54c51">Creating a Reusable Web Component with StencilJS</a></summary>
>> 
>>> This repo is used as a scrap repo to test all major infrastucural changes that will be made to SPEC-ods.
>> ###### [Return to top](https://github.com/mmmoore1313/StencilJS-React-practice-medium)
>> </details>
> ## Steps
>> <details>
>>  <summary>Steps taken</summary>
>>
>>> <details>
>>>  <summary>1. Create a project directory</summary>
>>>
>>>> 1.1- `mkdir <projectname>`  
>>>> 1.2- `cd <projectname>`
>>> </details>
>>> <details>
>>>  <summary>2. Initialize the stencil</summary>
>>>
>>>> 2.1- Run `npm init stencil`  
>>>> 2.2- Choose the `component` option  
>>>> 2.3- Name your project  
>>>> 2.4- Run `npm install`
>>> </details>
>>> <details>
>>>  <summary>3. Create a component.</summary>
>>>
>>>> <details>
>>>>  <summary>3.1- Create <code>component</code> directory</summary>
>>>>
>>>>> ``` 
>>>>> mkdir src/components/my-accordion
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.2- Create and fill out file <code>component.tsx</code></summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.2.1- Create <code>component.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-accordion/my-accordion.tsx
>>>>>> ``` 
>>>>> </details>  
>>>>> <details>
>>>>>  <summary>3.2.2- <code>my-accordion.tsx</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> import { Component, State, EventEmitter, Event, Prop, h } from '@stencil/core';
>>>>>> 
>>>>>> @Component({
>>>>>>   tag: 'my-accordion',
>>>>>>   styleUrl: 'my-accordion.scss',
>>>>>>   shadow: true
>>>>>> })
>>>>>> 
>>>>>> export class MyComponent {
>>>>>> 
>>>>>>   @State() toggle: boolean = false;
>>>>>> 
>>>>>>   @Event() onToggle: EventEmitter;
>>>>>> 
>>>>>>   @Prop() label: string;
>>>>>> 
>>>>>>   @Prop() description: string;
>>>>>> 
>>>>>>   @Prop() width: string;
>>>>>> 
>>>>>>   @Prop() color: string;
>>>>>> 
>>>>>>   toggleComponent() {
>>>>>>     this.toggle = !this.toggle;
>>>>>>     this.onToggle.emit({ visible: this.toggle });
>>>>>>   }
>>>>>> 
>>>>>>   render() {
>>>>>> 
>>>>>>     return (
>>>>>>       <div>
>>>>>>       <button class="accordion"
>>>>>>       style={{
>>>>>>         width: this.width,
>>>>>>         backgroundColor: this.color,
>>>>>>       }}
>>>>>>       onClick={() => this.toggleComponent()}>
>>>>>>       {this.label}
>>>>>>       {this.toggle ? <span>&#9650;</span> : <span>&#9660;</span>}
>>>>>>       </button>
>>>>>>       <div class={`content-box ${this.toggle ? 'open' : 'close'}`}
>>>>>>       style={{width: this.width}}>
>>>>>>       <p>{this.description}</p>
>>>>>>       </div>
>>>>>>       </div>
>>>>>>     )
>>>>>>   }
>>>>>> }
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>>> <details>
>>>>  <summary>3.3- Create a <code>component.scss</code> file</summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.3.1- Create <code>component.scss</code></summary>
>>>>>
>>>>>> ``` 
>>>>>> touch src/components/my-accordion/my-accordion.scss
>>>>>> ``` 
>>>>> </details> 
>>>>> <details>
>>>>>  <summary>3.3.2- Fill out <code>component.scss</code> file</summary>
>>>>>
>>>>>> ``` 
>>>>>> * {
>>>>>>     font-family: 'Lato', sans-serif;
>>>>>> }
>>>>>> 
>>>>>> .container {
>>>>>>     display: flex;
>>>>>>     flex-direction: column;
>>>>>>     justify-content: center;
>>>>>>     align-items: center
>>>>>> }
>>>>>> 
>>>>>> .accordion {
>>>>>>     cursor: pointer;
>>>>>>     padding: 18px;
>>>>>>     text-align: left;
>>>>>>     border-radius: 20px;
>>>>>>     font-size: 1.2rem;
>>>>>>     font-weight: bold;
>>>>>>     outline: 0;
>>>>>>     span {
>>>>>>         float: right;
>>>>>>     }
>>>>>> }
>>>>>>  
>>>>>>  .open {
>>>>>>     display: block;
>>>>>>     height: auto;
>>>>>>     border-radius: 20px;
>>>>>>     border: 0.5px solid rgb(199, 197, 197);
>>>>>>     width: 200px;
>>>>>>  }
>>>>>> 
>>>>>>  p {
>>>>>>     padding: 18px;
>>>>>>  }
>>>>>> 
>>>>>>  .close {
>>>>>>     display: none;
>>>>>>  }
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>>> <details>
>>>>  <summary>3.4- Insert the <code>component</code> into the <code>body</code> <code>index.html</code></summary>
>>>>
>>>>> ``` 
>>>>> <body>
>>>>>   <my-accordion width='100%' 
>>>>>                 label='Bacon Ipsum'
>>>>>                 color='pink'
>>>>>                 description="Bacon ipsum dolor amet pork chop sausage turkey spare ribs ham hock cupim pork loin capicola bacon ham filet mignon prosciutto boudin turducken. Shank corned beef burgdoggen jowl ribeye. Ham pork pastrami rump meatball buffalo venison andouille picanha fatback pork loin. Venison doner porchetta, chicken leberkas fatback burgdoggen ham andouille landjaeger alcatra. Pork belly pork jerky prosciutto leberkas tail salami tongue frankfurter turducken short loin flank."></my-accordion>
>>>>>   <my-accordion width='100%'
>>>>>                 label='Cat Ipsum'
>>>>>                 color='aquamarine'
>>>>>                 description="Human give me attention meow i want to go outside let me go outside nevermind inside is better but cats are cute flex claws on the human's belly and purr like a lawnmower find something else more interesting, yet lick sellotape lick butt and make a weird face. The cat was chasing the mouse lick the plastic bag for furrier and even more furrier hairball but scratch at door to be let outside, get let out then scratch at door immmediately after to be let back in. "></my-accordion>
>>>>>   <my-accordion width='100%'
>>>>>                 color='#eee'
>>>>>                 description="I feel empty."></my-accordion>
>>>>> </body>
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.5- Run <code>npm start</code></summary>
>>>>
>>>>> ``` 
>>>>> npm start
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>3.6- Publish your package</summary>
>>>>
>>>>> <details>
>>>>>  <summary>3.6.1- Build your component</summary>
>>>>>
>>>>>> ``` 
>>>>>> npm run build
>>>>>> ``` 
>>>>> </details>
>>>>> <details>
>>>>>  <summary>3.6.2- Publish your compnent</summary>
>>>>>
>>>>>> ``` 
>>>>>> npm publish
>>>>>> ``` 
>>>>> </details>
>>>> </details>
>>> </details>
>>> <details>
>>>  <summary>4. Build the React app</summary>
>>>
>>>> *The completion of this app can be found [here](https://github.com/mmmoore1313/StencilJS-React-practice-medium-part2)*  
>>>> <details>
>>>>  <summary>4.1- Create React App</summary>
>>>>
>>>>> ``` 
>>>>> npx create-react-app appname
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>4.2- Download dependencies</summary>
>>>>
>>>>> ``` 
>>>>> npm install
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>4.3- Install component package</summary>
>>>>
>>>>> ``` 
>>>>> npm install mediumtutorial --save
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>4.4- Paste <code>defineCustomElements</code> into the <code>index.js</code> file</summary>
>>>>
>>>>> ``` 
>>>>> import React from 'react';
>>>>> import ReactDOM from 'react-dom';
>>>>> import './index.css';
>>>>> import App from './App';
>>>>> import registerServiceWorker from './registerServiceWorker';
>>>>> 
>>>>> import { applyPolyfills, defineCustomElements } from 'spec-/loader';
>>>>> // ^^^!!!This part is the magic import!!!^^^
>>>>> 
>>>>> ReactDOM.render(<App />, document.getElementById('root'));
>>>>> registerServiceWorker();
>>>>> 
>>>>> applyPolyfills().then(() => {
>>>>>   defineCustomElements(window);
>>>>> });
>>>>> // ^^^!!!This part is the magic export!!!^^^
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>4.5- Import component into <code>App.js</code></summary>
>>>>
>>>>> ``` 
>>>>> import React from 'react';
>>>>> import './App.css';
>>>>> import 'mediumtutorial';
>>>>> 
>>>>> 
>>>>> function App() {
>>>>> 
>>>>>   const array = [
>>>>>     {
>>>>>       label: 'Accordion 1',
>>>>>       description: 'Lorem ipsum',
>>>>>       color: '#439ECA',
>>>>>       width: '300px'
>>>>>     },
>>>>>     {
>>>>>       label: 'Accordion 2',
>>>>>       description: 'Lorem ipsum',
>>>>>       color: '#7EC74A',
>>>>>       width: '300px'
>>>>>     },
>>>>>     {
>>>>>       label: 'Accordion 3',
>>>>>       description: 'Lorem ipsum',
>>>>>       color: '#F8CD41',
>>>>>       width: '300px'
>>>>>     }
>>>>>   ]
>>>>>   return (
>>>>>     <div className="App">
>>>>>       {
>>>>>         array.map((array) => {
>>>>>           return (
>>>>>             <my-accordion 
>>>>>             label={array.label}
>>>>>             description={array.description}
>>>>>             color={array.color}
>>>>>             width={array.width}>
>>>>>             </my-accordion>
>>>>>           )})
>>>>>       }
>>>>>     </div>
>>>>>   );
>>>>> }
>>>>> 
>>>>> export default App;
>>>>> ``` 
>>>> </details>
>>>> <details>
>>>>  <summary>Run the app</summary>
>>>>
>>>>> `npm start`
>>>> </details>
>>> </details>
>> 
>> </details>
>
> ## Technologies Used
>> <details>
>>  <summary>More later</summary>
>>
>>>
>> ###### [Return to top](https://github.com/mmmoore1313/StencilJS-React-practice-medium)
>> </details>
>
> ## Links
>> <details>
>>  <summary>More later</summary>
>>
>>> 
>> ###### [Return to top](https://github.com/mmmoore1313/StencilJS-React-practice-medium)
>> </details>
import { useState } from 'react'
import ReactMarkdown from 'react-markdown';
import './App.css'

marked.setOptions ({
  renderer: new marked.Renderer(),
  breaks: true
});

function App() 
{
  const src = `
  # Hello, this is Prasanna V B
  ## React is fun!
  \`#include<iostream>\`
  \`\`\`
  int main() {
    int x;
    printf("Enter x:");
    scanf("%d",&x);
    if (x%2 == 0) {
      printf("EVEN!");
    } else {
      printf("ODD!");
    }
    return 0;
  }
  \`\`\`
  **Stuff to learn next**
  - NodeJS
  - ExpressJS
  - MongoDB
  [Good platform to develop skills](https://www.freecodecamp.org/)
  > My Favourite Logo
  ![My Favourite Logo](https://www.nicepng.com/png/detail/31-315310_react-hexagon-react-js-transparent-background.png)

`;
  
  
  const [content, setcontent] = useState(src);
  return (
    <div className="App">
      <h1>Mark Down Previewer</h1>
      <div id='main'>
        <textarea id='editor' onChange={(evt) => { setcontent(evt.target.value) }}>{content}</textarea>
        <div id='preview' dangerouslySetInnerHTML={{
          __html: marked(content),
        }}>   
        </div>
      </div>
    </div>
  );
}

export default App

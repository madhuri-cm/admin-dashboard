import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import FrontEnd from './FrontEnd'
import NodeJs from './NodeJs'
import MeanStack from './MeanStack'
import FullStack from './FullStack'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Link to="/frontend"> Front-End Development </Link> - 
        <Link to="./nodejs">Node.js Developer</Link> - 
        <Link to="./meanstack">Mean Stack Developer</Link> - 
        <Link to="./fullstack">Full Stack Developer</Link>



        <Route path="/nodejs" component={NodeJs} />
        <Route path='/frontend' component={FrontEnd} />
        <Route path='/meanstack' component={MeanStack} />
        <Route path='/fullstack' component={FullStack} />



      </div>
      </BrowserRouter>
    )
  }
}
export default App;

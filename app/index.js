import React from 'react';
import ReactDOM from 'react-dom';
import {Scene,Layer} from '../src/react-parallax';
import img1 from './images/layer1.png';
import img2 from './images/layer2.png';
import img3 from './images/layer3.png';
import img4 from './images/layer4.png';
import img5 from './images/layer5.png';
import img6 from './images/layer5.png';


class App extends React.Component {
  constructor(props) {
  	super(props);
  }

  //componentDidMount() {}

  render() {
  	return (
  	<Scene xinvertX={true} >
  		<Layer  dataDepth="0.00" src={img1}/>
  		<Layer  dataDepth="0.20" src={img2}/>
  		<Layer  dataDepth="0.40" src={img3}/>
  		<Layer  dataDepth="0.60" src={img4}/>
  		<Layer  dataDepth="0.80" src={img5}/>
  		<Layer  dataDepth="1.00" src={img6}/>
  	</Scene>
  	
  	)
  }
}


ReactDOM.render(
    <App/>,
    document.getElementById('container')
);

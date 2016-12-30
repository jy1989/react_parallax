import React from 'react';
import Parallax from './parallax';
class Layer extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props);
    }
    render() {
        return (
            <li className="layer" data-depth={this.props.dataDepth}><img src={this.props.src}/></li>
        )
    }
}



class Scene extends React.Component {
    constructor(props) {
        super(props);
        //console.log(this.props.children);
        this.defaults = {
            relativeInput: false,
            clipRelativeInput: false,
            calibrateX: false,
            calibrateY: true,
            invertX: true,
            invertY: true,
            limitX: false,
            limitY: false,
            scalarX: 10.0,
            scalarY: 10.0,
            frictionX: 0.1,
            frictionY: 0.1,
            originX: 0.5,
            originY: 0.5
        };

    }
	getBehaviour(behaviourName){
		if(typeof this.props[behaviourName] == "undefined"){
			return this.defaults[behaviourName];
		}
		return this.props[behaviourName];
	}
	
    componentDidMount() {
    	let behaviours={
            relativeInput: this.getBehaviour('relativeInput'),
            clipRelativeInput: this.getBehaviour('clipRelativeInput'),
            calibrateX: this.getBehaviour('calibrateX'),
            calibrateY: this.getBehaviour('calibrateY'),
            invertX: this.getBehaviour('invertX'),
            invertY: this.getBehaviour('invertY'),
            limitX: this.getBehaviour('limitX'),
            limitY: this.getBehaviour('limitY'),
            scalarX: this.getBehaviour('scalarX'),
            scalarY: this.getBehaviour('scalarY'),
            frictionX: this.getBehaviour('frictionX'),
            frictionY: this.getBehaviour('frictionY'),
            originX: this.getBehaviour('originX'),
            originY: this.getBehaviour('originY'),
        }
        //console.log(behaviours);
        let scene = this.refs.scene;
        let parallax = new Parallax(scene,behaviours);
    }

    render() {
        return (
            <ul id="scene" className="scene" ref="scene">
  			{
        		this.props.children
      		}
			</ul>

        )
    }
}

export {
    Scene,
    Layer
};
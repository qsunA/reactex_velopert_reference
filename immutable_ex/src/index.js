import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Map, List} from 'immutable'

const obj = Map({
    foo:1,
    inner : Map({
        bar:10
    })
});

console.log(obj.toJS()); 
/*
    foo:1,
    inner : Map({
        bar:10
    })
*/

const arr = List([
    Map({foo:1}),
    Map({bar:2})
]);

console.log(arr.toJS());
// foo:1/ bar:2

let nextObj = obj.set('foo',5);
console.log(nextObj.toJS());
/*
    foo:5,
    inner : Map({
        bar:10
    })
*/
console.log(nextObj !== obj); //true

console.log(obj.get('foo')); //1
console.log(arr.get(0)); //Map

nextObj = nextObj.update('foo',value => value+1);
console.log(nextObj.toJS());
/*
    foo:6,
    inner : Map({
        bar:10
    })
*/

nextObj = obj.setIn(['inner','bar'],20);
console.log(nextObj.getIn([0,'foo']));  //undefined

let nextArr = arr.setIn([0,'foo'],10);
console.log(nextArr.getIn([0,'foo'])); //10

nextArr= arr.push(Map({qaz:3}));
console.log(nextArr.toJS()); //3개 array foo:1/bar:2/qaz:3 
nextArr = arr.filter(item => item.get('foo')===1);
console.log(nextArr.toJS());

nextObj = nextObj.delete('foo');
console.log(nextObj.toJS()); //foo:1

nextArr = nextArr.delete(0);
console.log(nextArr.toJS()); // {inner : {bar:20}}}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

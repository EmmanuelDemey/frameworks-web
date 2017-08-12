import {html} from 'snabbdom-jsx';
import xs from 'xstream'

function getDom(formula){
  return (
<div>
             
        <div id="result">{formula}</div>
             
         <div id="main">
             <div id="first-rows">
              <button value="del" className="del-bg" id="delete">Del</button>
                 <button value="%" className="btn-style operator opera-bg fall-back">%</button>
                 <button value="+" className="btn-style opera-bg value align operator">+</button>
                 </div>
                 
               <div className="rows">
             <button className="7" className="btn-style num-bg num first-child">7</button>
                 <button value="8" className="btn-style num-bg num">8</button>
                 <button value="9" className="btn-style num-bg num">9</button>
                 <button value="-" className="btn-style opera-bg operator">-</button>
                 </div>
                 
                 <div className="rows">
                 <button value="4" className="btn-style num-bg num first-child">4</button>
                 <button value="5" className="btn-style num-bg num">5</button>
                 <button value="6" className="btn-style num-bg num">6</button>
                 <button value="*" className="btn-style opera-bg operator">x</button>
                 </div>
                 
                 <div className="rows">
                 <button value="1" className="btn-style num-bg num first-child">1</button>
                 <button value="2" className="btn-style num-bg num">2</button>
                 <button value="3" className="btn-style num-bg num">3</button>
                 <button value="/" className="btn-style opera-bg operator">/</button>
                 </div>
                 
                 <div className="rows">
                 <button value="0" className="num-bg zero" id="delete">0</button>
                 <button value="." className="btn-style num-bg period fall-back">.</button>
                 <button value="=" id="eqn-bg" className="eqn align">=</button>
                 </div>
                
             </div>
         
         </div>
          )
}

export function App (sources) {

  const vtree$ = sources.DOM.select('button').events('click')
      .map(ev => ev.target.value)
      .fold((acc, value) => {
        if(value === 'del') return '';
        if(isNaN(value) && value !== '='){
          return eval(acc) + value;
        }
        if(isNaN(value) && value === '='){
          return eval(acc);
        }
        return acc + value
      }, '')
      .startWith('')
      .map(formula => {
        console.log(formula)
        return getDom(formula)
      })

  const sinks = {
    DOM: vtree$
  }
  return sinks
}

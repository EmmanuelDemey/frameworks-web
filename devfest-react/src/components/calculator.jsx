import React, {Component} from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formula: '',
    }
  }

  clickDelete() {
    this.setState({ formula: ''})
    this.props.updateFormula(this.state.formula);
  }

  clickSign(e) {
    const previousResult = eval(this.state.formula);
    const sign = e.target.value;
    const result = sign !== "=" ? previousResult + e.target.value : previousResult;
    this.setState({ formula: result });
    this.props.updateFormula(result);
  }

  clickNumber(e) {
    const result = this.state.formula + e.target.value;
    this.setState({ formula: result})  
    this.props.updateFormula(result);
  }
  render() {
    return (
        <div id="main">
            <div id="first-rows">
            <button onClick={e => this.clickDelete(e)} className="del-bg" id="delete">
                Del
            </button>
            <button
                value="%"
                onClick={e => this.clickSign(e)}
                className="btn-style operator opera-bg fall-back"
            >
                %
            </button>
            <button
                value="+"
                onClick={e => this.clickSign(e)}
                className="btn-style opera-bg value align operator"
            >
                +
            </button>
            </div>

            <div className="rows">
            <button
                value="7"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num first-child"
            >
                7
            </button>
            <button
                value="8"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                8
            </button>
            <button
                value="9"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                9
            </button>
            <button
                value="-"
                onClick={e => this.clickSign(e)}
                className="btn-style opera-bg operator"
            >
                -
            </button>
            </div>

            <div className="rows">
            <button
                value="4"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num first-child"
            >
                4
            </button>
            <button
                value="5"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                5
            </button>
            <button
                value="6"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                6
            </button>
            <button
                value="*"
                onClick={e => this.clickSign(e)}
                className="btn-style opera-bg operator"
            >
                x
            </button>
            </div>

            <div className="rows">
            <button
                value="1"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num first-child"
            >
                1
            </button>
            <button
                value="2"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                2
            </button>
            <button
                value="3"
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg num"
            >
                3
            </button>
            <button
                value="/"
                onClick={e => this.clickSign(e)}
                className="btn-style opera-bg operator"
            >
                /
            </button>
            </div>

            <div className="rows">
            <button
                value="0"
                onClick={e => this.clickNumber(e)}
                className="num-bg zero"
                id="delete"
            >
                0
            </button>
            <button
                value="."
                onClick={e => this.clickNumber(e)}
                className="btn-style num-bg period fall-back"
            >
                .
            </button>
            <button
                value="="
                onClick={e => this.clickSign(e)}
                id="eqn-bg"
                className="eqn align"
            >
                =
            </button>
            </div>
        </div>
    );
  }
}

export default Calculator;

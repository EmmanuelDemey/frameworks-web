import Component from "inferno-component";
import { linkEvent } from "inferno";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
        formula: '',
    }
  }

  clickDelete(instance) {
    instance.setState({ formula: ''})
    instance.props.updateFormula(this.state.formula);
  }

  clickSign(instance, e) {
    const previousResult = eval(instance.state.formula);
    const sign = e.target.value;
    const result = sign !== "=" ? previousResult + e.target.value : previousResult;
    instance.setState({ formula: result });
    instance.props.updateFormula(result);
  }

  clickNumber(instance, e) {
    const result = instance.state.formula + e.target.value;
    instance.setState({ formula: result})  
    instance.props.updateFormula(result);
  }
  render() {
    return (
      <div id="main">
        <div id="first-rows">
          <button onClick={ linkEvent(this, this.clickDelete) } class="del-bg" id="delete">
            Del
          </button>
          <button
            value="%"
            onClick={linkEvent(this, this.clickSign)}
            class="btn-style operator opera-bg fall-back"
          >
            %
          </button>
          <button
            value="+"
            onClick={linkEvent(this, this.clickSign)}
            class="btn-style opera-bg value align operator"
          >
            +
          </button>
        </div>

        <div class="rows">
          <button
            value="7"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num first-child"
          >
            7
          </button>
          <button
            value="8"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num"
          >
            8
          </button>
          <button
            value="9"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num"
          >
            9
          </button>
          <button
            value="-"
            onClick={linkEvent(this, this.clickSign)}
            class="btn-style opera-bg operator"
          >
            -
          </button>
        </div>

        <div class="rows">
          <button
            value="4"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num first-child"
          >
            4
          </button>
          <button
            value="5"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num"
          >
            5
          </button>
          <button
            value="6"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num"
          >
            6
          </button>
          <button
            value="*"
            onClick={linkEvent(this, this.clickSign)}
            class="btn-style opera-bg operator"
          >
            x
          </button>
        </div>

        <div class="rows">
          <button
            value="1"
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg num first-child"
          >
            1
          </button>
          <button
            value="2"
            onClick={linkEvent(this,this.clickNumber)}
            class="btn-style num-bg num"
          >
            2
          </button>
          <button
            value="3"
            onClick={linkEvent(this,this.clickNumber)}
            class="btn-style num-bg num"
          >
            3
          </button>
          <button
            value="/"
            onClick={linkEvent(this, this.clickSign)}
            class="btn-style opera-bg operator"
          >
            /
          </button>
        </div>

        <div class="rows">
          <button
            value="0"
            onClick={linkEvent(this, this.clickNumber)}
            class="num-bg zero"
            id="delete"
          >
            0
          </button>
          <button
            value="."
            onClick={linkEvent(this, this.clickNumber)}
            class="btn-style num-bg period fall-back"
          >
            .
          </button>
          <button
            value="="
            onClick={linkEvent(this, this.clickSign)}
            id="eqn-bg"
            class="eqn align"
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;

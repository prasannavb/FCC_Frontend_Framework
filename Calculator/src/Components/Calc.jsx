import react from 'react';
import '../Styles/Calc.css';

export default class Calc extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            exp: "0",
            point: 1,
            numLength: 0,
            sym_max: false,
            res: false
        }
    }

    updateValue = (evt) => {
        if (evt.target.value === '.') {
            if (this.state.numLength === 0)
                this.setState({ exp: this.state.exp + evt.target.value })
            else if (this.state.point === 1)
                this.setState({ exp: this.state.exp + evt.target.value });
            else
                return;
            this.setState({ point: 0, numLength: this.state.numLength + 1 })
        }
        else if (evt.target.className === 'operator') {
            if (this.state.sym_max == true) {
                this.setState({ exp: this.state.exp.slice(0, (this.state.exp.length) - 2) + evt.target.value, point: 1, numLength: 0, sym_max: false });
            }
            else {
                if (evt.target.value === '*' || evt.target.value === '/') {
                    if (this.state.exp.endsWith('+') || this.state.exp.endsWith('-') || this.state.exp.endsWith('*') || this.state.exp.endsWith('/'))
                        this.setState({ exp: this.state.exp.slice(0, (this.state.exp.length) - 1) + evt.target.value, point: 1, numLength: 0 });
                    else
                        this.setState({ exp: this.state.exp + evt.target.value, point: 1, numLength: 0 });
                }
                else { // For '+' '-'
                    if ((this.state.exp.endsWith('+') || this.state.exp.endsWith('*') || this.state.exp.endsWith('/')) && (evt.target.value === '-'))
                        this.setState({ exp: this.state.exp + evt.target.value, point: 1, numLength: 0, sym_max: true });
                    else if (this.state.exp[(this.state.exp.length) - 1] >= '0' && this.state.exp[(this.state.exp.length) - 1] <= '9')
                        this.setState({ exp: this.state.exp + evt.target.value, point: 1, numLength: 0 });
                    else
                        this.setState({ exp: this.state.exp.slice(0, (this.state.exp.length) - 1) + evt.target.value, point: 1, numLength: 0 });
                }
                this.setState({ res: false });
                //this.setState({exp:this.state.exp+evt.target.value,point:1,numLength:0});
            }
        }
        else {
            if (this.state.res === false) {
                if (evt.target.value === '0' && this.state.exp === "0") {
                    return;
                }
                if (this.state.exp === "0")
                    this.setState({ exp: evt.target.value, numLength: this.state.numLength + 1 });
                else
                    this.setState({ exp: this.state.exp + evt.target.value, numLength: this.state.numLength + 1 });
            }
            else {
                this.setState({ exp: evt.target.value, res: false });
            }
        }
    }

    clear = () => {
        this.setState({
            exp: "0",
            point: 1,
            numLength: 0,
            sym_max: false,
            res: false
        })
    }

    backspace = () => {
        const str = this.state.exp;
        if (str[(str.length) - 1] === ".")
            this.setState({ point: 1 });
        this.setState({ exp: this.state.exp.slice(0, (str.length) - 1) })
    }

    calculate = () => {
        let expression = this.state.exp;
        if (expression.endsWith('+') || expression.endsWith('-') || expression.endsWith('*') || expression.endsWith('/'))
            alert("Enter the last number");
        else {
            if (expression.endsWith("."))
                expression += '0';
            const val = String(eval(expression));
            const pt = val.includes('.') ? 0 : 1;
            this.setState({ exp: val, point: pt, res: true });
        }

    }
    render() {
        return (
            <div className="container">
                <div className='table'>
                    <input type="text" id='display' value={this.state.exp} />
                    <button id='clear' onClick={this.clear}>C</button>
                    <button id='divide' className='operator' value='/' onClick={this.updateValue}>/</button>
                    <button id='multiply' className='operator' value='*' onClick={this.updateValue}>x</button>
                    <button onClick={this.backspace}>
                        <span class="material-symbols-outlined">
                            backspace
                        </span>
                    </button>
                    <button id='seven' value='7' onClick={this.updateValue}>7</button>
                    <button id='eight' value='8' onClick={this.updateValue}>8</button>
                    <button id='nine' value='9' onClick={this.updateValue}>9</button>
                    <button id='subtract' className='operator' value='-' onClick={this.updateValue}>-</button>
                    <button id='four' value='4' onClick={this.updateValue}>4</button>
                    <button id='five' value='5' onClick={this.updateValue}>5</button>
                    <button id='six' value='6' onClick={this.updateValue}>6</button>
                    <button id='add' className='operator' value='+' onClick={this.updateValue}>+</button>
                    <button id='one' value='1' onClick={this.updateValue}>1</button>
                    <button id='two' value='2' onClick={this.updateValue}>2</button>
                    <button id='three' value='3' onClick={this.updateValue}>3</button>
                    <button id='equals' onClick={this.calculate}>=</button>
                    <button id='zero' value='0' onClick={this.updateValue}>0</button>
                    <button id='decimal' value='.' onClick={this.updateValue}>.</button>
                </div>
            </div>
        );
    }
};


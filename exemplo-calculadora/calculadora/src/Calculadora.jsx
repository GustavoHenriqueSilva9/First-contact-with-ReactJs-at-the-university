//importação das bibliotecas

import React, {Component} from 'react'
//cria uma classe do tipo componente que pode ser utilizada externamente
export default class Calculadora extends Component{
    constructor(){
        super() // chama o construtor da classe components
        this.state = {
            // inicialização das variáveis
            // como as variáveis podem ser alteradas, elas precisam estar dentro do state
            operando1: 1,
            operando2: 1,
            operador: '+',
            resultado: 1
        }
    }
    // Função que altera o valor de oper1
    setOperando1(e){
        this.setState({
            operando1: Number(e.target.value) // target é o destino, quem sofreu a ação // valor do elemento que sofreu a ação
        })
    }
    // Função que altera o valor de oper2
    setOperando2(e){
        this.setState({
            operando2: Number(e.target.value) // valor do do elemento HTML relacionado ao oper1 que sofreu a ação
        })
    }
    // Função que altera o valor do operando
    setOperador(e){
        this.setState({
            operador: e.target.value // valor do elemento HTML relacionado ao operando que sofreu a ação
        })
    }
    //Função que faz a operação 
    opera() {
        switch(this.state.operador){
            case '+': this.setState({ resultado: this.state.operando1 + this.state.operando2 })
                break
            case '-': this.setState({ resultado: this.state.operando1 - this.state.operando2 })
                break
            case '*': this.setState({ resultado: this.state.operando1 * this.state.operando2 })
                break
            case '/': if (this.state.operando2 !== 0){
                this.setState({ resultado: this.state.operando1 / this.state.operando2 })  
            }else{
                this.setState({ resultado: "Impossivel divisão por 0" })  
            }
            break
            default: break // caso contrario
        }
    }
    //Função que mostra ao usuario - renderiza
    render(){
        return(
            <div>
                <h1>Projeto Calculadora</h1>
                <h2>
                    Operando 1: <input type="number" value={this.state.operando1} onChange={ e => this.setOperando1(e)}/>
                    Operando 2: <input type="number" value={this.state.operando2} onChange={ e => this.setOperando2(e)}/>
                    {/*onChange Quando usuario digita na caixa de texto o estado da variavel é alterado */}
                    Operandor : 
                        <select onChange={ e => this.setOperador(e)}>
                            <option value="+"> + </option>
                            <option value="-"> - </option>
                            <option value="*"> * </option>
                            <option value="/"> / </option>
                        </select>
                </h2>

                <h2>
                    <button type="button" onClick={ e => this.opera()}> Calcular</button>
                </h2>

                <h2>
                    Masculino <input type="radio" name="sexo"/>
                    Feminino <input type="radio" name="sexo"/>
                </h2>

                <h2>
                    Resultado: {this.state.resultado}
                </h2>
            </div>
        )
    }

}
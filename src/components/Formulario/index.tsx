import React from 'react';
import { ITarefa } from '../../types/tarefa';
import Botao from '../Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
 }> {
  state = {
    tarefa: '',
    tempo: '00:00',
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state}]);
    console.log('state:', this.state);
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa"> Adicioanar tarefa:
            <input
              type="text"
              name="tarefa"
              id="tarefa"
              value={this.state.tarefa}
              onChange={evento => this.setState({...this.state, tarefa: evento.target.value})}
              placeholder="O que você quer estudar?"
              required
            />
          </label>
        </div>

        <div className={style.inputContainer}>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">
          Adiciona
        </ Botao>
      </form>
    )
  }
}

export default Formulario;
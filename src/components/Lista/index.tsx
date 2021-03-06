import React from 'react';
import style from './Lista.module.scss';
import Item from './Item';

function Lista() {
  const tarefas = [
    {
      tarefa: 'React',
      tempo: '01:00:00',
    },
    {
      tarefa: 'Webpack',
      tempo: '00:30:00',
    },
  ]

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            {...item}
            key={index} />
        ))}
      </ul>
    </aside>
  )
}

export default Lista;
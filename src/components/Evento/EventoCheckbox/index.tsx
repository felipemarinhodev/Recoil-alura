import { IEvento } from '../../../interfaces/IEvento';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEventos';

const EventoCheckbox: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {
  const alterarEvento = useAtualizarEvento();

  const alterarStatus = () => {
    const eventoAlterado = { ...evento, completo: !evento.completo };
    alterarEvento(eventoAlterado);
  };

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square',
  ];

  return <i className={estilos.join(' ')} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;

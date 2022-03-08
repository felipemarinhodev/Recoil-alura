import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from './../selectores/index';

const useListaDeEventosFiltrados = () => {
  return useRecoilValue(eventosFiltradosState);
};

export default useListaDeEventosFiltrados;

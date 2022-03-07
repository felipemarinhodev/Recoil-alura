import { useRecoilValue } from 'recoil';
import { eventosFiltradosState } from './../selectores';
const useListaDeEventos = () => {

	return useRecoilValue(eventosFiltradosState);
}

export default useListaDeEventos;

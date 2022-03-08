import { eventosAsync } from './selectores/index';
import { IFiltroDeEventos } from './../interfaces/IFiltroDeEventos';
import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";

export const listaDeEventosState = atom<IEvento[]>({
  key: 'listaDeEventosState',
  default: eventosAsync
})

export const filtroDeEventos = atom<IFiltroDeEventos>({
  key: 'filtroDeEventos',
  default: {}
})

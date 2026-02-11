'use strict'
/********************************************************************************************
* Objetivo: Arquivo criado para interação com API lionSchool, API está que foi criada pelo 
professor Leonid em aula para revisão do conteudo do semestre anterios.
* Autor: Kauan Lopes Pereira
* Data: 11/02/2026
* Versão: 1.0
********************************************************************************************/

/* Comentário em bloco */
// Comentário em linha

/********************************************************************************************
********************************* COMANDOS UTILIZADOS ***************************************
* async - Deixar uma função assincrona, utilizada para funcoes que buscam informações de 
servidores, o servidor pode demorar para responder e a função esperaria a resposta.
* await - Indica os break points onde deveram esperar mais tempo para a resposta chegar na 
variavel
******************************** BIBLIOTECAS UTILIZADAS *************************************

********************************************************************************************/

import { buscarTodosCursos } from './services/cursosService.js';

const cursos = await buscarTodosCursos();
console.log(cursos);
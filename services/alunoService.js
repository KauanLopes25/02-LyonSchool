'use strict'
/********************************************************************************************
* Objetivo: Arquivo de servico para busca de dados da API lion-school, serviço de alunos.
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
// endereço para busca de todos os alunos
const API_URL_ALUNOS = "https://lion-school-phbo.onrender.com/alunos"

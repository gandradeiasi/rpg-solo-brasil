const btn_enviar = document.querySelector('#btn-enviar');
const btn_rolar = document.querySelector('#btn-rolar');
const btn_vantagem = document.querySelector('#btn-vantagem');
const btn_desvantagem = document.querySelector('#btn-desvantagem');
const btn_sim_nao = document.querySelector('#btn-sim-nao');
const btn_inspiracoes= document.querySelector('#btn-inspiracoes');
const btn_missao= document.querySelector('#btn-missao');
const btn_baralho = document.querySelector('#btn-baralho');
const btn_personagem = document.querySelector('#btn-personagem');
const add_input = document.querySelector('#add-input');
const add_input_title = document.querySelector('#add-input-title');
const abre_anotacoes = document.querySelector('#abre-anotacoes');
const fecha_anotacoes = document.querySelector('#fecha-anotacoes');
const anotacoes = document.querySelector('#anotacoes');
const txtarea_command = document.querySelector('#txtarea-command');
const txtarea_log = document.querySelector('#txtarea-log');
const txtarea_notes = document.querySelector('#txtarea-notes');
const txtarea_copy = document.querySelector('#copy');
const hamburger = document.querySelector('#hamburger');
const mobile_menu = document.querySelector('#mobile-menu');
const dice_amount = document.querySelector('#dice-amount');
const dice_max = document.querySelector('#dice-max');
const dice_modifier = document.querySelector('#dice-modifier');
const copy_log = document.querySelector('#copy-log');
const notes_box = document.querySelector('#notes-box');
const modal = document.querySelector('#modal');
const fecha_modal = document.querySelector('#fecha-modal');

let lista_notas = [];
let pilha_comandos = [''];
let pilha_comandos_index = null;
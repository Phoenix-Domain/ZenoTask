const body = document.querySelector('body');

const task = document.querySelector('#task');

const addBtn = document.querySelector('#addBtn');

const list = document.querySelector('#list');

const listArr = JSON.parse(localStorage.getItem('listArray')) || [];


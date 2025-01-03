function excusa() {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let selectedWho = who[Math.floor(Math.random() * who.length)];
  let selectedAction = action[Math.floor(Math.random() * action.length)];
  let selectedWhat = what[Math.floor(Math.random() * what.length)];
  let selectedWhen = when[Math.floor(Math.random() * when.length)];

  return `${selectedWho} ${selectedAction} ${selectedWhat} ${selectedWhen}`;
}
window.onload = function() {
  const excusaGenerada = excusa();
  document.getElementById('excuse').innerHTML = excusaGenerada;
};
const users = [
    { id: 1, number: '6310977' },
    { id: 2, number: '6310966' },
    { id: 3, number: '6310988' },
    { id: 3, number: '1234567' },
    { id: 4, number: '5302781' },
    { id: 5, number: '6310922' },
    { id: 6, number: '6310933' },
    { id: 7, number: '6310944' },
    { id: 8, number: '6310955' },
    { id: 9, number: '6306682' },
    { id: 9, number: '6569321' },
    { id: 9, number: '6310398' },
    { id: 9, number: '1234567' },
    { id: 9, number: '5555555' },
    { id: 9, number: '0001122' },
  ];
  let random = Math.floor(Math.random() * users.length)
  runNumber(users[random].number)
  document.querySelector(".btn").addEventListener("click", () => {
    window.location.reload()
  });
  function runNumber(value) {
    odoo.default({
      el: ".js-odoo",
      from: "0000000",
      to: value,
      animationDelay: 1000,
    });
  }
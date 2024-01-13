$(function () {
  const messageFeedback = $('.message-feedback');
  const form = $('.form');
  const tbody = $('.tbody');

  const clientList = [{
    id: 1,
    nameClient: 'Tatico',
    numberWeight: 1234,
    billingDay: 10,
  }];

  form.submit(e => {
    e.preventDefault();
    const inputValue = form.serializeArray();
    const inputValidate = inputValue.find(input => !!input.value);

    if (!inputValidate) {
      return;
    }

    const formToArray = {
      id: clientList[clientList.length - 1].id + 1,
      nameClient: inputValue[0].value,
      numberWeight: inputValue[1].value,
      billingDay: inputValue[0].value,
    }

    clientList.push(formToArray)
    setClientTable();
  })

  const setClientTable = () => {
    const clientHtml = clientList.map(client => `
      <tr>
      <td>${client.id}</td>
      <td>${client.nameClient}</td>
      <td>${client.numberWeight}</td>
      <td>${client.billingDay}</td>
      </tr>
    `);
    tbody.html(clientHtml);
  }

  const setMessageFeedback = () => {
    if (clientList.length) {
      messageFeedback.hide();
    }
  }

  setMessageFeedback();
  setClientTable();
})
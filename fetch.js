console.log('fetch data');
var monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];
url ='https://mhjnqlztic.execute-api.ap-south-1.amazonaws.com/Prod/getVerifiedItems/';
fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((json) => {
      var element = document.getElementById('data');
    console.log(json.Items)
    for(let i=0; i< json.Items.length;i++)
    {
        element.innerHTML +=`<tr>
        <td>${json.Items[i].date}</td> 
        <td>${json.Items[i].What}</td>
        <td>${json.Items[i].Where}</td>
      <td>${json.Items[i].name}<br>${json.Items[i].email}<br>${json.Items[i].contact}</td>

    </tr>
        `
    }
  })
  .catch((error) => {
    console.error('There has been a problem with your fetch operation:', error);
  });

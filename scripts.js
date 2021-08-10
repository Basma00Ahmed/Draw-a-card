
const gitBtn = document.querySelector('#btn-get');
const gitOutput = document.querySelector('#div-img');

const get_api =() => {
   fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1', {
       
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response =>   response.json())
        .then(data => {
            gitOutput.innerHTML=null;
            console.log(data.cards[0]);
            var divCard=document.createElement('div');
            divCard.classNam ='card rounded mx-auto d-block';
            gitOutput.appendChild(divCard);

            var img=document.createElement('img');
            img.src=data.cards[0].image;
            divCard.appendChild(img);

            var divBody=document.createElement('div');
            divBody.className='card-body';
            divCard.appendChild(divBody);

            var title=document.createElement('p');
            title.className='card-title h3';
            title.innerText=data.cards[0].suit;
            divBody.appendChild(title);

            var value=document.createElement('p');
            value.className='card-text h5';
            value.innerText=data.cards[0].value;
            divBody.appendChild(value);
        })
        .catch(error => console.log('error', error))
}
gitBtn.addEventListener('click', get_api);
get_api();
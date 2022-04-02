function verificar(){
    const data = new Date();
    const ano = data.getFullYear();
    const fano = document.querySelector('#txtano');
    const res = document.querySelector('#res');

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        const fsex = document.getElementsByName('radsex');
        const idade = ano - Number(fano.value);
        let gênero = '';
        const img = document.createElement('img');
        img.setAttribute('id','foto');

        if (fsex[0].checked){
            gênero = 'Homem';
            if (idade >= 0 && idade < 5){
                //baby
                img.setAttribute('src','./assets/img/baby-h.png');
                res.innerHTML = `Detectamos um bebê <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 12){
                //criança
                img.setAttribute('src','./assets/img/criança-h.png');
                res.innerHTML = `Detectamos uma criança <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src','./assets/img/ado-h.png');
                res.innerHTML = `Detectamos um adolescente <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 35){
                //jovem
                img.setAttribute('src','./assets/img/jovem-h.png');
                res.innerHTML = `Detectamos um jovem <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','./assets/img/adulto-h.png');
                res.innerHTML = `Detectamos um adulto <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 120){
                //idoso
                img.setAttribute('src','./assets/img/idoso-h.png');
                res.innerHTML = `Detectamos um idoso <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade > 120){
                window.alert('[ERRO] Verifique os dados e tente novamente!');
            }

        }
        else if (fsex[1].checked){
            gênero = 'Mulher';
            if (idade >= 0 && idade < 5){
                //baby
                img.setAttribute('src','./assets/img/baby-m.png');
                res.innerHTML = `Detectamos uma bebê <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 12){
                //criança
                img.setAttribute('src','./assets/img/criança-m.png');
                res.innerHTML = `Detectamos uma criança <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade < 18){
                //adolescente
                img.setAttribute('src','./assets/img/ado-m.png');
                res.innerHTML = `Detectamos uma adolescente <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 35){
                //jovem
                img.setAttribute('src','./assets/img/jovem-m.png');
                res.innerHTML = `Detectamos uma jovem <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade < 60){
                //adulto
                img.setAttribute('src','./assets/img/adulto-m.png');
                res.innerHTML = `Detectamos uma adulta <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade <= 120){
                //idoso
                img.setAttribute('src','./assets/img/idoso-m.png');
                res.innerHTML = `Detectamos uma idosa <strong>${gênero}</strong> com ${idade} anos`;
            } else if (idade > 120){
                window.alert('[ERRO] Verifique os dados e tente novamente!');
            }
        }
        res.style.textAlign = 'center';
        res.appendChild(img);
    }
}



        var n = document.getElementById('num');
        let res = document.getElementById('res');

        let ano = 2024;
var idade;

        function clicar()
        {
          
            if(n.value<=0)
            {
                        alert('Por favor verifique os Dados e volte novamente!!')
                        n.focus();
            }


else
{  
        let r = Number(n.value);
    
    res.innerHTML ="Olá, você nasceu em <b>"+r+"</b> e tens <b>"+(ano-r)+"</b> anos de Idade 😉. ";

    
}


          
        }
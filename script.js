var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

    function validarVitoria(){

        let vencedor = document.querySelector('.vencedor');

        
        if(playerOpt == "papel"){

            if(inimigoOpt == "papel"){
            //empate
               vencedor.innerHTML= "o jogo foi empatado";
            }else if (inimigoOpt == "tesoura"){
            // inimigo ganhou
              vencedor.innerHTML = "inimigo ganhou";
            }else if(inimigoOpt == "pedra"){
                //player ganhou
                vencedor.innerHTML = "O player ganhou";

            }
        }

        if(playerOpt == "tesoura"){

        if(inimigoOpt == "papel"){
               vencedor.innerHTML= "o player ganhou";
            }else if (inimigoOpt == "tesoura"){
               vencedor.innerHTML = "o Jogo foi empatado";
            }else if(inimigoOpt == "pedra"){
                //player ganhou
               vencedor.innerHTML = "O inimigo ganhou";
            }

        }

        if(playerOpt == "pedra"){

            if(inimigoOpt == "papel"){
                   vencedor.innerHTML= "inimigo ganhou";
                }else if (inimigoOpt == "tesoura"){
                   vencedor.innerHTML = "o player ganhou";
                }else if(inimigoOpt == "pedra"){
                    //player ganhou
                   vencedor.innerHTML = "O jogo foi empatado";
                }
    
            }

    } 


    function resetInimigo(){

        const enemyOptions = document.querySelectorAll('.enemy-options div');
        for( var i = 0; i < enemyOptions.length; i++){
        

        enemyOptions[i].childNodes[0].style.opacity = 0.3;
        }
    }
    function inimigoJogar(){
        let rand = Math.floor(Math.random()*3);

        const enemyOptions = document.querySelectorAll('.enemy-options div');
        resetInimigo();
        for(var i = 0; i < enemyOptions.length; i++){
            if( i == rand){
                enemyOptions[i].childNodes[0].style.opacity = 1;
                inimigoOpt = enemyOptions[i].childNodes[0].getAttribute("opt");
            }
        }
         
        validarVitoria();

        //alert(playerOpt);
        //alert(inimigoOpt);



    }
    
         function resetOpacitypPlayer(){
             for(var i = 0 ; i < elementos.length; i++){
                elementos[i].style.opacity = 0.3;
             }
        }
            alert(playerOpt);
            alert(inimigoOpt);


    



for(var i = 0 ; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacitypPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute("opt")

        inimigoJogar(); 

      
    });
} 
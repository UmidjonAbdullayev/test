   window.addEventListener('DOMContentLoaded',function(){
        let boxes=document.querySelectorAll('.box1'),
        btns=document.querySelectorAll('#olish'),
        open=document.querySelector('#btn');
       
         
        function creating(){
            let cart=document.createElement('div'),
                heading=document.createElement('h2'),
                field=document.createElement('div'),
                close=document.createElement('button');

            cart.classList.add('cart')
            field.classList.add('cart-field')
            close.classList.add('closeBtn')

            heading.textContent='TANLANGANLAR'
            heading.style.color='white'
            heading.style.textAlign='center'

            close.textContent='Yopish'
            close.style.textAlign='center'

            document.body.appendChild(cart)
            cart.appendChild(heading)
            cart.appendChild(field)
            cart.appendChild(close)

            open.addEventListener('click',function(){
                cart.style.display='block'
            })
       close.addEventListener('click',function(){
        cart.style.display='none'
       })

        }
        creating()
        let field=document.querySelector('.cart-field');
         
           btns.forEach(function(item,i){
               console.log(i);
               
                 item.addEventListener('click',function(){
                     let cloneitem=boxes[i].cloneNode(true),
                     btn=cloneitem.querySelector('button');

                     btn.remove();

                     field.appendChild(cloneitem)
                     boxes[i].remove();
                 })
                 
           })

      
               
         
           let nav=document.querySelector('.nav')
       
           
          setInterval(function(){
                window.addEventListener('scroll',function(){
               nav.classList.add('nav2')
           })
          })
         
      

          
         
        
            
   }) 
             

       
        


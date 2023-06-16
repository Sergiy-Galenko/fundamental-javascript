title.setAtribute('onclick',null) // Снимаем значения и ставим вместо него null
title.onmouseenter(); // null
title.onmouseenter = fn1; // присваюем функцию fn1 при наведени мыши на какойто обьект
title.onmouseenter = null; // снимаем все что было на обьекте 
title.addEventListener('click'); // Можем на одно и тоже события повесить несколько обработчиков 
title.removeEventListener('click',fn1); // снимаем всче что было в обработчике
title.addEventListener('click',function(){console.log('event');}); // создаем оброботчик события 
title.removeEventListener('click',function(){console.log('event');}) // у нас не получиться в таком виде снять обработчик события

 
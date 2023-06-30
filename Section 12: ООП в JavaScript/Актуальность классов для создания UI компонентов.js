class Modal{
    constructor(text){
        this.text = text;  
        this.init();
    }

    init(){
        this.createMackup();
        this.modal = document.getElementById('MyModal');
        this.closeBtn = this.modal.querySelector('.close');
        this.attacEhvents();
    }

    createMackup(){
         document.body.insertAdjacentHTML('beforeend',`
         ...
         `); 
    }

    attacEhvents(){
        this.closeFn = this.closeFn.bind(this);  
        this.handleClick = this.handleClick.bind(this);

        this.closeBtn.addEventListener('click',this.closeFn);
        window.addEventListener('click',this,handleClick )
    }

    handleClick(e){
        if(e.target === this.modal){
            this.closeFn(); 
        }

    }
    closeFn(){
        this.detachEvents();
        this.modal.remove();
        this.modal = null;
    }

    detachEvents(){
        this.closeBtn.removeEventListener('click',this,this.closeFn);
        window.removeEventListener('click',this.handleClick);
    }
}
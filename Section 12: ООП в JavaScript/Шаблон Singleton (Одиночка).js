class User{
    constructor(login,email){
        this.email = email;
        this.login = login;
    }
}

class Editor extends User{
    constructor(login,email){
        super(login,email)
    }

    createPost(title,text){

    }

}

class Admin extends User{
    static exists = false;
    static instance = null;

    constructor(login,email){
        if(Admin.exists){
            return Admin.instance;
        }
        super(login,email);
        Admin.exists = true;
        Admin.instance = this;
    }
}
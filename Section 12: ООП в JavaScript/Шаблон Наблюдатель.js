class Post {
  constructor(title, subtitle) {
    this.title = title;
    this.subtitle = subtitle;
  }
}

class Editor {
  #observers = [];

  constructor(login, role = "editor") {
    this.login = login;
    this.role = role;
    this.post = [];
  }

  createPost(title, subtitle) {
    const post = new Post(title, subtitle);

    this.post.push(post);
    this.notify(post);
  }
  attach(observers) {
    const isExist = this.#observers.includes(observers);

    if (isExist) return;

    this.#observers.push(observers);
    console.log("Editor: Attached an observer");
  }

  detach(observers) {
    const observersIndex = this.#observers.indexOf(observers);

    if (observersIndex === -1) {
      return console.log("Observer was not found");
    }

    this.#observers.splice(observersIndex, 1);
    console.log('Editor: Deateched an observer');
  }

  notify(post) {
    for(const observer of this.#observers){
      observer.update(this.login + ' published a post' + JSON.stringify(post));
    }
  }
}

class Admin {
  constructor(login, role = 'admin'){
    this.login = login;
    this.role = role;
  }

  update(subject){
    console.log(subject);
  }
}

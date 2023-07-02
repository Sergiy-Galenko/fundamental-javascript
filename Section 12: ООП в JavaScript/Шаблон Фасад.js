class Order {
  constructor(order) {
    this.order = order;
    this.status = "received";
    KitchenTask.createTask(this);
  }
}

class KitchenTask {
  constructor(task) {
    this.task = task.task;
    this.task.status = "preparing";
  }
 
  static createTask(task) {
    const kTask = new KitchenTask(task);

    setTimeout(() =>{
        DeliveriTask.createTask(kTask );
    },3000)
  }
}

class DeliveriTask {
  constructor(task) {
    this.task = task;
    this.task.status = "in delivery";
  }

  static createTask(task) {
    const dTask = new DeliveriTask(task);

    setTimeout(() =>{
        dTask.task.status = 'complete';

        console.log(dTask);
    },3000)
  }
}

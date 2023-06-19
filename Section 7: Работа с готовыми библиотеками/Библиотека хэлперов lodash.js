// https://lodash.com/

const basket ={
    bread: 4,
    milk: 2,
    potato: 20,
    chocolate: 2,
}

console.log(_.pickBy(basket,(val) => _.gte(val,5))); 
//https://imask.js.org/
//https://github.com/uNmAnNeR/imaskjs
//npm install imask
import IMask from "imask";
//<script src="https://unpkg.com/imask"></script> for HTML
//npm run make

IMask(document.getElementById("phone"), {
  mask: "+{380}(00)-00-000-00",
});

IMask(document.getElementById("age"), {
  mask: Number,
});
IMask(document.getElementById("age"), {
  mask: Date,
  lazy: false,
  overwite: true,
  autofix: true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: "d",
      from: 1,
      to: 31,
      maxLingth: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: "m",
      from: 1,
      to: 12,
      maxLingth: 2,
    },
    y: {
      mask: IMask.MaskedRange,
      placeholderChar: "y",
      from: 1900,
      to: 2999,
      maxLingth: 4,
    },
  },
});

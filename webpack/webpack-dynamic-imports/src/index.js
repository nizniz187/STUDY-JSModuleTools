// function getComponent(){
//   return import(/* webpackChunkName: "lodash" */ 'lodash')
//     .then(({ default: _ }) => {
//         const element = document.createElement('div');
//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;
//       }
//     )
// }

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import(/* webpackChunkName: "lodash" */ 'lodash');
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

getComponent().then(component => {
  document.body.appendChild(component);
});
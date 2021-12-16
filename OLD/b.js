const modulesA = {
 name: 'xiaoming',
 say() {
  console.log(this.name);
 }
}
const modulesB = {
 name: 'xiaoming1',
 say() {
  console.log(this.name);
 }
}

modulesA.name = '333';

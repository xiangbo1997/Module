(function(win) {
 console.log(win, 'window')
 const data = 123;
 function say() {
  console.log(data);
 }
 function sing() {
  console.log('111')
 }
 win.myModules = {
  say,
  sing
 }

})(window)

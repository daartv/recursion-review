// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };
// But instead we're going to implement it from scratch:
  // your code here
  var getElementsByClassName = function(className) {
    // instantiate a return array
    var result = [];
  // your code here
    // create a function
    // take a complete element as input
    var helper = function (node) {
        // compare those class name(s) to the original parameter
      if (node.classList.contains(className)) {
          // if they match
          // push it to the results array
        result.push(node);
      } 
      // get to the lower level children 
      var children = node.children;
      // execute the function with every child as input
      for (var j = 0; j < children.length; j++) {
        helper(children[j]);
      }
    };
    helper(document.body);
    return result;
  };

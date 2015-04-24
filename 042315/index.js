var asyncSeries = function(task, done) {
  var counter = 0;
  tasks.forEach(function(fn, i) {
    var callback = function() {
      counter++;
    }
    
  });

};



asyncSeries([
  function(callback) {
    console.log(1);
    callback();
  }, function(callback) {
    setTimeout(function() {
      console.log(2);
      callback();
    }, 1000);
  }, console.log.bind(console, 3)
], function(err) {
  console.log("This should not run unless there are errors.");
});

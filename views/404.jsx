const React = require("react");
const Default = require("./layouts/default");

function Error404({ bread }) {
  // Confirm we are getting our bread data in the terminal.
  // console.log(bread.name)
  return (
    <Default>
      No gluten or any bread for that matter! 404
    </Default>
  );
}

module.exports = Error404;
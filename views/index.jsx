const React = require("react");
const Default = require("./layouts/default");

function Index({ breads, bakers, title }) {
  return (
    <Default title={title}>
      <main>
        <h2>Index Page</h2>
        <h3>Bakers</h3>
        <ul>
          {bakers.map((baker) => {
            return (
              <li key={baker.id}>
                <a href={`/bakers/${baker._id}`}>{baker.name}</a>
              </li>
            );
          })}
        </ul>
        <h3>Breads</h3>
        <ul>
          {breads.map((bread, index) => {
            console.log(bread);
            console.log(index);
            return (
              <li key={index}>
                <a href={`/breads/${bread._id}`}>{bread.name}</a>
                <img src={bread.image}></img>
              </li>
            );
          })}
        </ul>
        <div className="newButton">
          <a href="/breads/new">
            <button>Add a new bread</button>
          </a>
        </div>
      </main>
    </Default>
  );
}

module.exports = Index;


const React = require('react')
const Default = require('./layouts/default')

function Home() {
  return (
    <Default>
      <main>
        <h1>HOME</h1>
        <div>
          <div>
            <h1>Welcome to BREADCRUD!</h1>
            <h2>the best (and only) bread indexing website</h2>
          </div>
        </div>
        <a href="/breads">
          <button className="btn-primary">ENTER THE BREAD ZONE</button>
        </a>
      </main>
    </Default>
  );
}

module.exports = Home;
const React = require('react')
const Def = require('./default')

function home () {
  return (  
    <Def>
        <main>
            <h1>HOME</h1>
            <div><img src="/images/burger.jpg" alt="Burger"></img>
            <div>
              Photo by <a href="https://unsplash.com/@1ncreased">Lidye</a> on<a href="unsplash.com"></a>
            </div>
            </div>
            <a href="/places">
              <button className="btn-primary">Places Page</button>
            </a>
        </main>
    </Def>
  )
}

module.exports = home
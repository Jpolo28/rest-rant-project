const React = require('react')
const Def = require('./default')

function home () {
  return (  
    <Def>
        <main>
            <h1>HOME</h1>
            <div>
              <img src="/images/burger.png" alt="picture of burger"></img>
              <div>
                Photo By <a href="https://unsplash.com/@1ncreased">Lydia</a> on <a href="unsplash.com">Unsplash</a>
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
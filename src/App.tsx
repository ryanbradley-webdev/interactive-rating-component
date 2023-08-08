import './App.css'
import StarIcon from './assets/StarIcon'

function App() {
  return (
    <section>

      <div className='icon'>
        <StarIcon />
      </div>

      <h2>
        How did we do?
      </h2>

      <p>
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </p>

      <div className='rating'>

        <button>
          <span>
            1
          </span>
        </button>

        <button>
          <span>
            2
          </span>
        </button>

        <button>
          <span>
            3
          </span>
        </button>

        <button>
          <span>
            4
          </span>
        </button>

        <button>
          <span>
            5
          </span>
        </button>

      </div>

      <button className='submit'>
        SUBMIT
      </button>

    </section>
  )
}

export default App

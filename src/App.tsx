import { useState } from 'react'
import Rating from './components/Rating'
import './App.css'
import Submitted from './components/Submitted'

function App() {
  const [selectedRating, setSelectedRating] = useState<number | undefined>()
  const [isSubmitted, setIsSubmitted] = useState(false)

  return (
    <section>

      {
        isSubmitted ? (
          <Submitted
            submittedRating={selectedRating}
          />
        ) : (
          <Rating
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            submit={() => setIsSubmitted(true)}
          />
        )
      }

    </section>
  )
}

export default App

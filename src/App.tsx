import { useRef, useState } from 'react'
import Rating from './components/Rating'
import './App.css'
import Submitted from './components/Submitted'

function App() {
  const [selectedRating, setSelectedRating] = useState<number | undefined>()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [opacity, setOpacity] = useState(1)

  const sectionRef = useRef<HTMLElement>(null)

  const submitRating = () => {
    if (sectionRef.current) {
      setOpacity(0)

      setTimeout(() => {
        setIsSubmitted(true)

        setTimeout(() => {
          setOpacity(1)
        }, 200)
      }, 700)
    }
  }

  return (
    <section
      ref={sectionRef}
    >

      {
        isSubmitted ? (
          <Submitted
            submittedRating={selectedRating}
            opacity={opacity}
          />
        ) : (
          <Rating
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            submit={submitRating}
            opacity={opacity}
          />
        )
      }

    </section>
  )
}

export default App

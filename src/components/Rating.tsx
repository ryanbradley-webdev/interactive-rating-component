import { Dispatch, SetStateAction } from "react"
import StarIcon from "../assets/StarIcon"

export default function Rating({
    selectedRating,
    setSelectedRating,
    submit
}: {
    selectedRating: number | undefined
    setSelectedRating: Dispatch<SetStateAction<number | undefined>>
    submit: () => void
}) {
    return (
        <>
        
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

                <button
                data-selected={selectedRating === 1}
                onClick={() => setSelectedRating(1)}
                >
                <span>
                    1
                </span>
                </button>

                <button
                data-selected={selectedRating === 2}
                onClick={() => setSelectedRating(2)}
                >
                <span>
                    2
                </span>
                </button>

                <button
                data-selected={selectedRating === 3}
                onClick={() => setSelectedRating(3)}
                >
                <span>
                    3
                </span>
                </button>

                <button
                data-selected={selectedRating === 4}
                onClick={() => setSelectedRating(4)}
                >
                <span>
                    4
                </span>
                </button>

                <button
                data-selected={selectedRating === 5}
                onClick={() => setSelectedRating(5)}
                >
                <span>
                    5
                </span>
                </button>

            </div>

            <button className='submit' onClick={submit}>
                SUBMIT
            </button>
        
        </>
    )
}
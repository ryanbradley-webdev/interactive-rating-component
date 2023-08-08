import ThankYou from "../assets/ThankYou"

export default function Submitted({
    submittedRating,
    opacity
}: {
    submittedRating: number | undefined
    opacity: number
}) {
    return (
        <div
            style={{
                opacity
            }}
        >

            <ThankYou />

            <div className="selection">
                <span>
                    You selected {submittedRating} out of 5
                </span>
            </div>

            <h2 className="center">
                Thank you!
            </h2>
            
            <p className="center">
                We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!
            </p>

        </div>
    )
}
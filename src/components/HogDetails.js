function HogDetails({hog}) {
    return (
        <div>
            <p>{hog.specialty}</p>
            <p>{hog.weight}</p>
            <p>{hog.greased}</p>
            <p>{hog["highest medal achieved"]}</p>
        </div>
    )
}

export default HogDetails;
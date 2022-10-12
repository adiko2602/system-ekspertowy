import "../App.css"

export function PersonType(props) {
    const personType = props.personType
    return (
        <div className="question">
            <div>
                <span>Twoja osobowość to: {personType}</span>
            </div>
            <div>
                <a onClick={() => window.location.reload()}>Naciśnij tutaj</a> aby wypełnić test jeszcze raz.
            </div>
        </div>
    )
}
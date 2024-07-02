import './ExpCard.css'

// eslint-disable-next-line react/prop-types
export default function ExpCard({title, desc, date}) {
    return (
        <div className="exp-card">
            <div>
                <h2>{title}</h2>
                <h6>{date}</h6>
            </div>

            <p>{desc}</p>

            <hr/>
        </div>
    )
}

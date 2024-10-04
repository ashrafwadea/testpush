import ProfilePic from '/src/assets/company.jpg'

function Card() {

    return (

        <div className="card">
            <img className="card-image" alt="Profile Picture" src={ProfilePic}></img>
            <h2 className="card-title">Ashraf Wadea</h2>
            <p className="card-text">I make react developing</p>
        </div>
    )

}

export default Card;
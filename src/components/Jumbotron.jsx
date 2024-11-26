/* eslint-disable react/prop-types */
export default function Jumbotron({ title, description, bgImageUrl = '', children }) {

    return (
        <div className="p-5 mb-4" style={{ backgroundImage: `url(${bgImageUrl})`, backgroundSize: 'cover', backgroundColor: '#000000a6', backgroundBlendMode: 'color' }}>
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold text-light">{title}</h1>
                <p className="col-md-8 fs-4 text-dark">
                    {description}
                </p>
                {children}
            </div>
        </div>
    )
}
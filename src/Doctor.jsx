import React from 'react';

const Doctor = ({ doctor }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm ">
                <figure>
                    <img
                        src={doctor.image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {doctor.name}
                        <div className="badge badge-secondary">{doctor.available}</div>
                    </h2>
                    <p>{doctor.education} {doctor.experiance}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fees:{doctor.fees}</div>
                        <div className="badge badge-outline"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
import React from 'react';

export function Title({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-bleu">{title}</strong>
                </h1>
            </div>
        </div>
    );
}

export  function TitleLeft({ name, title }) {
    return (
        <div className="row">
            <div className="col-10 mb-auto my-2 text-left text-title">
                <h1 className="text-capitalize font-weight-bold">
                    {name} <strong className="text-bleu">{title}</strong>
                </h1>
            </div>
        </div>
    );
}
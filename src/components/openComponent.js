import React from 'react';

class OpenComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<div className='openComponent'>
            <div className='image'>
                <h2 className='header'>Wybierz dzień</h2>
            </div>
        </div>)
    }
}

export default OpenComponent;
import React from 'react'

const Loader = () => {
    return (
        <div className="loader">
            <section>
                <div className="earth"></div>
                <div className="circle">
                    <span style={{ '--i': 1 }}>L</span>
                    <span style={{ '--i': 2 }}>O</span>
                    <span style={{ '--i': 3 }}>A</span>
                    <span style={{ '--i': 4 }}>D</span>
                    <span style={{ '--i': 5 }}>I</span>
                    <span style={{ '--i': 6 }}>N</span>
                    <span style={{ '--i': 7 }}>G</span>
                </div>
            </section>
        </div>
    )
}

export default Loader
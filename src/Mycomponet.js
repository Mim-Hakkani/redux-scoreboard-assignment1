import React from 'react';

const Mycomponet = () => {
    return (
<>
<section className="section">
            {/* <!-- header --> */}
            <header className="header">
                <div className="container">
                    <div className="header-wrapper">
                        <img
                            src="/image/lws-logo 1.svg"
                            alt="logo"
                            className="logo"
                        />
                        <h1 className="name">Scoreboard</h1>
                        <h5 className="total">Total</h5>
                    </div>
                </div>
            </header>
            {/* <!-- matches  --> */}
            <div className="all-matches container">
                {/* <!-- Each form tag is Each row, This will render multiple times on Clicking 'Add Another Match' --> */}
                <div className="match">
                    <div className="wrapper">
                        <button className="lws-delete">
                            <img src="/image/delete.svg" alt="" />
                        </button>
                        <h3 className="lws-matchName">Match 1</h3>
                    </div>
                    <div className="inc-dec">
                        <form className="incrementForm">
                            <h4>Increment</h4>
                            <input
                                type="number"
                                name="increment"
                                className="lws-increment"
                            />
                        </form>
                        <form className="decrementForm">
                            <h4>Decrement</h4>
                            <input
                                type="number"
                                name="decrement"
                                className="lws-decrement"
                            />
                        </form>
                    </div>
                    <div className="numbers">
                        <h2 className="lws-singleResult">120</h2>
                    </div>
                </div>
            </div>
            {/* <!-- for adding another matches --> */}
            <div className="add_match">
                <button className="btn lws-addMatch">Add Another Match</button>
                <button className="lws-reset">
                    <svg
                        fill="none"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        ></path>
                    </svg>
                    <span>Reset</span>
                </button>
            </div>
        </section>

        <section className="mask"></section>
</>
    );
};

export default Mycomponet;


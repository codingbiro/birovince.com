import React from 'react';
import './App.css';

function Content() {
    return (
        <main className="container-s">
            <div className="thecards uk-child-width-1-3@s uk-grid-match uk-grid" uk-grid>
                <div uk-scrollspy="target: > div; cls: uk-animation-scale-down; delay: 600">
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-header">
                            <div className="uk-grid-small uk-flex-middle" uk-grid>
                                <div className="uk-width-auto">
                                    <img className="uk-border-circle" width="40" height="40" src="birovince.png" />
                                </div>
                                <div className="uk-width-expand">
                                    <h3 className="rale uk-card-title uk-margin-remove-bottom">Welcome there!</h3>
                                </div>
                            </div>
                        </div>
                        <div className="rale uk-card-body">
                            <p>Web development for you.<br /> 2020 &copy; CodingBiro Bt.</p>
                        </div>
                        <div className="uk-card-footer">
                            <button className="rale uk-button uk-button-default" type="button"
                                uk-toggle="target: #offcanvas-overlay">Contact info</button>
                        </div>
                    </div>
                </div>
                <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 400" className="h-50">
                    <div className="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light">
                        <h3 className="rale uk-card-title">Members area</h3>
                        <a className="rale uk-button uk-button-default" href="https://login.birovince.com" target="_blank">Login</a>
                    </div>
                </div>
                <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 800" className="h-50">
                    <div className="uk-card uk-card-small uk-card-default uk-card-body">
                        <h3 className="rale uk-card-title">Education</h3>
                        <div className="uk-card-badge uk-label">HU</div>
                        <a className="rale uk-button uk-button-default" href="https://matek.birovince.com" target="_blank">Maths</a>
                    </div>
                </div>
            </div>
            <div id="offcanvas-overlay" uk-offcanvas="overlay: true">
                <div className="rale uk-offcanvas-bar">
                    <button className="uk-offcanvas-close uk-icon uk-close" type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" data-svg="close-icon"><line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
                    </button>
                    <h3>Contact</h3>
                    <p>hello@birovince.com</p>
                    <p>+36205238262</p>
                    <p>facebook.com/iamBiroVince</p>
                </div>
            </div>
        </main>
    );
}

export default Content;
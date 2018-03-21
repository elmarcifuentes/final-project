import React from 'react';
import HomeForm from './HomeForm';

const Landing = () => (
    <section className="bg-dark space-lg">
                <img alt="" src="" className="bg-image" />
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-12 col-md-6 col-lg-5 section-intro">
                            <h1 className="display-3">NewsFlash!</h1>
                            <span className="lead">
                                Write some text here! Have Tanisha add some text for this paragrah. We are using Bootstrap 4.
                            </span>
                        </div>
                        <div className="col-12 col-md-6 col-lg-5">
                            <HomeForm />
                        </div>
                    </div>
                </div>
    </section>
  )
  
  export default Landing;
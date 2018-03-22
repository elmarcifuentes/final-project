import React from 'react';
import RegisterForm from './RegisterForm';


const Home = () => (
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
            {/* Landing Page Form */}
            <div className="col-12 col-md-6 col-lg-5">
                <RegisterForm />
            </div>
            {/* Landing Page Form End*/}
        </div>
    </div>
</section>
  )
  
  export default Home;
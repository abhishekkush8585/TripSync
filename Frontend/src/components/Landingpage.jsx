import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const LandingPage = () => {
  return (
    <div className="container-fluid px-0">

      {/* HERO SECTION */}
      <section className="bg-dark text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold mb-3">
            Discover Your Next Adventure
          </h1>

          <p className="lead mb-4">
            Explore breathtaking destinations, curated tour packages, and seamless
            travel experiences — all in one place.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/login" className="btn btn-primary btn-lg px-4">
              Start Your Journey
            </Link>

            <Link to="/signup" className="btn btn-outline-light btn-lg px-4">
              Create Account
            </Link>
          </div>
        </div>
      </section>


      {/* STATS SECTION */}
      <section className="container py-5">
        <div className="row text-center g-4">

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h2 className="text-primary fw-bold">🌍 50+</h2>
                <p className="text-muted mb-0">Countries Covered</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h2 className="text-primary fw-bold">✈️ 1,200+</h2>
                <p className="text-muted mb-0">Curated Packages</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0 h-100">
              <div className="card-body">
                <h2 className="text-primary fw-bold">😊 25K+</h2>
                <p className="text-muted mb-0">Happy Travelers</p>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* FEATURES SECTION */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">

            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title">🌍 Global Destinations</h5>
                  <p className="card-text text-muted">
                    Explore iconic cities, hidden gems, and breathtaking landscapes.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title">🔐 Secure Bookings</h5>
                  <p className="card-text text-muted">
                    Your personal data and payments are protected with top-grade security.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title">💸 Best Price Guarantee</h5>
                  <p className="card-text text-muted">
                    Enjoy exclusive deals and premium packages.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="card shadow-sm h-100 border-0">
                <div className="card-body">
                  <h5 className="card-title">⚡ Instant Confirmation</h5>
                  <p className="card-text text-muted">
                    Book your dream vacation instantly.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* TESTIMONIALS */}
      <section className="container py-5">
        <h2 className="text-center mb-4 fw-bold">
          What Our Travelers Say 💬
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  "Amazing experience! Everything was smooth and well organized."
                </p>
                <h6 className="text-muted">- Rahul Sharma ⭐⭐⭐⭐⭐</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  "Affordable packages and great support team!"
                </p>
                <h6 className="text-muted">- Neha Verma ⭐⭐⭐⭐⭐</h6>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm h-100 border-0">
              <div className="card-body">
                <p className="card-text">
                  "Clean UI, fast response, and awesome tours."
                </p>
                <h6 className="text-muted">- Arjun Mehta ⭐⭐⭐⭐⭐</h6>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* CTA SECTION */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h2 className="fw-bold mb-3">
            Ready to Start Your Journey?
          </h2>

          <p className="mb-4">
            Sign up now and unlock exclusive travel deals.
          </p>

          <Link to="/signup" className="btn btn-light btn-lg px-4">
            Get Started for Free
          </Link>
        </div>
      </section>


      {/* FOOTER */}
      <footer className="bg-dark text-light text-center py-3">
        <div className="container">
          <p className="mb-1">
            © {new Date().getFullYear()} Travel & Tour Management System
          </p>
          <p className="mb-0">
            Created by <strong>Adarsh Mani</strong> &{" "}
            <strong>Abhishek Kushwaha</strong>
          </p>
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;

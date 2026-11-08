const Home = () => {
  return (
    <div className="page">
      {/* Section 1 */}
      <section className="section hero">
        <h1>Welcome to Our Website</h1>
        <p>We provide modern web development solutions.</p>
      </section>

      {/* Section 2 */}
      <section className="section">
        <h2>Our Mission</h2>
        <p>
          Delivering high-quality React applications with speed and efficiency.
        </p>
      </section>

      {/* Section 3 */}
      <section className="section highlight">
        <h2>Why Choose Us?</h2>
        <p>
          We combine interactive design with performant frontend architecture.
        </p>
      </section>

      {/* Section 4 */}
      <section className="section">
        <h2>Latest News</h2>
        <p>Check out our latest project updates and features!</p>
      </section>
    </div>
  );
};

export default Home;

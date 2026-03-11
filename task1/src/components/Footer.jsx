import React from 'react'

const Footer = () => {
    return (
        <div class="grid-container">
            <section class="about-section">

                <div class="about-header">
                    <span class="tag">About Horizon</span>
                    <p>
                        At Horizon, we don't just play tennis — we live it. Since 2021,
                        our club has been a home for players of all levels, from eager
                        beginners to seasoned pros.
                    </p>
                </div>

                <div class="about-grid">

                    <div class="card card-dark">
                        <h3>Professional hard courts</h3>
                        <p>with tournament-grade lighting & climate control.</p>
                    </div>

                    <div class="card card-image">
                        <span class="badge">Private & Group Lessons</span>
                    </div>

                    <div class="card card-light">
                        <h2>100+</h2>
                        <p>Pro Coaches</p>
                    </div>

                </div>

                <div class="numbers-title">
                    <p>A few more facts about us in numbers</p>
                </div>

                <div class="numbers-grid">

                    <div class="number">
                        <h2>12 000+</h2>
                        <p>Hours of play annually</p>
                    </div>

                    <div class="number">
                        <h2>89%</h2>
                        <p>Player Retention Rate</p>
                    </div>

                    <div class="number">
                        <h2>1,200+</h2>
                        <p>Active Members</p>
                    </div>

                    <div class="number">
                        <h2>125+</h2>
                        <p>Annual Tournaments</p>
                    </div>

                </div>

            </section>


            <section class="services">

                <div class="services-grid">

                    <div class="service-text">
                        <span class="tag">Services</span>
                        <h3>
                            Explore our full range of coaching,
                            training, and tennis experiences.
                        </h3>

                        <button>Explore More</button>
                    </div>

                    <div class="service-card program">
                        <p>Training Programs</p>
                    </div>

                    <div class="service-card court">
                        <p>Hourly Court Rental</p>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default Footer

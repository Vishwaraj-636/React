import React from 'react'

const header = () => {
    return (
        <div className='header-box'>
            <div className="head-upper">
                <div className="box-upper">
                    <h1>Unleash Your Inner Champion Today.<br></br>All In One Place.</h1>
                    <p>Join the ultimate experience where passion meets performance<br></br>, and every swing brings you closer to victory.</p>
                    <button>Start your own journey</button>
                </div>
            </div>
            <div className="head-bottom">
                <div className="bottom-left">
                    <p>Train with real professionals. <br></br>Get the real results</p>
                    <div className="trainer-img">
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  id='t1'/>
                        <img src="https://images.unsplash.com/photo-1700993443944-c88c9360b9cf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  id='t2'/>
                        <img src="https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  id='t3'/>
                    </div>
                </div>
                <div className="bottom-right">
                    <a href="#">Instagran<i class="ri-arrow-right-up-long-line"></i></a>
                    <a href="#">Facebook<i class="ri-arrow-right-up-long-line"></i></a>
                    <a href="#">TikTok<i class="ri-arrow-right-up-long-line"></i></a>
                </div>
            </div>
        </div>
    )
}

export default header

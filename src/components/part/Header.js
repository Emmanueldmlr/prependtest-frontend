import React from 'react'

import { Link} from 'react-router-dom';

const Header = () => {

    return (

		<header class="main-header sticky">

			<a href="#menu" class="btn-mobile">

				<div class="hamburger hamburger--spin" id="hamburger">

					<div class="hamburger-box">

						<div class="hamburger-inner"></div>

					</div>

				</div>

			</a>

			<div class="container">

				<div class="row">

					<div class="col-lg-3 col-6">

						<div id="logo">

							<h4>

                                <Link to="/">

									<a href="/"  style={{color: "#ff7b79 !important"}}>Pokemon</a>

								</Link>
                                
                            </h4>

						</div>

					</div>

					<div class="col-lg-9 col-6">
						
						<nav id="menu" class="main-menu">

							<ul>

								<li>

                                    <span>

										<Link to="/">

											<a href="/">Home</a>

										</Link>

                                    </span>

                                </li>
							
							</ul>

						</nav>

					</div>

				</div>

			</div>
			
		</header>
    )
}

export default Header

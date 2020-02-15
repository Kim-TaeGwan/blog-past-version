import React from 'react';
// import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer_box">
				<div className="content_box left">
					<span className="title">FOOTER</span>
					<div className="content">
						<span>
							Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae,
							ultricies congue gravida diam non fringilla.
						</span>
						<span>
							Powered by
							<a href="https://www.w3schools.com/w3css/default.asp" target="black">
								w3.css
							</a>
						</span>
					</div>
				</div>
				<div className="content_box center">
					<span className="title">BLOG POSTS</span>
					<div className="content" />
				</div>
				<div className="content_box right">
					<span className="title">POPULAR TAGS</span>
					<div className="content" />
				</div>
			</div>
		</div>
	);
};

export default Footer;

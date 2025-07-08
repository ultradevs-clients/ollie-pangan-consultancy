import React from "react";

export default function Map() {
	return (
		<div className="container lg:px-0 px-5 pb-16 lg:pb-28">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193596.26002786632!2d-74.14431287431229!3d40.697284634966785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1751797108574!5m2!1sen!2sbd"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="h-[200px] md:h-[300px] lg:h-[500px] w-full rounded-4xl"
			></iframe>
		</div>
	);
}

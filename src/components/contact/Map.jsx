import React from "react";

export default function Map() {
	return (
		<div className="container lg:px-0 px-5 pb-16 lg:pb-28">
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61775.173366010335!2d120.94270729407864!3d14.602018996542188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397ca03571ec38b%3A0x69d1d5751069c11f!2sManila%2C%20Metro%20Manila%2C%20Philippines!5e0!3m2!1sen!2sbd!4v1755680984593!5m2!1sen!2sbd"
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				className="h-[200px] md:h-[300px] lg:h-[500px] w-full rounded-4xl"
			></iframe>
		</div>
	);
}

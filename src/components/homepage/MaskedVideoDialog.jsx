"use client";

import * as React from "react";

export default function MaskedVideoDialog({ videoSrc }) {
	return (
		<div className="div-shaped">
			<video
				src={videoSrc}
				className="w-full h-full object-cover"
				autoPlay
				playsInline
				muted
				loop
			/>
		</div>
	);
}

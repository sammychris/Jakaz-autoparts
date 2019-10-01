import React from 'react'

const MapDirection = () => {
	return (
		<div style={{margin: 'auto', width: '1000px', padding: '50px'}}>
			<div className='maps' style={{ boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.32)'}}>
				<iframe
					title="Jakazautoparts"
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9407112552321!2d3.3217205723560235!3d6.5366561087624095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8e6855555555%3A0x53e888703f98a5b4!2sLadipo%20Spare%20Parts%20Market!5e0!3m2!1sen!2sng!4v1568410852735!5m2!1sen!2sng"
					width="1000"
					height="400"
					frameborder="0"
					style={{ border:"0" }}
					allowfullscreen=""
					>
				</iframe>
			</div>
		</div>
	)
}

export default MapDirection;

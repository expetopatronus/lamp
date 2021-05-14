var isOn = "off";

function aktif() {
	if (isOn == "off") {
		document.getElementById('body').style = "background: #fff";
		document.getElementById('lampBall').style = "border-color: #333";
		document.getElementById('lampLower').style = "border-color: #333";
		isOn = "on";
	} else if(isOn == "on") {
		document.getElementById('body').style = "background: #111";
		document.getElementById('lampBall').style = "border-color: #eee";
		document.getElementById('lampLower').style = "border-color: #eee";
		isOn = "off";
	}
}
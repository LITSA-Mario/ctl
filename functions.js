<script>
function fedpov(house,income,percentage){
	// Determines if your income is less than or equal to
	// a percentage of the 2023 federal poverty guidelines
	// for the contiguous United States. See
	// https://aspe.hhs.gov/poverty-guidelines

		var line = NaN;

		if (house == 1) {
			line = 14580;
		} else if (house == 2) {
			line = 19720;
		} else if (house == 3) {
			line = 24860;
		} else if (house == 4) {
			line = 30000;
		} else if (house == 5) {
			line = 35140;
		} else if (house == 6) {
			line = 40280;
		} else if (house == 7) {
			line = 45420;
		} else if (house == 8) {
			line = 50560;
		} else if (house > 8) {
			line = 50560 + (house-8)*5140;
		}

		if (income <= (line*(percentage/100))) {
			return true;
		} else {
			return false;
		}
	}
</script>

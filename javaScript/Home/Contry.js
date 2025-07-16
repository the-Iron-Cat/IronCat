
 const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahrain", "Bangladesh", "Belarus", "Belgium", "Belize",
    "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana",
    "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cambodia", "Cameroon", "Canada", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti",
    "Dominican Republic", "DR Congo", "Ecuador", "Egypt", "El Salvador",
    "Estonia", "Ethiopia", "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Guatemala", "Guinea", "Haiti", "Honduras",
    "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
    "Liberia", "Libya", "Lithuania", "Luxembourg", "Madagascar",
    "Malaysia", "Maldives", "Mali", "Malta", "Mauritania",
    "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro",
    "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal",
    "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria",
    "North Korea", "North Macedonia", "Norway", "Oman", "Pakistan",
    "Palestine", "Panama", "Paraguay", "Peru", "Philippines",
    "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Singapore",
    "Slovakia", "Slovenia", "Somalia", "South Africa", "South Korea",
    "Spain", "Sri Lanka", "Sudan", "Sweden", "Switzerland",
    "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
    "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];

  const selectElement = document.getElementById("countrySelect");

  countries.forEach(country => {
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    selectElement.appendChild(option);
  });
  //////////////////////////////////////////////////////////
const countryData = {
            "Afghanistan": "+93",
            "Albania": "+355",
            "Algeria": "+213",
            "Andorra": "+376",
            "Angola": "+244",
            "Argentina": "+54",
            "Armenia": "+374",
            "Australia": "+61",
            "Austria": "+43",
            "Azerbaijan": "+994",
            "Bahrain": "+973",
            "Bangladesh": "+880",
            "Belarus": "+375",
            "Belgium": "+32",
            "Belize": "+501",
            "Benin": "+229",
            "Bhutan": "+975",
            "Bolivia": "+591",
            "Bosnia and Herzegovina": "+387",
            "Botswana": "+267",
            "Brazil": "+55",
            "Brunei": "+673",
            "Bulgaria": "+359",
            "Burkina Faso": "+226",
            "Burundi": "+257",
            "Cambodia": "+855",
            "Cameroon": "+237",
            "Canada": "+1",
            "Chad": "+235",
            "Chile": "+56",
            "China": "+86",
            "Colombia": "+57",
            "Comoros": "+269",
            "Costa Rica": "+506",
            "Croatia": "+385",
            "Cuba": "+53",
            "Cyprus": "+357",
            "Czech Republic": "+420",
            "Denmark": "+45",
            "Djibouti": "+253",
            "Dominican Republic": "+1",
            "DR Congo": "+243",
            "Ecuador": "+593",
            "Egypt": "+20",
            "El Salvador": "+503",
            "Estonia": "+372",
            "Ethiopia": "+251",
            "Fiji": "+679",
            "Finland": "+358",
            "France": "+33",
            "Gabon": "+241",
            "Gambia": "+220",
            "Georgia": "+995",
            "Germany": "+49",
            "Ghana": "+233",
            "Greece": "+30",
            "Guatemala": "+502",
            "Guinea": "+224",
            "Haiti": "+509",
            "Honduras": "+504",
            "Hungary": "+36",
            "Iceland": "+354",
            "India": "+91",
            "Indonesia": "+62",
            "Iran": "+98",
            "Iraq": "+964",
            "Ireland": "+353",
            "Italy": "+39",
            "Ivory Coast": "+225",
            "Jamaica": "+1",
            "Japan": "+81",
            "Jordan": "+962",
            "Kazakhstan": "+7",
            "Kenya": "+254",
            "Kuwait": "+965",
            "Kyrgyzstan": "+996",
            "Laos": "+856",
            "Latvia": "+371",
            "Lebanon": "+961",
            "Liberia": "+231",
            "Libya": "+218",
            "Lithuania": "+370",
            "Luxembourg": "+352",
            "Madagascar": "+261",
            "Malaysia": "+60",
            "Maldives": "+960",
            "Mali": "+223",
            "Malta": "+356",
            "Mauritania": "+222",
            "Mexico": "+52",
            "Moldova": "+373",
            "Monaco": "+377",
            "Mongolia": "+976",
            "Montenegro": "+382",
            "Morocco": "+212",
            "Mozambique": "+258",
            "Myanmar": "+95",
            "Namibia": "+264",
            "Nepal": "+977",
            "Netherlands": "+31",
            "New Zealand": "+64",
            "Nicaragua": "+505",
            "Niger": "+227",
            "Nigeria": "+234",
            "North Korea": "+850",
            "North Macedonia": "+389",
            "Norway": "+47",
            "Oman": "+968",
            "Pakistan": "+92",
            "Palestine": "+970",
            "Panama": "+507",
            "Paraguay": "+595",
            "Peru": "+51",
            "Philippines": "+63",
            "Poland": "+48",
            "Portugal": "+351",
            "Qatar": "+974",
            "Romania": "+40",
            "Russia": "+7",
            "Rwanda": "+250",
            "Saudi Arabia": "+966",
            "Senegal": "+221",
            "Serbia": "+381",
            "Singapore": "+65",
            "Slovakia": "+421",
            "Slovenia": "+386",
            "Somalia": "+252",
            "South Africa": "+27",
            "South Korea": "+82",
            "Spain": "+34",
            "Sri Lanka": "+94",
            "Sudan": "+249",
            "Sweden": "+46",
            "Switzerland": "+41",
            "Syria": "+963",
            "Taiwan": "+886",
            "Tajikistan": "+992",
            "Tanzania": "+255",
            "Thailand": "+66",
            "Tunisia": "+216",
            "Turkey": "+90",
            "Turkmenistan": "+993",
            "Uganda": "+256",
            "Ukraine": "+380",
            "United Arab Emirates": "+971",
            "United Kingdom": "+44",
            "United States": "+1",
            "Uruguay": "+598",
            "Uzbekistan": "+998",
            "Venezuela": "+58",
            "Vietnam": "+84",
            "Yemen": "+967",
            "Zambia": "+260",
            "Zimbabwe": "+263"
        };

        const countries1 = Object.keys(countryData);
        const countrySelect = document.getElementById("countrySelect");
        const countryCodeSelect = document.getElementById("countryCodeSelect");
        
        countries1.forEach(country => {
            const option = document.createElement("option");
            option.value = country;
            option.textContent = country;
            countrySelect.appendChild(option);
        });
        countrySelect.addEventListener('change', function() {
            const selectedCountry = this.value;
            countryCodeSelect.innerHTML = '<option value="">Country Code</option>';
            
            if (selectedCountry && countryData[selectedCountry]) {
                const code = countryData[selectedCountry];
                const option = document.createElement('option');
                option.value = code;
                option.textContent = `${code} (${selectedCountry})`;
                option.selected = true;
                countryCodeSelect.appendChild(option);
            }
        });
        document.getElementById('contact_form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const country = countrySelect.value;
        const countryCode = countryCodeSelect.value;
        const phoneNumber = formData.get('phoneNumber');
        const gender = formData.get('gender');
        const fullPhoneNumber = `${countryCode} ${phoneNumber}`;
        alert(`Form submitted successfully!\n\nName: ${firstName} ${lastName}\nCountry: ${country}\nPhone: ${fullPhoneNumber}\nGender: ${gender}`);
});
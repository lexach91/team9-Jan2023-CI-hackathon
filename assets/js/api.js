const apiKey = "ZCDGCMmhhuKb4ixLJvKo6Qh7cxj0aGz8";
const apiSecret = "MKSamlCbcSAzuz2f";

const obtainToken = async () => {
    const amadeusUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";
    const amadeusHeaders = {
        "Content-Type": "application/x-www-form-urlencoded",
    };
    const amadeusBody = `grant_type=client_credentials&client_id=${apiKey}&client_secret=${apiSecret}`;
    const amadeusResponse = await fetch(amadeusUrl, {
        method: "POST",
        headers: amadeusHeaders,
        body: amadeusBody,
    });
    const amadeusData = await amadeusResponse.json();
    return amadeusData.access_token;
};

const flightInspirationSearch = async (origin, maxPrice) => {
    const amadeusUrl = `https://test.api.amadeus.com/v1/shopping/flight-destinations?origin=${origin}&maxPrice=${maxPrice}`;
    const amadeusHeaders = {
        "Authorization": `Bearer ${await obtainToken()}`,
    };
    try {
        const amadeusResponse = await fetch(amadeusUrl, {
            method: "GET",
            headers: amadeusHeaders,
        });
        const amadeusData = await amadeusResponse.json();
        return amadeusData.data;
    }
    catch (error) {
        console.log(error);
    }
};

const getNearbyAirports = async (city) => {
    const amadeusUrl = `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${city}&subType=AIRPORT`;
    const amadeusHeaders = {
        "Authorization": `Bearer ${await obtainToken()}`,
    };
    try {
        const amadeusResponse = await fetch(amadeusUrl, {
            method: "GET",
            headers: amadeusHeaders,
        });
        const amadeusData = await amadeusResponse.json();
        return amadeusData.data;
    }
    catch (error) {
        console.log(error);
    }
};


const searchInput = $("#search");
const resultsContainer = $("#search-results");


let searching = false;
const search = async (event) => {
    console.log("searching");
    const searchValue = searchInput.val();
    if (searchValue.length < 3) {
        resultsContainer.empty();
        return;
    }
    if (searching) {
        return;
    }
    searching = true;
    const searchResults = await getNearbyAirports(searchValue);
    resultsContainer.empty();
    searchResults.forEach((result) => {
        console.log(result);
        const resultElement = $(`
            <div class="result">
                <div class="result-name">${result.detailedName}</div>
                <div class="result-iata">${result.iataCode}</div>
            </div>
        `);
        resultElement.click(async () => {
            searchInput.val(result.detailedName);
            resultsContainer.empty();
            const origin = result.iataCode;
            const maxPrice = 100000;
            const flightInspirationSearchResults = await flightInspirationSearch(origin, maxPrice);
            console.log(flightInspirationSearchResults);
            flightInspirationSearchResults.forEach((flightInspirationSearchResult) => {
                const flightInspirationSearchResultElement = $(`
                    <div class="flight-inspiration-search-result">
                        <div class="flight-inspiration-search-result-destination">${flightInspirationSearchResult.destination}</div>
                        <div class="flight-inspiration-search-result-price">${flightInspirationSearchResult.price.total}</div>
                    </div>
                `);
                resultsContainer.append(flightInspirationSearchResultElement);                
            });
        });
        resultsContainer.append(resultElement);
    });
    searching = false;
};

searchInput.on("input", search);
flightInspirationSearch("LHR", 1000).then((data) => {
    console.log(data);
});
const apiAccessToken = '2acdd6b6c89e1307f5eac630fdf84bac';
const rapidApiKey = '159e60d392mshcf811eab4905e1dp136058jsn209123c515b4';
const rapidApiHost = 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com';
const popularCitiesUrl = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/city-directions';
const cheapestTicketsUrl = 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/cheap';

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

const getPopularCities = async (origin, currency) => {
    
    const headers = {
        'X-RapidAPI-Key': rapidApiKey,
        'X-RapidAPI-Host': rapidApiHost,
        'X-Access-Token': apiAccessToken,
    };
    try {
        const response = await fetch(popularCitiesUrl + `?origin=${origin}&currency=${currency}`, {
            method: 'GET',
            headers: headers,
            // params: params,
        });
        const data = await response.json();
        // sort data by price
        // data.sort((a, b) => {
        //     return a.price - b.price;
        // });
        const popularCities = data.data;
        // popularCities.sort((a, b) => {
        //     return a.price - b.price;
        // });
        return popularCities;
    } catch (error) {
        console.log(error);
    }
};

// getPopularCities('MIA').then((data) => {
//     console.log(data);
// });
$("#city-search").on("focus", (e) => {
    $('#form-left').removeClass('w-full');
    $('#form-left').addClass('w-1/3');
    $('#currency').removeClass('invisible');
    $('#currency').removeClass('w-0');
    $('#currency').addClass('w-full');
    $('#max-price').removeClass('invisible');
    $('#max-price').removeClass('w-0');
    $('#max-price').addClass('w-full');
    $('#max-price ~ svg').removeClass('invisible');
    $('#form-right').removeClass('w-0');
    $('#form-right').addClass('w-2/3');
    $('#form-right').removeClass('invisible');
});

// $("#city-search").on("blur", (e) => {
//     $('#form-left').removeClass('w-1/3');
//     $('#form-left').addClass('w-full');
//     $('#currency').removeClass('w-full');
//     $('#currency').addClass('w-0');
//     $('#currency').addClass('invisible');
//     $('#form-right').removeClass('w-2/3');
//     $('#form-right').addClass('w-0');
//     $('#form-right').addClass('invisible');
// });

$(document).on("click", (e) => {
    // if e.target is not an any child of #animated-search-form 
    if (!$(e.target).closest("#animated-search-form").length) {
        $('#form-left').removeClass('w-1/3');
        $('#form-left').addClass('w-full');
        $('#currency').removeClass('w-full');
        $('#currency').addClass('w-0');
        $('#currency').addClass('invisible');
        $('#max-price').removeClass('w-full');
        $('#max-price').addClass('w-0');
        $('#max-price').addClass('invisible');
        $('#max-price ~ svg').addClass('invisible');
        $('#form-right').removeClass('w-2/3');
        $('#form-right').addClass('w-0');
        $('#form-right').addClass('invisible');
    }
});

let searchingAirports = false;
$("#city-search").on("input", (e) => {
    const query = e.target.value;
    if (query.length < 3){
        $('#city-search-dropdown').empty();
        $('#city-search-dropdown').addClass('invisible');
        return;
    }
    if (searchingAirports) {
        return;
    }
    searchingAirports = true;
    getNearbyAirports(query).then((data) => {
        $('#city-search-dropdown').empty();
        data.forEach((airport) => {
            console.log(airport);
            const airportName = airport.name;
            const airportCode = airport.iataCode;
            const airportCity = airport.address.cityName;
            const airportCountry = airport.address.countryCode;
            const airportOption = `
            <div class="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-200" data-code="${airportCode}">
                <div class="flex flex-col" data-code="${airportCode}">
                    <span class="font-bold">${airportName}</span>
                    <span class="text-gray-500 text-sm">${airportCity}/${airportCountry}</span>
                    <span class="font-bold text-sm">${airportCode}</span>
                </div>
            </div>`;
            $('#city-search-dropdown').append(airportOption);
            // airportOption.addEventListener('click', (e) => {
            //     const airportCode = e.target.dataset.code;
            //     console.log(airportCode);
            //     $('#city-search-dropdown').empty();
            //     $('#city-search-dropdown').addClass('invisible');
            //     $('#city-search').val(airportCode);
            //     const chosenCurrency = $('#currency').val();
            //     const maxPrice = $('#max-price').val();
            //     getPopularCities(airportCode, chosenCurrency).then((data) => {
            //         console.log(data);
            //         $('#flight-search-results').empty();
            //         data.forEach((flight) => {
            //             console.log(flight);
            //         });
            //     });
            // });
            // console.log(airportOption);
        });
        $('#city-search-dropdown').removeClass('invisible');
        $('#city-search-dropdown > div').on('click', (e) => {
            console.log(e.target);
            const airportCode = $(e.target).closest('div').data('code') || $(e.target).data('code');
            console.log(airportCode);
            $('#city-search-dropdown').empty();
            $('#city-search-dropdown').addClass('invisible');
            $('#city-search').val(airportCode);
            const chosenCurrency = $('#currency').val();
            const maxPrice = $('#max-price').val();
            getPopularCities(airportCode, chosenCurrency).then((data) => {
                console.log(data);
                $('#flight-search-results').empty();
                data.forEach((flight) => {
                    console.log(flight);
                });
            });
        });

    });
    searchingAirports = false;
});
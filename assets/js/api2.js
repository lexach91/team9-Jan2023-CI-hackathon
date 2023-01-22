var _0x27dc = [
  "\x32\x61\x63\x64\x64\x36\x62\x36\x63\x38\x39\x65\x31\x33\x30\x37\x66\x35\x65\x61\x63\x36\x33\x30\x66\x64\x66\x38\x34\x62\x61\x63",
  "\x31\x35\x39\x65\x36\x30\x64\x33\x39\x32\x6D\x73\x68\x63\x66\x38\x31\x31\x65\x61\x62\x34\x39\x30\x35\x65\x31\x64\x70\x31\x33\x36\x30\x35\x38\x6A\x73\x6E\x32\x30\x39\x31\x32\x33\x63\x35\x31\x35\x62\x34",
  "\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x66\x6C\x69\x67\x68\x74\x2D\x64\x61\x74\x61\x2D\x76\x31\x2E\x70\x2E\x72\x61\x70\x69\x64\x61\x70\x69\x2E\x63\x6F\x6D",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x66\x6C\x69\x67\x68\x74\x2D\x64\x61\x74\x61\x2D\x76\x31\x2E\x70\x2E\x72\x61\x70\x69\x64\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x76\x31\x2F\x63\x69\x74\x79\x2D\x64\x69\x72\x65\x63\x74\x69\x6F\x6E\x73",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x74\x72\x61\x76\x65\x6C\x70\x61\x79\x6F\x75\x74\x73\x2D\x66\x6C\x69\x67\x68\x74\x2D\x64\x61\x74\x61\x2D\x76\x31\x2E\x70\x2E\x72\x61\x70\x69\x64\x61\x70\x69\x2E\x63\x6F\x6D\x2F\x76\x31\x2F\x70\x72\x69\x63\x65\x73\x2F\x63\x68\x65\x61\x70",
  "\x5A\x43\x44\x47\x43\x4D\x6D\x68\x68\x75\x4B\x62\x34\x69\x78\x4C\x4A\x76\x4B\x6F\x36\x51\x68\x37\x63\x78\x6A\x30\x61\x47\x7A\x38",
  "\x4D\x4B\x53\x61\x6D\x6C\x43\x62\x63\x53\x41\x7A\x75\x7A\x32\x66",
  "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x74\x65\x73\x74\x2E\x61\x70\x69\x2E\x61\x6D\x61\x64\x65\x75\x73\x2E\x63\x6F\x6D\x2F\x76\x31\x2F\x73\x65\x63\x75\x72\x69\x74\x79\x2F\x6F\x61\x75\x74\x68\x32\x2F\x74\x6F\x6B\x65\x6E",
  "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64",
  "\x67\x72\x61\x6E\x74\x5F\x74\x79\x70\x65\x3D\x63\x6C\x69\x65\x6E\x74\x5F\x63\x72\x65\x64\x65\x6E\x74\x69\x61\x6C\x73\x26\x63\x6C\x69\x65\x6E\x74\x5F\x69\x64\x3D",
  "\x26\x63\x6C\x69\x65\x6E\x74\x5F\x73\x65\x63\x72\x65\x74\x3D",
  "",
  "\x50\x4F\x53\x54",
  "\x6A\x73\x6F\x6E",
  "\x61\x63\x63\x65\x73\x73\x5F\x74\x6F\x6B\x65\x6E",
];
const apiAccessToken = _0x27dc[0];
const rapidApiKey = _0x27dc[1];
const rapidApiHost = _0x27dc[2];
const popularCitiesUrl = _0x27dc[3];
const cheapestTicketsUrl = _0x27dc[4];
const apiKey = _0x27dc[5];
const apiSecret = _0x27dc[6];
const obtainToken = async () => {
  const _0xfebex9 = _0x27dc[7];
  const _0xfebexa = {
    "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": _0x27dc[8],
  };
  const _0xfebexb = `${_0x27dc[9]}${apiKey}${_0x27dc[10]}${apiSecret}${_0x27dc[11]}`;
  const _0xfebexc = await fetch(_0xfebex9, {
    method: _0x27dc[12],
    headers: _0xfebexa,
    body: _0xfebexb,
  });
  const _0xfebexd = await _0xfebexc[_0x27dc[13]]();
  return _0xfebexd[_0x27dc[14]];
};

const getNearbyAirports = async (city) => {
  const amadeusUrl = `https://test.api.amadeus.com/v1/reference-data/locations?keyword=${city}&subType=AIRPORT`;
  const amadeusHeaders = {
    Authorization: `Bearer ${await obtainToken()}`,
  };
  try {
    const amadeusResponse = await fetch(amadeusUrl, {
      method: "GET",
      headers: amadeusHeaders,
    });
    const amadeusData = await amadeusResponse.json();
    return amadeusData.data;
  } catch (error) {
    console.log(error);
  }
};

const getPopularCities = async (origin, currency) => {
  const headers = {
    "X-RapidAPI-Key": rapidApiKey,
    "X-RapidAPI-Host": rapidApiHost,
    "X-Access-Token": apiAccessToken,
  };
  try {
    const response = await fetch(
      popularCitiesUrl + `?origin=${origin}&currency=${currency}`,
      {
        method: "GET",
        headers: headers,
        // params: params,
      }
    );
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
  $("#form-left").removeClass("w-full");
  $("#form-left").addClass("md:w-1/3");
  $("#currency").removeClass("hidden");
  $("#currency").removeClass("invisible");
  $("#currency").removeClass("w-0");
  $("#currency").addClass("w-full");
  $("#max-price").removeClass("hidden");
  $("#max-price").removeClass("invisible");
  $("#max-price").removeClass("w-0");
  $("#max-price").addClass("w-full");
  // $('#max-price ~ svg').removeClass('hidden');
  $("#max-price ~ svg").removeClass("invisible");
  $("#form-right").removeClass("w-0");
  $("#form-right").addClass("md:w-2/3");
  $("#form-right").removeClass("invisible");
  $("#form-right").removeClass("hidden");
  $("#search-button").removeClass("hidden");
  $("#search-button").removeClass("invisible");
  $("#search-button").removeClass("w-0");
  $("#search-button").addClass("w-full");
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
  // if e.target is not an any child of #animated-search-form or #city-search-dropdown
  if (
    !$(e.target).closest("#animated-search-form").length &&
    !$(e.target).closest("div[data-code]").length
  ) {
    console.log("clicked outside");
    console.log(e.target);
    $("#form-left").removeClass("md:w-1/3");
    $("#form-left").addClass("w-full");
    $("#currency").removeClass("w-full");
    $("#currency").addClass("w-0");
    $("#currency").addClass("invisible");
    $("#currency").addClass("hidden");
    $("#max-price").removeClass("w-full");
    $("#max-price").addClass("w-0");
    $("#max-price").addClass("invisible");
    $("#max-price").addClass("hidden");
    $("#max-price ~ svg").addClass("invisible");
    $("#form-right").removeClass("md:w-2/3");
    $("#form-right").addClass("w-0");
    $("#form-right").addClass("invisible");
    $("#form-right").addClass("hidden");
    $("#search-button").removeClass("w-full");
    $("#search-button").addClass("w-0");
    $("#search-button").addClass("invisible");
    $("#search-button").addClass("hidden");
  }
});
$("#city-search").on("blur", (e) => {
  console.log("blur");
  console.log(e.target);
});

let searchingAirports = false;
$("#city-search").on("input", (e) => {
  const query = e.target.value;
  if (query.length < 3) {
    $("#city-search-dropdown").empty();
    $("#city-search-dropdown").addClass("invisible");
    return;
  }
  if (searchingAirports) {
    return;
  }
  searchingAirports = true;
  getNearbyAirports(query).then((data) => {
    $("#city-search-dropdown").empty();
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
      $("#city-search-dropdown").append(airportOption);
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
    $("#city-search-dropdown").removeClass("invisible");
    $("#city-search-dropdown > div").on("click", (e) => {
      console.log(e.target);
      const airportCode =
        $(e.target).closest("div").data("code") || $(e.target).data("code");
      console.log(airportCode);
      $("#city-search-dropdown").empty();
      $("#city-search-dropdown").addClass("invisible");
      $("#city-search").val(airportCode);
      // make search button enabled
      $("#search-button").attr("disabled", false);
      $("#search-button").removeClass("bg-gray-200");
      $("#search-button").addClass("bg-blue-200");
    });
  });
  searchingAirports = false;
});

$("#search-button").on("click", (e) => {
  $("#results-placeholder").show();
  $("#results").addClass("hidden");
  $("#results-placeholder img").addClass("animate-bounce");
  $("#results-placeholder p").hide();
  const airportCode = $("#city-search").val();
  const chosenCurrency = $("#currency").val();
  const maxPrice = $("#max-price").val();
  getPopularCities(airportCode, chosenCurrency).then((data) => {
    console.log(data);
    $("#results").empty();
    // $('results').removeClass('hidden');
    let results = Object.values(data);
    console.log(results);
    if (maxPrice) {
      results = results.filter((flight) => {
        return flight.price <= maxPrice;
      });
      console.log(results);
    }
    results.sort((a, b) => {
      return a.price - b.price;
    });
    results.forEach((flight) => {
      console.log(flight);
      const origin = flight.origin;
      const destination = flight.destination;
      const price = flight.price;
      const departure_at = new Date(flight.departure_at)
        .toLocaleString()
        .slice(0, -3);
      console.log(typeof departure_at);
      const return_at = new Date(flight.return_at)
        .toLocaleString()
        .slice(0, -3);
      const transfers = flight.transfers;
      const flightOption = `
            <div class="flex flex-col items-center justify-center w-full p-4 border border-gray-200 rounded-md">
                <div class="flex items-center justify-between w-full">
                    <div class="flex flex-col">
                        <span class="font-bold">${origin}</span>
                        <span class="text-gray-500 text-sm">${departure_at}</span>
                    </div>
                    <div class="flex flex-col">
                        <span class="font-bold">${destination}</span>
                        <span class="text-gray-500 text-sm">${return_at}</span>
                    </div>
                </div>
                <div class="flex items-center justify-between w-full mt-4">
                    <div class="flex flex-col">
                        <span class="font-bold">${price} ${chosenCurrency}</span>
                        <span class="text-gray-500 text-sm">${transfers} transfers</span>
                    </div>
                    <div class="flex flex-col">
                        <button class="px-4 py-2 font-bold text-white bg-blue-200 rounded-md">Book</button>
                    </div>
                </div>
            </div>`;
      $("#results-placeholder").hide();
      $("#results").removeClass("hidden");
      $("#results").append(flightOption);

      // $('#flight-search-results').addClass('overflow-y-scroll');
      // $('#flight-search-results').removeClass('justify-center');
    });
  });
});
